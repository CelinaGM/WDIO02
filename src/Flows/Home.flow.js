//IMPORTS-----------------------------------------------------------------------------------------------------------


import LoginPage from '../Pages/Login.page';
import HomePage from '../Pages/Home.page';
//import HomePage from '../Pages/Car.page';
import CarPage from '../Pages/Car.page';




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

//CLASS-----------------------------------------------------------------------------------------------------------
 class HomeFlow {

    shoppingCarFlow(){
        try{
           
           HomePage.clickCarIcon()
           browser.pause(1000)
           CarPage.getYourCarLabel()
           logger.info("User already navegating on shopping car page...")
           
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    logoutFlow(){
        try{
            
            this.logout()
            logger.info("User already on logon page again after logout...")
        }catch (err){
            logger.error(err)
            throw err
        }

    }




    //SUPPORT FUNTIONS-----------------------------------------------------------------------------------------------------------

    logout(){
        try{
        logger.info("Selecting burger button from home page...")
        HomePage.clickBurgenButton()
        logger.info("Selecting Logout option...")
        HomePage.clicklogoutOption()
        
        
        }catch (err){
            logger.error(err)
            throw err
        }

    }
  
    
}

export default new HomeFlow();
//END-----------------------------------------------------------------------------------------------------------

