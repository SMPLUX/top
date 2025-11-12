import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    // Use the fixture value in the test.
    await use(loginPage);
  }
});
export { expect } from '@playwright/test';