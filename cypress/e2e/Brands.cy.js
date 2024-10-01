/// <reference types="cypress" />

const brands = [
    'https://staging.price92.com/mobiles/apple-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/samsung-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/oukitel-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/umidigi-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/nothing-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/sharp-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/xiaomi-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/oppo-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/infinix-mobile-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/tecno-mobiles-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/vivo-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/itel-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/realme-mobiles-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/nokia-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/zte-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/sparx-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/dcode-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/huawei-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/google-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/honor-mobiles-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/oneplus-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/meizu-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/lenovo-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/qmobile-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/sony-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/motorola-moto-g-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/htc-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/telenor-mobiles-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/alcatel-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/lg-phones-price-in-pakistan',
    'https://staging.price92.com/mobiles/tcl-phones-price-in-pakistan',
];

describe('Tests for Multiple Brands', function() {
  brands.forEach((brandUrl) => {
    context(`Testing ${brandUrl}`, function() {
      beforeEach(function() {
          cy.visit(brandUrl);
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
