import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('standard user checkout @pipeline', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage, checkoutPageTwo }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await inventoryPage.cart.click();
  await cartPage.checkout();
  await checkoutPage.fillDetails(userData);
  await checkoutPage.continue();
  await expect(checkoutPageTwo.total).toContainText('Total: $32.39');
  await checkoutPageTwo.finish();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

});

test.fail('error user checkout', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
  const userData = UserDataBuilder.withDefault().username('problem_user').build();
  await loginPage.login(userData);
  await inventoryPage.addtoCart();
  await inventoryPage.cart.click();
  await cartPage.checkout();
  await checkoutPage.fillDetails(userData);
  await checkoutPage.continue();
});
