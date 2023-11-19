import { beforeEach } from "mocha";
import BasePage from "../Pages/BasePage.cy";
import HomePage from "../Pages/HomePage.cy";
import shoppingCartPage from "../Pages/ShoppingCartPage.cy";
import CheckOutPage from "../Pages/ChekOutPage.cy";

const page = new BasePage();
const home = new HomePage();
const cart = new shoppingCartPage();
const checkout = new CheckOutPage(); 

// verify that the order has been successfully processed

describe('Ordering and verifying successful order processing"', ()=>{

    beforeEach(()=>{
    page.LogIn(); });
    
    afterEach(()=>{
    page.LogOut();}); 
    

it('User can place an order and verify successful processing', {tags:'@Smoke'}, ()=>{


home.selectProduct();
home.selectProcessor();
home.clickOnAddToCart();
home.assertOnSuccess();
page.navigateToShoppingCart(); 
cart.ClickOnCheckBox(); 
cart.ClickOnCheckOut(); 
checkout.SelectNewAdress();
checkout.ChooseCountry();
checkout.ChooseCity();
checkout.TypeAdress();
checkout.typePostalCode(); 
checkout.typePhoneNumber(); 
checkout.ClickOnContinue();
checkout.ContinueShippingAdress();
checkout.ContinueShippingMethod(); 
checkout.ChoosePaymentMethod(); 
checkout.ClickOnContinuePaymentMethod();
page.EnterCreditCartDate(); 
checkout.ClickOnContinuePaymentInforamtion(); 
checkout.ClickOnConfirmOrder(); 
checkout.AssertOnConfirmation();
checkout.AssertOnOrder(); 



}) }); 