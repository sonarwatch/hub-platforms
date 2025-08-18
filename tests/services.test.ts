import { z } from "zod";
import { services } from "../src/index";

const ContractSchema = z.object({
  name: z.string(),
  address: z.string(),
  serviceId: z.string(),
  platformId: z.string(),
  networkId: z.string(),
});

const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  platformId: z.string(),
  networkId: z.string(),
  contracts: z.array(ContractSchema),
  link: z.string().url().optional(),
  description: z.string().optional(),
});

describe("Services", () => {
  it("should have a length greater than or equal to 0", () => {
    expect(services.length).toBeGreaterThanOrEqual(0);
  });

  it("should have a length less than 100000", () => {
    expect(services.length).toBeLessThan(100000);
  });

  it("should match the ServiceSchema", () => {
    services.forEach((service) => {
      try {
        ServiceSchema.parse(service);
      } catch (e) {
        throw new Error(
          `Service does not match the schema (${service.id}): ${e}`,
        );
      }
    });
  });

  it("should not have duplicate ids", () => {
    const ids = services.map((service) => service.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });

  it("should have valid platformId references", () => {
    const invalidPlatformIds = services
      .map((service) => service.platformId)
      .filter(
        (platformId) =>
          typeof platformId !== "string" || platformId.length === 0,
      );

    expect(invalidPlatformIds).toEqual([]);
  });

  it("should have consistent contract references", () => {
    services.forEach((service) => {
      service.contracts.forEach((contract) => {
        expect(contract.serviceId).toBe(service.id);
        expect(contract.platformId).toBe(service.platformId);
        expect(contract.networkId).toBe(service.networkId);
      });
    });
  });

  it("should not have duplicate contract addresses within the same service", () => {
    services.forEach((service) => {
      const addresses = service.contracts.map((contract) => contract.address);
      const duplicates = addresses.filter(
        (address, index) => addresses.indexOf(address) !== index,
      );

      if (duplicates.length > 0) {
        throw new Error(
          `Service ${service.id} has duplicate contract addresses: ${duplicates.join(", ")}`,
        );
      }
    });
  });

  it("should have non-empty contract names", () => {
    const invalidContracts = services
      .flatMap((service) => service.contracts)
      .filter(
        (contract) => !contract.name || contract.name.trim().length === 0,
      );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with empty names: ${invalidContracts
          .map((c) => c.address)
          .join(", ")}`,
      );
    }
  });

  it("should have service ids that include the platform id", () => {
    const invalidServiceIds = services.filter(
      (service) => !service.id.startsWith(service.platformId),
    );

    if (invalidServiceIds.length > 0) {
      throw new Error(
        `Service IDs should start with platform ID. Invalid services: ${invalidServiceIds
          .map((s) => s.id)
          .join(", ")}`,
      );
    }
  });
});
