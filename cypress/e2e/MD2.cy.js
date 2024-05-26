import { AppointmentConfirmationPage } from "../pageObjects/AppointmentConfirmationPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";

describe("MD2 Scenarios", () => {
  context("Scenario 1 - Make an Appointment", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make Appointment", () => {
      // Click Make Appointment button
      HomePage.makeAppointmentButton.click();
      // Set username value to "John Doe"
      LoginPage.usernameTextField.type("John Doe");
      // Set password value to "ThisIsNotAPassword"
      LoginPage.passwordTextField.type("ThisIsNotAPassword");
      // Click Login button
      LoginPage.loginButton.click();

      // Set facility value to "Seoul CURA Healthcare Center"
      AppointmentPage.selectFacility.select("Seoul CURA Healthcare Center");
      // CLick Apply for hospital readmission button
      AppointmentPage.hospitalReadmissionButton.click();
      // Set healthcare program value to "Medicaid"
      AppointmentPage.selectHealthcareProgram.contains("Medicaid").click();
      // Set visit date value to 30
      AppointmentPage.visitDateWidget.click();
      AppointmentPage.selectVisitDate.contains("30").click();
      // Set comment value to "CURA Healthcare Service"
      AppointmentPage.comment.click({force: true}).type("CURA Healthcare Service");
      // Click Book Appointment button
      AppointmentPage.bookAppointmentButton.click();

      // Validate that Facility contains "Seoul CURA Healthcare Center"
      AppointmentConfirmationPage.validateFacility.should("contain.text", "Seoul CURA Healthcare Center");
      // Validate that Apply for hospital readmission contains "Yes"
      AppointmentConfirmationPage.validateHospitalReadmission.should("contain.text", "Yes");
      // Validate that Healthcare Program contains "Medicaid"
      AppointmentConfirmationPage.validateHealthcareProgram.should("contain.text", "Medicaid");
      // Validate that Visit Date contains "30"
      AppointmentConfirmationPage.validateVisitDate.should("contain.text", "30");
      // Validate that Comment contains "CURA Healthcare Service"
      AppointmentConfirmationPage.validateComment.should("contain.text", "CURA Healthcare Service");
    });
  });

  context("Scenario 2 - Appointment History Empty", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Check Appointment History", () => {
      // Click Make Appointment button
      HomePage.makeAppointmentButton.click();
      // Set username value to "John Doe"
      LoginPage.usernameTextField.type("John Doe");
      // Set password value to "ThisIsNotAPassword"
      LoginPage.passwordTextField.type("ThisIsNotAPassword");
      // Click Login button
      LoginPage.loginButton.click();

      // Click menu button
      AppointmentPage.menuButton.click();
      // Validate that the sidebar has the class 'active'
      AppointmentPage.sidebar.should('have.class','active');
      // Click History button
      AppointmentPage.sidebar.contains("History").click();

      // Validate that History contains "No appointment."
      HistoryPage.validateAppointment.should("contain.text", "No appointment.");
    });
  });
});