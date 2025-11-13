import { Locator, type Page } from '@playwright/test';
import { UserData } from '../models/userData';

export class CheckoutPage {
  readonly page: Page;
  continueButton: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  postalCodeInput: Locator;


  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.locator('[data-test="continue"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    
  }

  async fillDetails(userData:UserData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.postalCodeInput.fill(userData.postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }
}