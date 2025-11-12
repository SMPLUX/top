import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('standard user remove item', async ({ page, loginPage, inventoryPage }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await expect(inventoryPage.badge).toHaveText('1');
  await inventoryPage.removeFromCart();
  await expect(inventoryPage.badge).toBeHidden();
});

test.fail('login with error user', async ({ page, loginPage, inventoryPage }) => {
  const userData = UserDataBuilder.withDefault()
    .username('problem_user')
    .password('secret_sauce')
    .build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await expect(inventoryPage.badge).toHaveText('1');
  await inventoryPage.removeFromCart();
  await expect(inventoryPage.badge).toBeHidden();
});
