import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('login with standard user', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')).toBeVisible();

});

test('login with lockedout user', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault()
    .username('locked_out_user')
    .password('secret_sauce')
    .build();
  await loginPage.login(userData);
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test.fail('login with problem user', async ({ page, loginPage }) => {
  const userData = UserDataBuilder.withDefault()
    .username('problem_user')
    .password('secret_sauce')
    .build();
  await loginPage.login(userData);
  await expect(page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')).toHaveValues({ src: '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg' });
});