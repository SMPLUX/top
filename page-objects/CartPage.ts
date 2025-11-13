import { Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }

}