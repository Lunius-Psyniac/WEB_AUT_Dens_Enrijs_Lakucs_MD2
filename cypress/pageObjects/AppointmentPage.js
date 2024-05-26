import { BasePage } from "../pageObjects/BasePage";

export class AppointmentPage extends BasePage {
  static get url() {
    return "/#/appointment";
  }

  static get selectFacility() {
    return cy.get('[id="combo_facility"]');
  }

  static get hospitalReadmissionButton() {
    return cy.get('[id="chk_hospotal_readmission"]');
  }

  static get selectHealthcareProgram() {
    return cy.get('[class="col-sm-4"]');
  }

  static get visitDateWidget() {
    return cy.get('[class="input-group-addon"]');
  }

  static get selectVisitDate() {
    return cy.get('[class="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-bottom"]');
  }

  static get comment() {
    return cy.get('[id="txt_comment"]');
  }

  static get bookAppointmentButton() {
    return cy.get('[id="btn-book-appointment"]');
  }

  static get menuButton() {
    return cy.get('[id="menu-toggle"]');
  }

  static get sidebar() {
    return cy.get('[id="sidebar-wrapper"]');
  }
}