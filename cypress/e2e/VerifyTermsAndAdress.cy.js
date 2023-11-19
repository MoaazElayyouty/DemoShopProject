import { beforeEach } from "mocha";
import BasePage from "../Pages/BasePage.cy";
import HomePage from "../Pages/HomePage.cy";
import shoppingCartPage from "../Pages/ShoppingCartPage.cy";
import CheckOutPage from "../Pages/ChekOutPage.cy";

const page = new BasePage();
const home = new HomePage();
const cart = new shoppingCartPage();
const checkout = new CheckOutPage(); 

// verify that “Terms of service” is mandatory 

describe('checking terms of service', function(){

beforeEach(()=>{
page.LogInForTermsCase(); 
});

afterEach(()=>{
    page.LogOut();
  }); 

it('checking that the checkbox of terms of service is mandatory',{tags:'@Regression”'},
()=>{

page.navigateToShoppingCart(); 
cart.ClickOnCheckOut(); 
cart.CheckPopUp(); 

// verify Billing Address


})

it('verify that it is not possible to proceed without filling the mandatory data',{tags:'@Regression”'},
()=>{

page.navigateToShoppingCart(); 
cart.ClickOnCheckBox(); 
cart.ClickOnCheckOut(); 
checkout.ClickOnContinue();
checkout.VerifyErrorMessage(); 

})
});