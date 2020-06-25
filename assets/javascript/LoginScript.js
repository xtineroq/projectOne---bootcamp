//Foundation FrameWork to activate modal
$(document).foundation();

//Variables for Show Password
var $viewPassword = $("#viewPassword");
var $checkPass = $("#checkPass");
var viewLoginPwd = false;

//When checkbox is clicked
$checkPass.on("click", function() {

    if (viewLoginPwd === false) {

        $viewPassword.attr("type", "text");
        
        viewLoginPwd = true;

    } else if (viewLoginPwd === true) {

        $viewPassword.attr("type", "password");

        viewLoginPwd = false;
    }
});

//jquery Current User Input Variables
var $loginBtnCurrent = $("#modalBtnCurrent");
var modalCurrentUser = $(".modalInput").eq(3);
var modalCurrentPass = $(".modalInput").eq(4);

//Current User Login Button
$loginBtnCurrent.on("click", function(){

//Username and Password Input Values 
var currentUsername = modalCurrentUser.val();
var currentPassword = modalCurrentPass.val();

//Get local Storage Values
var localUsername = localStorage.getItem("Username");
var localPassword = localStorage.getItem("Password");

if (currentUsername === localUsername && currentPassword === localPassword) {
    $currentLoginError.hide();
    window.location.replace("PersonalSetting.html");

} else if (localPassword === null && localUsername === null) {

    $currentLoginError.html("You Do Not Have an Account");
    $currentLoginError.show();

} else {

    $currentLoginError.html("Incorrect Details");
    $currentLoginError.show();
}

});


//jquery New User Input Variables
var $loginBtnNew = $("#modalBtnNew");
var $modalPass = $(".modalPass");
var $modalInput = $(".modalInput");


//New User Login button
$loginBtnNew.on("click", function(){

    usernameError = false;
    passwordError = false;
    confirmPasswordError = false;

    checkUsername();
    checkPassword();
    checkConfirmPassword();

    if (usernameError === false && passwordError === false && confirmPasswordError === false) {
        //Store Username and Password
        localStorage.setItem("Username", $modalUsername.val().trim());
        localStorage.setItem("Password", $modalPass.val().trim());
        $newLoginError.hide();
        window.location.replace("PersonalSetting.html");

        return true;
    } else {
        $newLoginError.html("All Fields Must Be Entered Correctly");
        $newLoginError.show();
        return false;
    }

});

//jquery validation variables
var $modalUsername = $("#modalUsername");
var $usernameError = $("#usernameError");
var $modalPass = $("#modalPass");
var $passwordError = $("#passwordError");
var $modalConfirmPass = $("#modalConfirmPass");
var $confirmPasswordError = $("#confirmPasswordError");
var $newLoginError = $("#newLoginError");
var $currentLoginError = $("#currentLoginError");
//Boolean validation variable
var usernameError = false;
var passwordError = false;
var confirmPasswordError = false;

//Hide Error Messages
$usernameError.hide();
$passwordError.hide();
$confirmPasswordError.hide();
$newLoginError.hide();
$currentLoginError.hide();


//Function to check Username
function checkUsername() {
    var pattern = /^[a-zA-Z]*$/;
    var username = $modalUsername.val();
    if (pattern.test(username) && username !== '') {
       $usernameError.hide();
       $modalUsername.css("border-bottom","2px solid #34F458");
    } else {
       $usernameError.html("Should contain only letters");
       $usernameError.show();
       $modalUsername.css("border-bottom","2px solid #F90A0A");
       usernameError = true;
    }
 }

 //Function to check Password length 
 function checkPassword() {
    var passwordLength = $modalPass.val().length;
    if (passwordLength < 8) {
       $passwordError.html("Must be at least 8 Characters");
       $passwordError.show();
       $modalPass.css("border-bottom","2px solid #F90A0A");
       passwordError = true;
    } else {
       $passwordError.hide();
       $modalPass.css("border-bottom","2px solid #34F458");
    }
 }

 //Function to check Password Match
 function checkConfirmPassword() {
    var password = $modalPass.val();
    var confirmPassword = $modalConfirmPass.val();
    if (password !== confirmPassword) {
       $confirmPasswordError.html("Passwords Did not Matched");
       $confirmPasswordError.show();
       $modalConfirmPass.css("border-bottom","2px solid #F90A0A");
       confirmPasswordError = true;
    } else {
       $confirmPasswordError.hide();
       $modalConfirmPass.css("border-bottom","2px solid #34F458");
    }
 }

//When user clicks away from input field run check function (Only for NewUser Login Modal)
$modalUsername.focusout(function(){
    checkUsername();
 });
 $modalPass.focusout(function() {
    checkPassword();
 });
 $modalConfirmPass.focusout(function() {
    checkConfirmPassword();
 });