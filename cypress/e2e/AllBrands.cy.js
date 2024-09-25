/// <reference types="cypress" />


describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://price92.pk/mobiles');
    });
  
    it('should have a title element', () => {
        cy.title().should('exist');
    });
  
  
    it('should have a meta description', () => {
        cy.get('meta[name="description"]').should('exist');
    });
  
    it('should contain a header', () => {
        cy.get('h1').should('exist');
    });
  
    it('should contain a canonical url', () => {
      cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://price92.pk/mobiles');
  });
  });