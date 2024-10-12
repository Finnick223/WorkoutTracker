describe('Register Form', () => {
  it('Successfully loads', () => {
    cy.visit('/');
    cy.findByRole('link', {
      name: /Register/i,
    }).click();
    cy.findByRole('heading', { name: /sign up/i }).should('exist');
  });

  it('Validate properly', () => {
    cy.visit('/');
    cy.findByRole('link', {
      name: /Register/i,
    }).click();
    cy.findByRole('heading', { name: /sign up/i }).should('exist');
    cy.findByRole('textbox', { name: /first name/i })
      .should('exist')
      .type('d2')
      .blur();
    cy.findByText(/firstname must be at least 3 characters/i).should('exist');
    cy.findByRole('textbox', { name: /first name/i })
      .should('exist')
      .type('asd')
      .blur();
    cy.findByRole('textbox', { name: /last name/i })
      .should('exist')
      .type('d2')
      .blur();
    cy.findByText(/lastname must be at least 3 characters/i).should('exist');
    cy.findByRole('textbox', { name: /last name/i })
      .should('exist')
      .type('asd')
      .blur();
    cy.findByRole('textbox', { name: /email/i })
      .should('exist')
      .type('email')
      .blur();
    cy.findByText(/email must be a valid email/i).should('exist');
    cy.findByRole('textbox', { name: /email/i })
      .should('exist')
      .type('email@email.com')
      .blur();
    cy.findByLabelText('Password*', { selector: 'input' })
      .should('exist')
      .type('d2')
      .blur();
    cy.findByText(/password must be at least 6 characters/i);
    cy.findByLabelText('Password*', { selector: 'input' })
      .should('exist')
      .clear()
      .type('666666')
      .blur();
    cy.findByLabelText('Repassword*', { selector: 'input' })
      .should('exist')
      .type('d')
      .blur();
    cy.findByText(/passwords do not match/i);
    cy.findByLabelText('Repassword*', { selector: 'input' })
      .should('exist')
      .clear()
      .type('666666')
      .blur();
    cy.findByRole('radio', { name: /female/i }).click();
    cy.findByRole('checkbox', { name: /i agree with terms/i }).click();
    cy.findByRole('button', { name: /sign up/i })
      .should('exist')
      .should('not.be.disabled');
  });
  it('navigate to login', () => {
    cy.visit('/');
    cy.findByRole('link', {
      name: /Register/i,
    }).click();
    cy.findByRole('heading', { name: /sign up/i }).should('exist');
    cy.findByRole('link', {
      name: /already have an account\? sign in/i,
    }).click();
    cy.url().should('include', '/Login');
  });
});
