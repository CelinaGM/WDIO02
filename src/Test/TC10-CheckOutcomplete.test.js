//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow'
import HomeFlow from '../Flows/Home.flow'
import CarFlow from '../Flows/Car.flow'
import CheckoutFlow from '../Flows/Checkout.flow'
import CheckOutPage from '../Pages/CheckOut.page'


//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC10-CheckOutComplete"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        CarFlow.buyinCarFlow()
        CarFlow.loadTwoItems()
        CarFlow.checkOut()
        CheckoutFlow.CheckOutall(scenarioName)
        CheckoutFlow.CheckOutOrderItems()
        CheckoutFlow.CheckOutcomplete()
        browser.pause(3000)

    })
   
})
 
//END-------------------------------------------------------------------------------------------------------