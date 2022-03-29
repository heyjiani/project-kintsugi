describe('Navigation', () => {
  xit('should visit root', () => {
    cy.visit('/');
  });

  it('should navigate to professionals after selecting search params', () => {
    cy.visit('/');

    cy.get('.selection').contains('Language').click();
    cy.contains('Japanese').click();

    cy.get('.selection').contains('Province').click();
    cy.contains('BC').click();

    cy.get('.searchbtn').click();

    cy.contains('.professionals__item', 'Garek Slamaker');
    cy.contains('professionals__item', 'Ole Beagley').should('not.exist');
  });
});
