
class BasePage {

    validRegister() {
      cy.fixture('Date.json').then((users) => {
        users.forEach((user) => {
          cy.visit('/register');
          cy.get('#gender-male').click();
          cy.get('#FirstName').type('Osker');
          cy.get('#LastName').type('Jass');
          cy.get('[name="Email"]').type(user.email);
          cy.get('#Password').type(user.password)        
          cy.get('#ConfirmPassword').type(user.password);
          cy.get('#register-button').click();
          cy.get('.result').should('contain','Your registration completed');
          cy.get('[value="Continue"]').click();
          cy.get('.ico-logout').click()

        });
      });
    };

    invalidRegister(){
        cy.fixture('Data1.json').then(user =>{
          cy.visit('/register');
          cy.get('#gender-male').click();
          cy.get('#FirstName').type('Osker');
          cy.get('#LastName').type('Jass');
          cy.get('[name="Email"]').type(user.email);
          cy.get('#Password').type(user.password)        
          cy.get('#ConfirmPassword').type(user.password);
          cy.get('#register-button').click();
          cy.get('.validation-summary-errors > ul > li').should('contain',"The specified email already exists");})}



    validLogIn(){
    cy.fixture('Data1.json').then(user =>{
      cy.visit('/login');
      cy.get('#Email').type(user.email);
      cy.get('#Password').type(user.password);
      cy.get('[value="Log in"]').click();
      cy.get('.ico-logout').should('be.visible');
      cy.get('.ico-logout').click() })};   


    LogIn(){
        cy.fixture('Data1.json').then(user =>{
          cy.visit('/login');
          cy.get('#Email').type(user.email);
          cy.get('#Password').type(user.password);
          cy.get('[value="Log in"]').click();
          cy.get('.ico-logout').should('be.visible');})}; 


          LogInForTermsCase(){
            cy.fixture('DataForTerms.json').then(user =>{
              cy.visit('/login');
              cy.get('#Email').type(user.email);
              cy.get('#Password').type(user.password);
              cy.get('[value="Log in"]').click();
              cy.get('.ico-logout').should('be.visible');})}; 
          
          


    LogOut(){
      cy.get('.ico-logout').should('be.visible').wait(3000);
      cy.get('.ico-logout').click()};


    InvalidPassword(){
        cy.fixture('Data1.json').then(user =>{
        cy.visit('/login');
        cy.get('#Email').type(user.email);
        cy.get('#Password').type('Tosca');
        cy.get('[value="Log in"]').click();
        cy.get('.validation-summary-errors').should('contain','The credentials provided are incorrect')


            })};

    InvalidUserName(){

        cy.fixture('Data1.json').then(user =>{
            cy.visit('/login');
            cy.get('#Email').type("oskerjass@gmail.com");
            cy.get('#Password').type(user.password);
            cy.get('[value="Log in"]').click();
            cy.get('.validation-summary-errors').should('contain','No customer account found')
    
    
            })}

    assertOnMessage() {
            cy.on('window:alert', (text) => {
            expect(text).to.contain('Please accept the terms of service before the next step.');
            });};

     navigateToShoppingCart(){
        cy.get('.ico-cart > .cart-label').click();}       




        EnterCreditCartDate(){

        cy.fixture('PaymentDate.json').then(data =>{
        cy.get('#CardholderName').type(data.name); 
        cy.get('#CardNumber').type(data.number);
        cy.get('#ExpireMonth').select('04'); 
        cy.get('#ExpireYear').select('2023'); 
        cy.get('#CardCode').type(data.code); 


        })
        }
      };

  ;
  





export default BasePage; 