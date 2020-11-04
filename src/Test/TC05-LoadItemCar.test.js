//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow'
import HomeFlow from '../Flows/Home.flow'
import CarFlow from '../Flows/Car.flow'


//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC05-LoadIemCar"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        CarFlow.buyinCarFlow()
        browser.pause(3000)

    })
    
})
 
//END-------------------------------------------------------------------------------------------------------