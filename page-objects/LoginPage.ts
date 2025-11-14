import { Locator, type Page } from '@playwright/test';
import { UserData } from '../models/userData';

export class LoginPage {
  readonly page: Page;
  passwordInputField: Locator;
  usernameInputField: Locator;
  loginButton: Locator;
  username: any;
  password: any;
  error: Locator;
  backpackImg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputField  = page.locator('[data-test="username"]');
    this.passwordInputField  = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]'); 
    this.error = page.locator('[data-test="error"]');
    this.backpackImg = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');
  }

  async login(userData: UserData) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.usernameInputField.fill(userData.username);
    await this.passwordInputField.fill(userData.password);
    await this.loginButton.click();
  }

}