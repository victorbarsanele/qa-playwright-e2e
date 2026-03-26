import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    private get checkoutButton() {
        return this.page.getByTestId('checkout');
    }

    private get checkoutInfoContainer() {
        return this.page.locator('.checkout_info_container');
    }

    private get firstNameInput() {
        return this.page.getByTestId('firstName');
    }

    private get lastNameInput() {
        return this.page.getByTestId('lastName');
    }

    private get postalCodeInput() {
        return this.page.getByTestId('postalCode');
    }

    private get continueButton() {
        return this.page.getByTestId('continue');
    }

    private get checkoutOverviewList() {
        return this.page.locator('.cart_list');
    }

    private get finishButton() {
        return this.page.getByTestId('finish');
    }

    private get validationError() {
        return this.page.locator('.error-message-container');
    }

    private get cancelButton() {
        return this.page.getByTestId('cancel');
    }

    async openCheckout() {
        await this.checkoutButton.click();
    }

    async verifyCheckoutPage() {
        await expect(this.checkoutInfoContainer).toBeVisible();
        await expect(this.page).toHaveURL(/checkout-step-one/);
    }

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string,
    ) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToCheckoutOverview() {
        await this.continueButton.click();
        await expect(this.page).toHaveURL(/checkout-step-two/);
    }

    async failToContinueToCheckoutOverview() {
        await this.continueButton.click();
    }

    async verifyCheckoutOverview() {
        await expect(this.checkoutOverviewList).toBeVisible();
    }

    async finishCheckout() {
        await this.finishButton.click();
        await expect(this.page).toHaveURL(/checkout-complete/);
    }

    async verifyValidationError(errorMessage: string) {
        await expect(this.validationError).toBeVisible();
        await expect(this.validationError).toHaveText(errorMessage);
    }

    async cancelCheckout() {
        await this.cancelButton.click();
        await expect(this.page).toHaveURL(/cart/);
    }
}
