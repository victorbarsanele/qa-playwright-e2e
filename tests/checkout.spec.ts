import { test } from '@playwright/test';
import { CheckoutPage } from '../pages/checkout.page';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import user from '../fixtures/user.json';
import {
    generateFirstName,
    generateLastName,
    generatePostalCode,
    generateUserData,
} from '../utils/data-generator';

test.describe('Checkout', () => {
    // Before each test, perform login and navigate to the inventory page
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await loginPage.verifyLoginSuccess();
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.verifyInventoryPage();
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.openCart();
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.openCheckout();
    });

    test('should fill checkout information and complete purchase', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutInformation(
            generateFirstName(),
            generateLastName(),
            generatePostalCode(),
        );
        await checkoutPage.continueToCheckoutOverview();
        await checkoutPage.verifyCheckoutOverview();
        await checkoutPage.finishCheckout();
    });

    test('should display error when first name in checkout information is incomplete', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutInformation(
            '',
            generateLastName(),
            generatePostalCode(),
        );
        await checkoutPage.failToContinueToCheckoutOverview();
        // Verify that we are still on the checkout page due to validation error
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.verifyValidationError(
            'Error: First Name is required',
        );
    });

    test('should display error when last name in checkout information is incomplete', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutInformation(
            generateFirstName(),
            '',
            generatePostalCode(),
        );
        await checkoutPage.failToContinueToCheckoutOverview();
        // Verify that we are still on the checkout page due to validation error
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.verifyValidationError(
            'Error: Last Name is required',
        );
    });

    test('should display error when postal code in checkout information is missing', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutInformation(
            generateFirstName(),
            generateLastName(),
            '',
        );
        await checkoutPage.failToContinueToCheckoutOverview();
        // Verify that we are still on the checkout page due to validation error
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.verifyValidationError(
            'Error: Postal Code is required',
        );
    });

    test('should display error when checkout information is empty', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutInformation('', '', '');
        await checkoutPage.failToContinueToCheckoutOverview();
        // Verify that we are still on the checkout page due to validation error
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.verifyValidationError(
            'Error: First Name is required',
        );
    });

    test('should return to inventory page when clicking cancel on checkout information', async ({
        page,
    }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.cancelCheckout();
    });
});
