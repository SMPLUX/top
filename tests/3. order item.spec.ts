import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('standard user checkout', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await inventoryPage.cart.click();
  await cartPage.checkout();
  await checkoutPage.fillDetails(userData);
  await checkoutPage.continue();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

});

test.fail('error user checkout', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
  const userData = UserDataBuilder.withDefault().username('problem_user').build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await inventoryPage.cart.click();
  await cartPage.checkout();
  await checkoutPage.fillDetails(userData);
  await checkoutPage.continue();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});
