//IMPORTS-----------------------------------------------------------------------------------------------------------

import CarPage from "./Car.page"


//CLASS-----------------------------------------------------------------------------------------------------------
class CheckOutOverviewPage {
   
    get finishButton(){ return $('//*[contains  (text(),"FINISH")]')}
    get finishLabel(){ return $('//*[contains  (text(),"Finish")]')}
    get orderDispatchedLabel(){ return $('//*[contains  (text(),"Your order has been dispatched")]')}
    
       
   
 //METHODS-----------------------------------------------------------------------------------------------------------

        
    getItem01(){
        CarPage.item01.waitForDisplayed()
        return CarPage.item01.getText()
    }

    getItem02(){
        CarPage.item02.waitForDisplayed()
        return CarPage.item02.getText()
    }

    getItem03(){
        CarPage.item03.waitForDisplayed()
        return CarPage.item03.getText()
    }

    clickFinishbutton (){
        this.finishButton.waitForDisplayed()
        this.finishButton.click()
    }

    getFinishLabel(){
        this.finishLabel.waitForDisplayed()
        return this.finishLabel.getText()
    }

    getOrderDispatchedLabel(){
        this.orderDispatchedLabel.waitForDisplayed()
        return this.orderDispatchedLabel.getText()
    }




    

    

    
}

export default new CheckOutOverviewPage();