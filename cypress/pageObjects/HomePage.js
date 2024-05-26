import { BasePage } from "../pageObjects/BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

   static get makeAppointmentButton() {
    return cy.get('[id="btn-make-appointment"]');
   }

}