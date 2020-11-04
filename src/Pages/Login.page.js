//IMPORTS-----------------------------------------------------------------------------------------------------------


//CLASS-----------------------------------------------------------------------------------------------------------
class LoginPage {
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get loginbutton() { return $('#login-button') }


//METHODS-----------------------------------------------------------------------------------------------------------

    setUserName (value){
        this.username.waitForDisplayed()
        this.username.setValue(value)

    }
    setPassword (value){
        this.password.waitForDisplayed()
        this.password.setValue(value)
        
    }

    clickLoginButton (){
        this.loginbutton.waitForDisplayed()
        this.loginbutton.click()
    }

}

export default new LoginPage();


//END------------------------------------------------------------------------------------------------------------