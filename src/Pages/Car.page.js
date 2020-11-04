//IMPORTS-----------------------------------------------------------------------------------------------------------


//CLASS-----------------------------------------------------------------------------------------------------------
class CarPage {
   

    get yourCarLabel(){ return $('.subheader')}
    get item01(){ return $('//*[contains  (text(),"Sauce Labs Backpack")]')}    
    //get item01(){ return $('.inventory_item_name')}
    get item02(){ return $('//*[contains  (text(),"Sauce Labs Bike Light")]')}
    get item03(){ return $('//*[contains  (text(),"Sauce Labs Bolt T-Shirt")]')}
    get addToCarButton(){ return $('//*[contains  (text(),"ADD TO CART")]')}
    get shoppingCarIcon01(){ return $('#shopping_cart_container')}
    get continueShoppingButton(){ return $('//*[contains  (text(),"Continue Shopping")]')}
    get checkOutButton(){ return $('//*[contains  (text(),"CHECKOUT")]')}

    
   

  
   
 //METHODS-----------------------------------------------------------------------------------------------------------

        
    getYourCarLabel(){
        this.yourCarLabel.waitForDisplayed()
        return this.yourCarLabel.getText()
    }

    clickItem01 (){
        this.item01.waitForDisplayed()
        this.item01.click()
    }
    
    clickItem02 (){
        this.item02.waitForDisplayed()
        this.item02.click()
    }
    
    clickItem03 (){
        this.item03.waitForDisplayed()
        this.item03.click()
    }

    clickAddToCarButton  (){
        this.addToCarButton.waitForDisplayed(3000)
        this.addToCarButton.click()
    }

    clickCarIcon01 (){
        this.shoppingCarIcon01.waitForDisplayed()
        this.shoppingCarIcon01.click()
    }

    getItem01Label(){
        this.item01.waitForDisplayed()
        return this.item01.getText()
    }

    getItem02Label(){
        this.item02.waitForDisplayed()
        return this.item02.getText()
    }

    getItem03Label(){
        this.item03.waitForDisplayed()
        return this.item03.getText()
    }

    clickContinueShoppingButton(){
        this.continueShoppingButton.waitForDisplayed()
        this.continueShoppingButton.click()
    }

    clickCheckOutButton(){
        this.checkOutButton.waitForDisplayed()
        this.checkOutButton.click()
    }

    

    

    
}

export default new CarPage();