/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', (email, password) => {
  cy.session(
    email,
    () => {
      cy.visit('/');
      cy.findByRole('link', {
        name: /login/i,
      }).click();
      cy.findByRole('textbox', {
        name: /email/i,
      }).type(email);
      cy.findByLabelText(/password\*/i).type(password);
      cy.findByRole('button', { name: /log in/i }).click();
      cy.findByText(/welcome back!/i).should('exist');
      cy.wait(500);
    },
    {
      validate: () => {
        cy.getCookie('token').should('exist');
      },
    },
  );
});
