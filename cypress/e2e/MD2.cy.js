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
      HomePage.makeAppointmentButton.click();
      LoginPage.usernameTextField.type('John Doe');
      LoginPage.passwordTextField.type('ThisIsNotAPassword');
      LoginPage.loginButton.click();

      AppointmentPage.selectFacility.select("Seoul CURA Healthcare Center");
      AppointmentPage.hospitalReadmissionButton.click();
      AppointmentPage.selectHealthcareProgram.contains("Medicaid").click();
      AppointmentPage.visitDateWidget.click();
      AppointmentPage.selectVisitDate.contains("30").click();
      AppointmentPage.comment.click({force: true}).type("CURA Healthcare Service");
      AppointmentPage.bookAppointmentButton.click();

      AppointmentConfirmationPage.validateFacility.should("contain.text", "Seoul CURA Healthcare Center");
      AppointmentConfirmationPage.validateHospitalReadmission.should("contain.text", "Yes");
      AppointmentConfirmationPage.validateHealthcareProgram.should("contain.text", "Medicaid");
      AppointmentConfirmationPage.validateVisitDate.should("contain.text", "30");
      AppointmentConfirmationPage.validateComment.should("contain.text", "CURA Healthcare Service");
    });
  });

  context("Scenario 2 - Appointment History Empty", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Check Appointment History", () => {
      HomePage.makeAppointmentButton.click();
      LoginPage.usernameTextField.type('John Doe');
      LoginPage.passwordTextField.type('ThisIsNotAPassword');
      LoginPage.loginButton.click();

      AppointmentPage.menuButton.click();
      AppointmentPage.sidebar.should('have.class','active');
      AppointmentPage.sidebar.contains("History").click();

      HistoryPage.validateAppointment.should("contain.text", "No appointment.");
    });
  });
});