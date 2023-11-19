class CheckOutPage{ 
// Elements 

get Continue (){
    return cy.get('#billing-buttons-container > .button-1');};

get errorMessage(){

return cy.get(':nth-child(5) > .field-validation-error')}; 

get Country(){
    return cy.get('#BillingNewAddress_CountryId')};

get City(){
    return cy.get('#BillingNewAddress_City')}; 

get Adress(){
    return cy.get('#BillingNewAddress_Address1')
};
get postalCode (){
    return cy.get('#BillingNewAddress_ZipPostalCode')
}; 

get PhoneNumber(){
    return cy.get('#BillingNewAddress_PhoneNumber')
}

get NewAdress(){
    return cy.get('#billing-address-select')
}

get ShippingAdress(){
    return cy.get('#shipping-buttons-container > .button-1'); 
}
get ShippingMethod(){
    return cy.get('#shipping-method-buttons-container > .button-1'); 
}; 

get PaymentMethod (){

    return cy.get('#paymentmethod_2')
}
get ContinuePaymentMethod(){

    return cy.get('#payment-method-buttons-container > .button-1');
}
get ContinuePaymentInformation(){
    return cy.get('#payment-info-buttons-container > .button-1'); 
}; 

get confirmOrder(){
    return cy.get('#confirm-order-buttons-container > .button-1'); 
}

get Thankspage(){

    return cy.get('h1')
}
get processed(){
    return cy.get('.title')
}; 

// Methods 

ClickOnContinue(){

this.Continue.click()
return this};

VerifyErrorMessage(){
this.errorMessage.should('contain','Country is required.')
return this};

ChooseCountry(){
    this.Country.select('Canada');return this};

SelectNewAdress(){
    this.NewAdress.select('New Address')
    return this}

ChooseCity(){
    this.City.type('Toronto') 
    return this };
TypeAdress(){
    this.Adress.type('Toronto Golf Course, 1305 Dixie Road') 
    return this};

typePostalCode(){
    this.postalCode.type('L5E 2P8')}

typePhoneNumber(){
    this.PhoneNumber.type('123456789')
    return this};

ContinueShippingAdress(){
    this.ShippingAdress.click(); 
    return this
}
ContinueShippingMethod(){
    this.ShippingMethod.click(); 
    return this
}

ChoosePaymentMethod(){

this.PaymentMethod.click(); return this};

ClickOnContinuePaymentMethod(){
    this.ContinuePaymentMethod.click();}


    
ClickOnContinuePaymentInforamtion()
{this.ContinuePaymentInformation.click()}; 

ClickOnConfirmOrder(){
    this.confirmOrder.click(); 
}; 

AssertOnConfirmation(){
    this.Thankspage.should('contain.text','Thank you');
}; 

AssertOnOrder(){
    this.processed.should('contain.text','Your order has been successfully processed!'); 
}; 

}

export default CheckOutPage; 