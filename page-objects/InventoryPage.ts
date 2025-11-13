import { Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  backpackImg: Locator;
  badge: Locator;
  addBackpack: Locator;
  addBikeLight: Locator;
  addBoltTShirt: Locator;
  addFleeceJacket: Locator;
  addOnesie: Locator;
  addTestAllTheThingsTShirt: Locator;
  removeBikeLight: Locator;
  removeBoltTShirt: Locator;
  removeFleeceJacket: Locator;
  removeOnesie: Locator;
  removeTestAllTheThingsTShirt: Locator;
  removeBackpack: Locator;
  cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cart = page.locator('[data-test="shopping-cart-link"]');
    this.badge = page.locator('[data-test="shopping-cart-badge"]');
    this.addBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.backpackImg = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');
    this.addBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.removeBikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.addBoltTShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.removeBoltTShirt = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    this.addFleeceJacket = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    this.removeFleeceJacket = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
    this.addOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.removeOnesie = page.locator('[data-test="remove-sauce-labs-onesie"]');
    this.addTestAllTheThingsTShirt = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    this.removeTestAllTheThingsTShirt = page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
  }

  async addtoCart() {
    await this.addBackpack.click();
  }

  async removeFromCart() {
    await this.removeBackpack.click();
  }

}