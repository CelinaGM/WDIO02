//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow'
import HomeFlow from '../Flows/Home.flow'


//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC04-ShoppingCar"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        HomeFlow.shoppingCarFlow()
        browser.pause(3000)

    })
    
})
 
//END-------------------------------------------------------------------------------------------------------