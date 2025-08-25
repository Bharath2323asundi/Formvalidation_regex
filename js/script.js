var loginForm = document.getElementById('login-form');
var userName=document.getElementById('username');
var userNameErr=document.getElementById('username-err');
var userNamesucess=document.getElementById('username-sucess');
var password=document.getElementById('password');
var passworderr=document.getElementById('password-err');
var passwordsucess=document.getElementById('password-sucess');


/* user name */
userName.addEventListener('input',function(e) {

    var regex = /^[\w]{8}$/;
    var currentValue =e.target.value;

    var res = regex.test(currentValue);

    if (res) {
        userNameErr.style.display='none';
        userNamesucess.style.display='block';
    }

    else 
        {
        userNameErr.style.display='block';
         userNamesucess.style.display='none';
        
    }
});

/*  for password */
password.addEventListener('input',function(e) {

    var regex = /^[A-Za-z\d@$!%*?&]{8}$/;
    var currentValue =e.target.value;

    var res = regex.test(currentValue);

    if (res) {
        passworderr.style.display='none';
        passwordsucess.style.display='block';
    }

    else 
        {
        passworderr.style.display='block';
         passwordsucess.style.display='none';
        
    }
});



