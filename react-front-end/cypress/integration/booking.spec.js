describe("booking", () => {

  beforeEach(() => {
    cy.visit("/booking/5");
  });

  it("should book an appointment", () => {
    cy.get(".professional-detail")
      .find(".btn-booking")
      .click();

    cy.get("textarea#appointment_request")
      .type("Hello this is only a test");

    // cy.get(".my-custom-input-class")
    //   .invoke("attr", "value", "16/4/2022");

    // cy.get("select")
    // .select(2, { force: true });
  
    // cy.get("[type='submit'")
    //   .contains("Submit")
    //   .click({ force: true });
  });

})