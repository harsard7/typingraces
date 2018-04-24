$("#btnSave").click(function(){


    var name = $("#txtusername").val();//get value
    var password = $("#txtpassword").val();
    var email = $("#txtemailid").val();
    var gender = $("#cmbGender").val();

    $("#txtusername").removeClass("required");
    $("#txtemailid").removeClass("required");
    $("#txtpassword").removeClass("required");
    $("#cmbGender").removeClass("required");



    if (name.trim().length === 0){
        alert("Please enter the username");
        $("#txtusername").addClass("required");
        $("#txtusername").focus();
        return;
    }else if(password.trim().length === 0){
        alert("Please enter the Password");
        $("#txtpassword").addClass("required");
        $("#txtpassword").focus();
        return;
    }else if(email.trim().length === 0){
        alert("Please enter the EmailId");
        $("#txtemailid").addClass("required");
        $("#txtemailid").focus();
        return;
    }else if(gender.trim().length === 0){
        alert("Please select the gender");
        $("#cmbGender").addClass("required");
        $("#cmbGender").focus();
        return;
    }

    //Validation - All fields are mandatory




    var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result = exp.test(email)
    if (!result){
        alert("Invalid Email");
        $("#txtemailid").addClass("required");
        $("#txtemailid").focus();
        return false;
    }



    exp = /^[A-Za-z0-9\s]{5,8}$/;
    result = exp.test(password);
    if(!result){
        alert("Password should be alpha numeric and a minimum of 5 and maximum of 8 characters");
        $("#txtpassword").addClass("required");
        $("#txtpassword").focus();
        return false;
    }

    alert("Registration Success");
    location.replace("typing.html");
    return true;


});