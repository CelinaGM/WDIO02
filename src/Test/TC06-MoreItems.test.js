//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow'
import HomeFlow from '../Flows/Home.flow'
import CarFlow from '../Flows/Car.flow'


//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC06-MoreItems"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        CarFlow.buyinCarFlow()
        CarFlow.loadTwoItems()
        browser.pause(3000)

    })
    
})
 
//END-------------------------------------------------------------------------------------------------------