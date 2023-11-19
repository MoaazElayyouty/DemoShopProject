class HomePage {
    // Elements
    get product() {
      return cy.get(':nth-child(7) > .product-item > .details > .add-info > .buttons > .button-2');
    }
  
    get processor() {
      return cy.get('#product_attribute_75_5_31_96');
    }
  
    get addToCart() {
      return cy.get('#add-to-cart-button-75');
    }
  
    get successMessage() {
      return cy.get('.content');
    }
  
    // Methods
    selectProduct() {
      this.product.click();
    }
  
    selectProcessor() {
      this.processor.click();
    }
  
    clickOnAddToCart() {
      this.addToCart.click();
    }
  
    assertOnSuccess() {
      this.successMessage.should('contain', 'The product has been added to your');
    }
  }
  
  export default HomePage;