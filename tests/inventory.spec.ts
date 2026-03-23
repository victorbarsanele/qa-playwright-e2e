import { test } from '@playwright/test';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import user from '../fixtures/user.json';

test.describe('Inventory', () => {
    // Before each test, perform login to ensure we are on the inventory page
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await loginPage.verifyLoginSuccess();
    });

    test('should display inventory items', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.verifyInventoryPage();
        await inventoryPage.assertItemsVisible();
        await inventoryPage.assertItemHasValidData();
    });

    test('should add item to cart and update badge count', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.verifyInventoryPage();
        // Add the first item to the cart
        await (await inventoryPage.getItems())
            .first()
            .locator('button')
            .click();
        // Verify that the cart badge count updates to 1
        await inventoryPage.addItemToCart('1');
    });

    test('should add multiple items to cart and update badge count', async ({
        page,
    }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.verifyInventoryPage();
        // Add the first three items to the cart
        const items = await inventoryPage.getItems();

        const count = await items.count();
        for (let i = 0; i < Math.min(3, count); i++) {
            await items.nth(i).locator('button').click();
        }

        // Verify that the cart badge count updates to 3
        await inventoryPage.addItemToCart('3');
    });
});
