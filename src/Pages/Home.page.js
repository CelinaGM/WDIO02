//IMPORTS-----------------------------------------------------------------------------------------------------------


//CLASS-----------------------------------------------------------------------------------------------------------
class HomePage {
    
    get burgerButton() { return $('//*[@style="z-index: 1000;"]') }
    get logoutOption() { return $('#logout_sidebar_link') }
    //get shoppingCarIcon() { return $('//a[@href="./cart.html"]') }
    get shoppingCarIcon(){ return $('#shopping_cart_container')}
    get logoutOption(){ return $('#logout_sidebar_link')}
    get productLabel(){ return $('.product_label')}
    get errorMessage(){ return $('//*[contains  (text(),"Username and password ")]')}
    get errorButton(){ return $('.error-button')}

    
//METHODS-----------------------------------------------------------------------------------------------------------

    clickBurgenButton (){
        this.burgerButton.waitForDisplayed()
        this.burgerButton.click()
    }
    
    clickLogoutButton (){
        this.logoutOption.waitForDisplayed()
        this.logoutOption.click()
    }

    clickCarIcon (){
        this.shoppingCarIcon.waitForDisplayed()
        this.shoppingCarIcon.click()
    }

    clicklogoutOption (){
        this.logoutOption.waitForDisplayed()
        this.logoutOption.click()
    }
    
    getLabelProduct(){
        this.productLabel.waitForDisplayed()
        return this.productLabel.getText()
    }

    getLabelError(){
        this.errorMessage.waitForDisplayed()
        return this.errorMessage.getText()
    }

    getErrorButton(){
        this.errorButton.waitForDisplayed()
        return this.errorButton.getText()
    }
    ClickErrorButton (){
        this.errorButton.waitForDisplayed()
        this.errorButton.click()
    }
}

export default new HomePage();