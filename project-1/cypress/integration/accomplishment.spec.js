/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  it("should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My football accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 3 goals in one match"
    );
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });
  it("should display validation component if all information was provided", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My football accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 3 goals in one match"
    );
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });
  it("should return back to accomplishment dashboard with empty inputs when go back button is clicked", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My football accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 3 goals in one match"
    );
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
    cy.contains("Go Back").click();
    cy.get("h2.Accomplishment-header").should("be.visible");
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked");
  });
});
