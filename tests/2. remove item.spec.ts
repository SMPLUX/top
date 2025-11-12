import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('standard user remove item', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('0');
});

test.fail('login with error user', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault()
    .username('problem_user')
    .password('secret_sauce')
    .build();
  await loginPage.login(userData);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('0');
});
