import { BasePage } from "../pageObjects/BasePage";

export class HistoryPage extends BasePage {
  static get url() {
    return "/#/history.php#history";
  }

  static get validateAppointment() {
    return cy.get('[class="col-sm-12 text-center"]');
  }

}