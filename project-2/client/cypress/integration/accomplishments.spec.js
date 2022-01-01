/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  it("should display inappropriate content error when text or accomplishment include giraffe", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "This is my accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type("i pet a giraffe");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get("button.Accomplishment-btn").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });
  it("should display inappropriate content error when text or accomplishment include giraffe with mock", () => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate mock",
        });
      });
    });
    cy.get("[data-cy='accomplishment-title-input']").type(
      "This is my accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type("i pet a giraffe");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get("button.Accomplishment-btn").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });
});
