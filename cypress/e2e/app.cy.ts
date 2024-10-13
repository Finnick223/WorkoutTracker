describe('The Home Page', () => {
  it('Successfully loads', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /welcome in workout tracker/i }).should(
      'exist',
    );
  });
  it('Successfully login and logout', () => {
    cy.login('string', 'string');
    cy.visit('/');
    cy.findByText(/hi string, welcome back!/i).should('exist');
    cy.findByText(/last measurement/i).should('exist');
    cy.findByText(/weight progress/i).should('exist');
    cy.findByText(/workout stats/i).should('exist');
    cy.findByText(/last training at/i).should('exist');
    cy.findByTestId('PersonIcon').click();
    cy.findByRole('menuitem', { name: /logout/i }).click();
    cy.findByRole('heading', { name: /welcome in workout tracker/i }).should(
      'exist',
    );
  });
  it('Navigate through every route', () => {
    cy.login('string', 'string');
    cy.visit('/');
    cy.findByRole('button', { name: /user/i }).click();
    cy.url().should('include', '/User');
    cy.findByRole('tab', { name: /history/i }).click();
    cy.url().should('include', '/user/history');
    cy.findByRole('tab', { name: /charts/i }).click();
    cy.url().should('include', '/user/charts');
    cy.findByRole('button', { name: /training/i }).click();
    cy.url().should('include', '/Training');
    cy.wait(500);
    cy.findByTestId('PersonIcon').click();
    cy.findByRole('menuitem', { name: /profile/i }).click();
    cy.url().should('include', '/Profile');
  });
});
