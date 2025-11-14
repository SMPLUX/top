import { Locator, type Page } from '@playwright/test';
import { UserData } from '../models/userData';

export class CheckoutPageTwo {
  readonly page: Page;

  finishButton: Locator;
  total: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
    this.total = page.locator('.summary_total_label');
  }

  async finish() {
    await this.finishButton.click();
  }
}