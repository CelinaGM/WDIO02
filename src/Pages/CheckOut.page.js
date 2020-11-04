//IMPORTS-----------------------------------------------------------------------------------------------------------


//CLASS-----------------------------------------------------------------------------------------------------------
class CheckOutPage {
   

    get buyerName(){ return $('#first-name')}
    get buyerLastName(){ return $('#last-name')}
    get buyerZipCode(){ return $('#postal-code')}
    get checkOutButton01(){ return $('//*[contains  (text(),"CHECKOUT")]')}
    //get errorMessage(){ return $('//h3[contains((text()),"Postal Code is required")]')}
    get continueButton(){ return $('//*[contains ( @class,"btn_primary cart_button")]')}
    get errorMessage(){ return $('.error-button')}
    get checkOutLabel(){ return $('.subheader')}

     
  
    

   //METHODS-----------------------------------------------------------------------------------------------------------

    setBuyerName (value){
        //this.buyerName.waitForDisplayed()
        this.buyerName.setValue(value)

    }

    setBuyerLastNAme (value){
        this.buyerLastName.waitForDisplayed()
        this.buyerLastName.setValue(value)
        
    } 
    
    setBuyerZip (value){
        this.buyerZipCode.waitForDisplayed()
        this.buyerZipCode.setValue(value)
        
    }
    
 
    getErrorMessageLabel(){
        this.errorMessage.waitForDisplayed(3000)
        return this.errorMessage.getText()
    }

    clickCheckOutButton01 (){
        this.checkOutButton01.waitForDisplayed()
        this.checkOutButton01.click()
    }

    clickContiuneButton(){
        this.continueButton.waitForDisplayed()
        this.continueButton.click()
    }

    overviewCheckOutLabel(){
        this.checkOutLabel.waitForDisplayed()
        return this.checkOutLabel.getText()
    }
    
        

    

    
}

export default new CheckOutPage();