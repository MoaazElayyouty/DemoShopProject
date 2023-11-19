class shoppingCartPage{

// get Elements 

get discountCodeField(){

return cy.get('[name="discountcouponcode"]');};

get submitTheDiscount(){
return cy.get('[name="applydiscountcouponcode"]');
};

get applyMessage(){
return cy.get('.message');};

get checkBox(){
return cy.get('#termsofservice'); 
};

get checkOut(){
    return cy.get('#checkout');
};

get popUp(){
    return cy.get('p')
}

// Methods 

EnterTheDiscount(){
    this.discountCodeField.type('AutomationDiscount2') 
    return this}

ClickOnApplyTheDiscount(){
this.submitTheDiscount.click(); 
return this}

AssertOnApplying(){
this.applyMessage.should('contain','The coupon code was applied'); 
return this};

ClickOnCheckBox(){
    this.checkBox.click();
    return this};

ClickOnCheckOut(){
    this.checkOut.click();
    return this}; 

CheckPopUp(){
    this.popUp.should('contain.text','Please accept the terms of service before the next step.');
    return this};


}
export default shoppingCartPage; 
