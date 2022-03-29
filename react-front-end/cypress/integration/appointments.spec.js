describe("appointments", () => {

  beforeEach(() => {
    cy.visit("/myappointments");
  });

  it("should display the user's appointments", () => {
    cy.get(".center_list").find("ul .appointment").should("have.length", 2);
  });

  it("should be able to connect to a video call", () => {
    cy.get(".appointment")
      .first()
      .find(".appointment__icon")
      .click();

    cy.get(".video")
      .find(".video__container")
      .should("exist");

    cy.contains(".btn-video", "Back to Main").should("exist");
  });

});