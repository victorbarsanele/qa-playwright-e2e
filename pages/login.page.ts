import { Page, expect } from '@playwright/test';

// Import the Page class from Playwright for browser automation
// Import expect for assertions to verify test results

// Create a class to organize login page tests and actions
export class LoginPage {
    // Store the page object to use throughout the class
    constructor(private page: Page) {}

    // Method to navigate to the login page
    async goto() {
        // Visit SauceDemo login page
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Method to fill in the email input field
    async login(email: string, password: string) {
        // Fill in the email field with the provided email
        await this.page.locator('[data-test="username"]').fill(email);
        // Fill in the password field with the provided password
        await this.page.locator('[data-test="password"]').fill(password);
        // Click the login button to submit the form
        await this.page.locator('[data-test="login-button"]').click();
    }

    // Method to verify successful login by checking for a specific element
    async verifyLoginSuccess() {
        // Wait for the inventory container to be visible, indicating a successful login
        await expect(this.page.locator('.inventory_container')).toBeVisible();
        // Additionally, check that the URL has changed to the inventory page
        await expect(this.page).toHaveURL(/inventory/);
    }
    // Method to verify login failure by checking for an error message
    async verifyLoginFailure() {
        // Wait for and check that the error message element is visible
        await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    }
}
