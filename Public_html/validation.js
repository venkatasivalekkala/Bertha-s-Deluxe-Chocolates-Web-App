$(document).ready(function() {
var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(16);
    elementHandle[0] = $('[name="name"]');
    elementHandle[1] = $('[name="address"]');
    elementHandle[2] = $('[name="city"]');
    elementHandle[3] = $('[name="state"]');
    elementHandle[4] = $('[name="zip"]');
    elementHandle[5] = $('[name="phone"]');
    elementHandle[6] = $('[name="billing_name"]');
    elementHandle[7] = $('[name="billing_address"]');
    elementHandle[8] = $('[name="billing_city"]');
    elementHandle[9] = $('[name="billing_state"]');
    elementHandle[10] = $('[name="billing_zip"]');
    elementHandle[11] = $('[name="billing_phone"]');
    elementHandle[12] = $('[name="cnumber"]');
    elementHandle[13] = $('[name="ctype"]');
    elementHandle[14] = $('[name="month"]');
    elementHandle[15] = $('[name="year"]');
	
		$('#same_address').on('click',function(){
	if(document.getElementById('same_address').checked)
	{
		document.getElementById('billing_name').value= document.getElementById('name').value
		document.getElementById('billing_address').value=document.getElementById('address').value
		document.getElementById('billing_city').value=document.getElementById('city').value
		document.getElementById('billing_state').value=document.getElementById('state').value
		document.getElementById('billing_zip').value=document.getElementById('zip').value
		document.getElementById('billing_phone').value=document.getElementById('phone').value     
	} 
	else{
		document.getElementById('billing_name').value="";
		document.getElementById('billing_address').value="";
		document.getElementById('billing_city').value="";
		document.getElementById('billing_state').value="";
		document.getElementById('billing_zip').value="";
		document.getElementById('billing_phone').value="";
	}
	});
	
	  function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        }
    
    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }
		
		$(':submit').on('click', function() {
        for(var i=0; i < 16; i++)
            elementHandle[i].removeClass("error");
            errorStatusHandle.text("");   
            return isValidData();
        });
        
    $(':reset').on('click', function() {
        for(var i=0; i < 16; i++)
            elementHandle[i].removeClass("error");
            errorStatusHandle.text("");
        });
		
    
    function isValidData() {
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your name for Shipping");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your Shipping address");
            elementHandle[1].focus();
            return false;
            }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your Shipping city");
            elementHandle[2].focus();
            return false;
            }
         if(isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please enter your state for shipping");
            elementHandle[3].focus();
            return false;
            }
        if(!isValidState(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[3].focus();            
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your zip for shipping");
            elementHandle[4].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("The zipcode appears to be invalid, "+
            "numbers only please. ");
            elementHandle[4].focus();            
            return false;
            }
        if(elementHandle[4].val().length != 5) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits  ")
            elementHandle[4].focus();            
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your phone");
            elementHandle[5].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[5].focus();            
            return false;
            }
        if(elementHandle[5].val().length != 10) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The phone number must have exactly 10 digits")
            elementHandle[5].focus();            
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your name for Billing");
            elementHandle[6].focus();
            return false;
            }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your address for Billing");
            elementHandle[7].focus();
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your city for Billing");
            elementHandle[8].focus();
            return false;
            }
         if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your state for Billing");
            elementHandle[9].focus();
            return false;
            }
        if(!isValidState(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[9].focus();            
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your zip for billing");
            elementHandle[10].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The zipcode appears to be invalid, "+
            "numbers only please. ");
            elementHandle[10].focus();            
            return false;
            }
        if(elementHandle[10].val().length != 5) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The zip code used for billing must have exactly five digits")
            elementHandle[10].focus();            
            return false;
            }
        if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("Please enter your phone for billing");
            elementHandle[11].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[11].focus();            
            return false;
            }
        if(elementHandle[11].val().length != 10) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("The phone number used for billing must have exactly 10 digits")
            elementHandle[11].focus();            
            return false;
            }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your card details");
            elementHandle[12].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("The card appears to be invalid, "+
            "numbers only please. ");
            elementHandle[12].focus();            
            return false;
            }
        if(elementHandle[12].val().length != 16) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("There should be exactly 16 digits")
            elementHandle[12].focus();            
            return false;
            }
        if(!$("input[name*='ctype']:checked").val()){
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please select Card type.");
            elementHandle[13].focus();            
            return false;
            }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter Month");
            elementHandle[14].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please Enter number for month");
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val().length != 2) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("There should be exactly 2 digits")
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val() < "0") {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Month is invalid");
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val() > "12") {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Month is invalid");
            elementHandle[14].focus();            
            return false;
            }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter Year");
            elementHandle[15].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please Enter year");
            elementHandle[15].focus();            
            return false;
            }
        if(elementHandle[15].val().length != 4) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("There should be exactly 4 digits")
            elementHandle[15].focus();            
            return false;
            }
        if(elementHandle[15].val() < "2015") {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The card is expired. Use another card!")
            elementHandle[15].focus();            
            return false;
            }
        return true;
               
        }
        elementHandle[0].focus();


        elementHandle[3].on('keyup', function() {
        elementHandle[3].val(elementHandle[3].val().toUpperCase());
        });

        elementHandle[9].on('keyup', function() {
        elementHandle[9].val(elementHandle[9].val().toUpperCase());
        });

        
});
