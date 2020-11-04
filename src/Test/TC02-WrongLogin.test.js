//IMPORT-------------------------------------------------------------------------------------------------------

import LoginFlow from '../Flows/Login.flow';
import HomePage from '../Pages/Home.page';

//VARIABLES-------------------------------------------------------------------------------------------------------
var scenarioName = "TC02-WrongLogin"

//TEST-------------------------------------------------------------------------------------------------------
describe("Login flow",() => {
    it(scenarioName,() =>{
        LoginFlow.loginFlow(scenarioName)
        console.log(HomePage.getErrorButton())
        //HomePage.ClickErrorButton()
        LoginFlow.logonErrorMessage()
        browser.pause(3000) 
    })
})
 
//END-------------------------------------------------------------------------------------------------------