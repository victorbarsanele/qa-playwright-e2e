import { test } from '@playwright/test';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import { CartPage } from '../pages/cart.page';
import user from '../fixtures/user.json';

test.describe('Cart Page', () => {
    // Login and prepare a cart with one item before each test.
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await inventoryPage.verifyInventoryPage();
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.assertCartBadgeCount('1');
        await inventoryPage.openCart();
        await cartPage.verifyCartPage();
    });

    test('should show one cart item after adding product from inventory', async ({
        page,
    }) => {
        const cartPage = new CartPage(page);

        await cartPage.assertCartItemsVisible();
        await cartPage.assertCartItemCount(1);
        await cartPage.assertCartItemHasValidData();
    });

    test('should remove item from cart', async ({ page }) => {
        const cartPage = new CartPage(page);

        await cartPage.removeItem();
        await cartPage.assertCartItemCount(0);
        await cartPage.assertCartBadgeHidden();
    });

    test('should continue shopping and return to inventory', async ({
        page,
    }) => {
        const cartPage = new CartPage(page);
        const inventoryPage = new InventoryPage(page);

        await cartPage.continueShopping();
        await inventoryPage.verifyInventoryPage();
    });
});
