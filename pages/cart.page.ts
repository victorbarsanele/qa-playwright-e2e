import { expect, Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    private get cartList() {
        return this.page.locator('.cart_list');
    }

    private get cartItems() {
        return this.page.locator('.cart_item');
    }

    private get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    private get removeButton() {
        return this.page.locator('.cart_button');
    }

    private get continueShoppingButton() {
        return this.page.getByTestId('continue-shopping');
    }

    async verifyCartPage() {
        await expect(this.cartList).toBeVisible();
        await expect(this.page).toHaveURL(/cart/);
    }

    async assertCartItemsVisible() {
        const count = await this.cartItems.count();
        expect(count).toBeGreaterThan(0);
    }

    async assertCartItemHasValidData() {
        const items = this.cartItems.first();
        await expect(items.locator('.inventory_item_name')).toBeVisible();
        await expect(items.locator('.inventory_item_price')).toBeVisible();
    }

    async assertCartItemCount(count: number) {
        await expect(this.cartItems).toHaveCount(count);
    }

    async removeItem() {
        await this.removeButton.click();
    }

    async assertCartBadgeHidden() {
        await expect(this.cartBadge).toHaveCount(0);
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}
