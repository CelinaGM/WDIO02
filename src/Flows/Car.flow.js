//IMPORTS-----------------------------------------------------------------------------------------------------------


import LoginPage from '../Pages/Login.page';
import HomePage from '../Pages/Home.page';
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
 class CarFlow {

   
    buyinCarFlow(){
        try{
            
            this.loadCar()
            logger.info("Item selected was added to shopping Car...")
        }catch (err){
            logger.error(err)
            throw err
        }
    }

    buyTwoItems(){
        try{
            
            this.loadTwoItems()
        }catch (err){
            logger.error(err)
            throw err
        }
    }

    checkOut(){
        try{
            
            this.checkOutAction()
        }catch (err){
            logger.error(err)
            throw err
        }
    }




    //SUPPORT FUNTIONS-----------------------------------------------------------------------------------------------------------

    loadCar(){
        try{
        logger.info("Selecting Sauce Labs Backpack item...")
        CarPage.clickItem01()
        logger.info("Clicking Add to car button...")
        CarPage.clickAddToCarButton()
        CarPage.clickCarIcon01()
        CarPage.getItem01Label()
        browser.pause(2000)
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    loadTwoItems(){
        try{
        CarPage.clickContinueShoppingButton()
        logger.info("Selecting Sauce Labs Bike Light...")
        CarPage.clickItem02()
        logger.info("Clicking Add to car button...")
        CarPage.clickAddToCarButton()
        CarPage.clickCarIcon01()
        CarPage.getItem02Label()
        CarPage.clickContinueShoppingButton()
        logger.info("Selecting Sauce Labs Bolt T-Shirt...")
        CarPage.clickItem03()
        logger.info("Clicking Add to car button...")
        CarPage.clickAddToCarButton()
        CarPage.clickCarIcon01()
        CarPage.getItem03Label()
        logger.info("Three items already added to car and verified them too ...")
        browser.pause(2000)
        }catch (err){
            logger.error(err)
            throw err
        }

    }checkOutAction(){
        try{
        logger.info("Hit click over Checkout Button...")
        CarPage.clickCheckOutButton()
        logger.info("User moving to Checkout page...")
       
        }catch (err){
            logger.error(err)
            throw err
        }

    }
    

  

    
  
    
}

export default new CarFlow();
//END-----------------------------------------------------------------------------------------------------------

