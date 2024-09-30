/// <reference types="cypress" />

const upcoming = [
    'https://price92.pk/mobile/upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/nothing-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/tcl-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/sharp-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/oukitel-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/umidigi-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/itel-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/realme-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/zte-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/tecno-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/vivo-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/lg-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/google-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/huawei-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/xiaomi-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/infinix-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/apple-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/oppo-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/sony-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/samsung-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/oneplus-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/honor-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/motorola-moto-g-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/htc-upcoming-mobiles-in-pakistan',
    'https://price92.pk/mobile/nokia-upcoming-mobiles-in-pakistan',
];

describe('Tests for Multiple Brands', function() {
  upcoming.forEach((upcomingUrl) => {
    context(`Testing ${upcomingUrl}`, function() {
      beforeEach(function() {
          cy.visit(upcomingUrl);
      });

      it('should have a title element', function() {
          cy.title().should('exist');
      });


      it('should have a meta description', function() {
          cy.get('meta[name="description"]').should('exist');
      });


      it('should contain a header', function() {
          cy.get('h1').should('exist');
      });

      it('should have a canonical link', function() {
          cy.get('link[rel="canonical"]').should('exist');
      });

    });
  });
});
