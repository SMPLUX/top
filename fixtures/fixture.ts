import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';
import { CartPage } from '../page-objects/CartPage';
import { CheckoutPage } from '../page-objects/CheckoutPage';
import { CheckoutPageTwo } from '../page-objects/CheckoutPageTwo';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutPageTwo: CheckoutPageTwo;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ page }, use) => {  
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {  
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  checkoutPageTwo: async ({ page }, use) => {  
    const checkoutPageTwo = new CheckoutPageTwo(page);
    await use(checkoutPageTwo);
  },
});
export { expect } from '@playwright/test';