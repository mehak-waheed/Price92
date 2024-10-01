/// <reference types="cypress" />

const upcomingUrl = [
    'https://staging.price92.com/mobile/upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/nothing-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/tcl-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/sharp-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/oukitel-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/umidigi-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/itel-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/realme-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/zte-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/tecno-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/vivo-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/lg-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/google-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/huawei-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/xiaomi-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/infinix-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/apple-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/oppo-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/sony-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/samsung-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/oneplus-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/honor-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/motorola-moto-g-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/htc-upcoming-mobiles-in-pakistan',
    'https://staging.price92.com/mobile/nokia-upcoming-mobiles-in-pakistan',
];

describe('Tests for Multiple Brands', function() {
  upcomingUrl.forEach((upcomingUrl) => {
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
