//IMPORT-------------------------------------------------------------------------------------------------------

import { Logger } from 'log4js';
import LoginFlow from '../Flows/Login.flow';
import HomePage from '../Pages/Home.page';

//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC01-Login"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        console.log(HomePage.getLabelProduct()) 
        console.log("Verification label" + HomePage.productLabel)
        browser.pause(3000)
    })
})
 
//END-------------------------------------------------------------------------------------------------------