$("#btnPrint").click(function(){

    var name = $("#txtCustomerName").val();//get value
    var gender = $("#cmbGender").val();
    var address = $("#txtAddress").val();

    var html = "<p>Name : " + name + "</p>" +
        "<p>Gender : " + gender + "</p>" +
        "<p>Address : " + address + "</p>";

    $("#output").html(html);

});

$("#btnSave").click(function(){

    var name = $("#txtCustomerName").val();
    var address = $("#txtAddress").val();

    $("#txtCustomerName").removeClass("required");
    $("#txtAddress").removeClass("required");

    if (name.trim().length === 0){
        alert("Please enter a customer name");
        $("#txtCustomerName").addClass("required");
        $("#txtCustomerName").focus();
        return;
    }else if(address.trim().length === 0){
        alert("Please eneter customer's address");
        $("#txtAddress").addClass("required");
        $("#txtAddress").focus();
        return;
    }

    $("#frmCustomer").submit();

});