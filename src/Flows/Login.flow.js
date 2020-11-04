//IMPORTS-----------------------------------------------------------------------------------------------------------

import LoginPage from '../Pages/Login.page';
//import HomePage from '../Pages/Home.page';
import HomePage from '../Pages/Home.page';
const LData = require('../../testData/Data')

//LOGGER -----------------------------------------------------------------------------------------------------------

const log4js = require('log4js');
log4js.configure ({
    appenders:{
        'console': {type:'console'},
    },
    categories: {
        default:{appenders: ['console'], level: 'DEBUG'},
    }
});
const logger=log4js.getLogger();

//TEST DATA-----------------------------------------------------------------------------------------------------------

var testCasename = null
var username = null
var password = null

 //CLASS-----------------------------------------------------------------------------------------------------------
class LoginFlow {
    loginFlow(value){
        try{
            this.dataSetUp(value)
            this.browserSetUp()
            this.login()
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    logonErrorMessage(){
        HomePage.getErrorButton() 
        logger.info("Error message for incorrect User and Password verified...")       

    }
       

    //SUPPORT FUNTIONS-----------------------------------------------------------------------------------------------------------

    dataSetUp(testName){ 
        testCasename =testName
        username=LData[testName].username
        password=LData[testName].password
    }

    browserSetUp() {
        logger.debug("####################################################################################")
        logger.debug("Opening URL")
        logger.debug("Test case name"+ testCasename)
        browser.maximizeWindow()
        browser.url('https://www.saucedemo.com/')  
    }

    testCaseSetup(){
        logger.debug("####################################################################################")
        logger.debug("Opening URL")
        logger.debug("Test case name"+ testCasename)
        logger.debug("User name ...."+ username)     

    }

    login(){
        try{
        logger.info("Typing on username field...")
        LoginPage.setUserName(username)
        logger.info("Typing on password field...")
        LoginPage.setPassword(password)
        logger.info("Cliking  on login button...")
        LoginPage.clickLoginButton()
        }catch (err){
            logger.error(err)
            throw err
        }

    }
    

    

    
}

export default new LoginFlow();
//END-----------------------------------------------------------------------------------------------------------

