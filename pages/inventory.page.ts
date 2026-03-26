import { expect, Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    private get inventoryContainer() {
        return this.page.locator('.inventory_container');
    }

    private get inventoryItems() {
        return this.page.locator('.inventory_item');
    }

    private get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    private get cartLink() {
        return this.page.getByTestId('shopping-cart-link');
    }

    async verifyInventoryPage() {
        await expect(this.inventoryContainer).toBeVisible();
        await expect(this.page).toHaveURL(/inventory/);
    }

    // Method to retrieve all inventory items on the page
    async getItems() {
        return this.inventoryItems;
    }

    // Method to assert that inventory items are visible on the page
    async assertItemsVisible() {
        const items = this.getItems();
        const count = await (await items).count();
        expect(count).toBeGreaterThan(0);
    }

    // Method to assert that each inventory item has a name and price visible
    async assertItemHasValidData() {
        const items = (await this.getItems()).first();
        await expect(items.locator('.inventory_item_name')).toBeVisible();
        await expect(items.locator('.inventory_item_price')).toBeVisible();
    }

    // Method to assert that the shopping cart badge has the expected count
    async assertCartBadgeCount(count: string) {
        await expect(this.cartBadge).toHaveText(count);
    }

    // Method to add the first item in the inventory list to the cart
    async addFirstItemToCart() {
        const firstItemAddButton = this.inventoryItems.first().locator('button');
        await firstItemAddButton.click();
    }

    // Method to add the first N items in the inventory list to the cart
    async addFirstNItemsToCart(quantity: number) {
        const items = this.inventoryItems;
        const count = await items.count();
        const limit = Math.min(quantity, count);

        for (let i = 0; i < limit; i++) {
            await items.nth(i).locator('button').click();
        }
    }

    // Method to open the shopping cart page
    async openCart() {
        await this.cartLink.click();
    }
}
