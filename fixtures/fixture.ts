import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    // Use the fixture value in the test.
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    // Set up the fixture.
    const inventoryPage = new InventoryPage(page);
    // Use the fixture value in the test.
    await use(inventoryPage);
  }
});
export { expect } from '@playwright/test';