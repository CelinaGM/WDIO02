//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow'
import HomeFlow from '../Flows/Home.flow'
import CarFlow from '../Flows/Car.flow'
import CheckoutFlow from '../Flows/Checkout.flow'


//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC07-MissingZip"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        CarFlow.buyinCarFlow()
        CarFlow.checkOut()
        CheckoutFlow.CheckOutReview(scenarioName)
        browser.pause(3000)

    })
    
})
 
//END-------------------------------------------------------------------------------------------------------