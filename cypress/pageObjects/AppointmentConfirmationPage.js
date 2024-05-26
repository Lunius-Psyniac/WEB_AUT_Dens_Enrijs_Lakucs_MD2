import { BasePage } from "../pageObjects/BasePage";

export class AppointmentConfirmationPage extends BasePage {
  static get url() {
    return "/#/appointment.php#summary";
  }

  static get validateFacility() {
    return cy.get('[id="facility"]');
  }

  static get validateHospitalReadmission() {
    return cy.get('[id="hospital_readmission"]');
  }

  static get validateHealthcareProgram() {
    return cy.get('[id="program"]');
  }

  static get validateVisitDate() {
    return cy.get('[id="visit_date"]');
  }

  static get validateComment() {
    return cy.get('[id="comment"]');
  }

}