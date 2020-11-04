//IMPORTS-----------------------------------------------------------------------------------------------------------

import LoginPage from '../Pages/Login.page';
import HomePage from '../Pages/Home.page';
import CarPage from '../Pages/Car.page';
import CheckOutPage from '../Pages/CheckOut.page';
import CheckoutOverviewPage from '../Pages/CHeckoutOverview.page';

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

var buyerName = null
var buyerLastName = null
var buyerZipCode = null

 //CLASS-----------------------------------------------------------------------------------------------------------
class CheckOutFlow {
    CheckOutReview(value){
        try{
            this.dataSetUp(value)
            this.CheckOutFields()
            this.ContinueButton()
            CheckOutPage.getErrorMessageLabel()
            logger.info("Error message already validated...")
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    
    CheckOutall(value){
        try{
            this.dataSetUp(value)
            this.CheckOutFields()
            this.CheckOutAllField()
            CheckOutPage.overviewCheckOutLabel()
            logger.info("Member already on Overview PAge...")
            
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    
         

    //SUPPORT FUNTIONS-----------------------------------------------------------------------------------------------------------

    dataSetUp(testName){ 
        buyerName=LData[testName].buyerName
        buyerLastName=LData[testName].buyerLastName
        buyerZipCode=LData[testName].buyerZipCode
    }

        

    CheckOutFields(){
        try{
            
        logger.info("Typing on buyname field...")
        CheckOutPage.setBuyerName(buyerName)
        logger.info("Typing on password field...")
        CheckOutPage.setBuyerLastNAme(buyerLastName)
        
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    
    ContinueButton(){
        try{
        logger.info("Clickling continue button...")
        CheckOutPage.clickContiuneButton()
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    CheckOutAllField(){
        try{
            
        logger.info("Typing Zip code...")
        CheckOutPage.setBuyerZip(buyerZipCode)
        this.ContinueButton()
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    CheckOutOrderItems(){
        try{
            
        logger.info("Checking first item added to car...")
        CheckoutOverviewPage.getItem01()
        logger.info("Checking second item added to car...")
        CheckoutOverviewPage.getItem02()
        logger.info("Checking third item added to car...")
        CheckoutOverviewPage.getItem03()
        logger.info("The items added in car were verified on check out overview page...")

        
        }catch (err){
            logger.error(err)
            throw err
        }

    }

    CheckOutcomplete(){
        try{
            
        logger.info("Clicking Finish button...")
        CheckoutOverviewPage.clickFinishbutton()
        logger.info("Checking Fish order label...")
        CheckoutOverviewPage.getFinishLabel()
        logger.info("Checking Order Dispached label...")
        CheckoutOverviewPage.getOrderDispatchedLabel()
        logger.info("The items where already dispached ,thanks for your shopping...")

        
        }catch (err){
            logger.error(err)
            throw err
        }

    }





    
}

export default new CheckOutFlow();
//END-----------------------------------------------------------------------------------------------------------

