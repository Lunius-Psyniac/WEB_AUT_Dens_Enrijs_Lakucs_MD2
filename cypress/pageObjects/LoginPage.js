import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get usernameTextField() {
    return cy.get('[id="txt-username"]');
  }

  static get passwordTextField() {
    return cy.get('[id="txt-password"]');
  }

  static get loginButton() {
    return cy.get('[id="btn-login"]');
  }
}