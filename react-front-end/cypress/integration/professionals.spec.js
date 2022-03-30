describe("professionals", () => {

  beforeEach(() => {
    cy.visit("/professionals/search/BC/Japanese");
  });

  it("should be able to go to each professional's page", () => {

    cy.get(".professionals")
      .contains(".professionals__item", "Garek Slamaker")
      .find("button")
      .click();

    cy.get(".professional-detail")
      .contains("Click here to book with Garek").should("exist");

  });

  it("should sort professionals by Issues", () => {

    cy.get(".sidebar").within(() => {
      cy.contains("Issues").click()
      cy.get("[value=2]").click();
    });

    cy.contains(".professionals", "Xever Patel").should("not.exist");
    cy.contains(".sidebar", "Close").should("exist");

    cy.get(".professionals").find(".professionals__item").should("have.length", 2);

  });

  it("should sort professionals by Cities", () => {

    cy.get(".sidebar").within(() => {
      cy.contains("Cities").click()
      cy.get("[value='Kelowna']").click();
    });    

    cy.contains(".professionals", "Tobias Brainsby").should("exist");
    cy.contains(".professionals", "Garek Slamaker").should("not.exist");

    cy.get(".professionals").find(".professionals__item").should("have.length", 1);
  });
  
})