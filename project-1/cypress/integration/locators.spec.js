/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });
  it("locating elemets with get", () => {
    // Get all elements by tag name
    cy.get("button");

    // Get all elements by class name
    cy.get(".btn-with-class");

    // Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes' ]");
    cy.get("[class='Elements-btn btn-with-class' ]");

    // Get all elements by ID
    cy.get("#btn-with-id");
    cy.get("[id='btn-with-id' ]");

    // Get all elements by specific attribute
    cy.get("[type='submit']");

    // Get all elements by tag name && class
    cy.get("button.Elements-btn");

    // Get all elemets by tag name && class && id
    cy.get("button.Elements-btn#btn-with-id");

    // Get all elements by tag name && class && type attribute
    cy.get("button.Elements-btn[type='submit']");

    // Get all elements with specific data id
    cy.get("[data-cy='btn-id-1']");
    cy.getByTestId("btn-id-1");
  });
  it("locating elemets with contains", () => {
    // Get element by text
    cy.contains("Unique Text");

    // Get element by text
    cy.contains("Not Unique Text");

    // Get element with selector
    cy.contains("[type='submit']", "Not Unique Text");

    cy.contains("form", "Not Unique Text");

    cy.get("[type='submit']").contains("Not Unique Text");
  });

  it("locating elemets with find", () => {
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");
  });
});
