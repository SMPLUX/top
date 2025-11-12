import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('login with standard user', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});