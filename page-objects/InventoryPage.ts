import { Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  backpackImg: Locator;
  badge: Locator;
  addProduct: Locator;
  removeProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackImg = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');
    this.badge = page.locator('[data-test="shopping-cart-badge"]');
    this.addProduct = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    this.removeProduct = page.locator('[data-test="remove-sauce-labs-backpack"]')
  }

  async addtoCart() {
    await this.addProduct.click();
  }

  async removeFromCart() {
    await this.removeProduct.click();
  }

}