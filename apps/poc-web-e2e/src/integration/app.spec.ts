import { getGreeting } from '../support/app.po';

describe('ve3ndors', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to poc!');
  });
});
