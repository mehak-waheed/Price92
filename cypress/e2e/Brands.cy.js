/// <reference types="cypress" />

const brands = [
    'https://price92.pk/mobiles/apple-phones-price-in-pakistan',
    'https://price92.pk/mobiles/samsung-phones-price-in-pakistan',
    'https://price92.pk/mobiles/oukitel-phones-price-in-pakistan',
    'https://price92.pk/mobiles/umidigi-phones-price-in-pakistan',
    'https://price92.pk/mobiles/nothing-phones-price-in-pakistan',
    'https://price92.pk/mobiles/sharp-phones-price-in-pakistan',
    'https://price92.pk/mobiles/xiaomi-phones-price-in-pakistan',
    'https://price92.pk/mobiles/oppo-phones-price-in-pakistan',
    'https://price92.pk/mobiles/infinix-mobile-phones-price-in-pakistan',
    'https://price92.pk/mobiles/tecno-mobiles-phones-price-in-pakistan',
    'https://price92.pk/mobiles/vivo-phones-price-in-pakistan',
    'https://price92.pk/mobiles/itel-phones-price-in-pakistan',
    'https://price92.pk/mobiles/realme-mobiles-phones-price-in-pakistan',
    'https://price92.pk/mobiles/nokia-phones-price-in-pakistan',
    'https://price92.pk/mobiles/zte-phones-price-in-pakistan',
    'https://price92.pk/mobiles/sparx-phones-price-in-pakistan',
    'https://price92.pk/mobiles/dcode-phones-price-in-pakistan',
    'https://price92.pk/mobiles/huawei-phones-price-in-pakistan',
    'https://price92.pk/mobiles/google-phones-price-in-pakistan',
    'https://price92.pk/mobiles/honor-mobiles-phones-price-in-pakistan',
    'https://price92.pk/mobiles/oneplus-phones-price-in-pakistan',
    'https://price92.pk/mobiles/meizu-phones-price-in-pakistan',
    'https://price92.pk/mobiles/lenovo-phones-price-in-pakistan',
    'https://price92.pk/mobiles/qmobile-phones-price-in-pakistan',
    'https://price92.pk/mobiles/sony-phones-price-in-pakistan',
    'https://price92.pk/mobiles/motorola-moto-g-phones-price-in-pakistan',
    'https://price92.pk/mobiles/htc-phones-price-in-pakistan',
    'https://price92.pk/mobiles/telenor-mobiles-phones-price-in-pakistan',
    'https://price92.pk/mobiles/alcatel-phones-price-in-pakistan',
    'https://price92.pk/mobiles/lg-phones-price-in-pakistan',
    'https://price92.pk/mobiles/tcl-phones-price-in-pakistan',
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
