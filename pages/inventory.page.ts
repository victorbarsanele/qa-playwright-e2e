import { expect, Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    async verifyInventoryPage() {
        await expect(this.page.locator('.inventory_container')).toBeVisible();
        await expect(this.page).toHaveURL(/inventory/);
    }

    // Method to retrieve all inventory items on the page
    async getItems() {
        return this.page.locator('.inventory_item');
    }

    async assertItemsVisible() {
        const items = this.getItems();
        const count = await (await items).count();
        expect(count).toBeGreaterThan(0);
    }

    async assertItemHasValidData() {
        const items = (await this.getItems()).first();
        await expect(items.locator('.inventory_item_name')).toBeVisible();
        await expect(items.locator('.inventory_item_price')).toBeVisible();
    }

    async addItemToCart(count: string) {
        const badge = this.page.locator('.shopping_cart_badge');
        await expect(badge).toHaveText(count);
    }
}
