import { UserDataBuilder } from '../models/userData';
import { test, expect } from '../fixtures/fixture';

test('order multiple', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage, checkoutPageTwo }) => {
  const userData = UserDataBuilder.withDefault().build();
  await loginPage.login(userData);
  await inventoryPage.addBackpack.click();
  await inventoryPage.addBikeLight.click();
  await inventoryPage.addBoltTShirt.click();
  await inventoryPage.cart.click();
  await cartPage.checkout();
  await checkoutPage.fillDetails(userData);
  await checkoutPage.continue();

  let total = 0;
  for (let i = 0; i < 3; i++) {
    const text = await checkoutPageTwo.itemPrice.nth(i).textContent();
    const price = parseFloat((text ?? '').replace(/[^0-9.-]+/g, ''));
    total += isNaN(price) ? 0 : price * 1.08;  }
    console.log(`total with tax: $${total.toFixed(2)}`);
  await expect(checkoutPageTwo.total).toContainText(`Total: $${total.toFixed(2)}`);
});
