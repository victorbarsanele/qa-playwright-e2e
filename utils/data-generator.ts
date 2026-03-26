import { faker } from '@faker-js/faker';

export type UserData = {
    firstName: string;
    lastName: string;
    postalCode: string;
};

faker.seed(123); // Set a fixed seed for reproducibility of generated data

export function generateUserData(): UserData {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        postalCode: faker.location.zipCode(),
    };
}

export function generateFirstName(): string {
    return faker.person.firstName();
}

export function generateLastName(): string {
    return faker.person.lastName();
}

export function generatePostalCode(): string {
    return faker.location.zipCode();
}
