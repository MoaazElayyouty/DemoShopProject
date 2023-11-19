

import BasePage from "../Pages/BasePage.cy";
import HomePage from "../Pages/HomePage.cy";
import shoppingCartPage from "../Pages/ShoppingCartPage.cy";

const page = new BasePage();
const home = new HomePage();
const cart = new shoppingCartPage(); 


/// RegisterTestCases : 

describe("Register with valid and invalid data", () => {

// Register with 3 valid users

  it("Register with 3 valid users with random data", { tags: '@Smoke' }, () => {
   
    page.validRegister();
  });

// existing customer

  it("Verify registering an already existing customer", { tags: '@Regression' }, () => {
    page.invalidRegister();
   

  }); });

/// LogInTestCases : 

describe('Log in with valid and invalid Data', ()=>{

//Valid User

it('it schould log in with valid Email and Password', {tags: '@Smoke'}, ()=>{
page.validLogIn();})


//Invalid Password 
it('checking log in with valid Email and invalid password', {tags:'@Regression”'}, ()=>{

    page.InvalidPassword();
});

//Invalid Email 

it('checking log in with invalid Email and valid password', {tags:'@Regression”'}, ()=>{

    page.InvalidUserName();

}); });

/// Adding items to the Cart and verfiy on shopping Cart 

describe('check add to Cart and shopping cart', () => {

  beforeEach(()=>{
    page.LogIn();
  });

  afterEach(()=>{
    page.LogOut();
  }); 

  it('Check adding items to the cart and verifying successful addition', { tags: '@Smoke' }, () => {
   
    home.selectProduct();
    home.selectProcessor();
    home.clickOnAddToCart();
    home.assertOnSuccess();
  });

/// check adding discount Code 

  it('verify adding discount Code and assert on the applying the discount',{tags:'@Regression”'}, ()=>{
  
  page.navigateToShoppingCart(); 
  cart.EnterTheDiscount();
  cart.ClickOnApplyTheDiscount(); 
  cart.AssertOnApplying(); 


  })
});


