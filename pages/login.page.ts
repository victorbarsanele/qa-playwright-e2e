import { Page, expect } from '@playwright/test';

// Import the Page class from Playwright for browser automation
// Import expect for assertions to verify test results

// Create a class to organize login page tests and actions
export class LoginPage {
    // Store the page object to use throughout the class
    constructor(private page: Page) {}

    private get usernameInput() {
        return this.page.getByTestId('username');
    }

    private get passwordInput() {
        return this.page.getByTestId('password');
    }

    private get loginButton() {
        return this.page.getByTestId('login-button');
    }

    private get errorMessage() {
        return this.page.getByTestId('error');
    }

    // Method to navigate to the login page
    async goto() {
        // Visit SauceDemo login page
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Method to fill in the username input field
    async login(username: string, password: string) {
        // Fill in the username field with the provided username
        await this.usernameInput.fill(username);
        // Fill in the password field with the provided password
        await this.passwordInput.fill(password);
        // Click the login button to submit the form
        await this.loginButton.click();
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
        await expect(this.errorMessage).toBeVisible();
    }
}
