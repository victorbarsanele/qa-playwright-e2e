// login.spec.ts
// Import necessary modules and classes for testing
import { test } from '@playwright/test';

// Import the LoginPage class to interact
import { LoginPage } from '../../pages/login.page';

// Import user credentials from a JSON file for testing
import user from '../../fixtures/user.json';

// Describe the test suite for login functionality
test.describe('Login', () => {
    // Test case for successful login
    test('should login successfully', async ({ page }) => {
        // Create an instance of the LoginPage class to perform actions on the login page
        const loginPage = new LoginPage(page);
        // Navigate to the login page, perform login with valid credentials, and verify successful login
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await loginPage.verifyLoginSuccess();
    });

    // Test case for login failure with invalid credentials
    test('should show error with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');
        await loginPage.verifyLoginFailure();
    });
});
