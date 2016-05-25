$(document).ready(function() {
var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(16);
    elementHandle[0] = $('#name');
    elementHandle[1] = $('#sname');
    elementHandle[2] = $('#address');
    elementHandle[3] = $('#saddress');
    elementHandle[4] = $('#city');
    elementHandle[5] = $('#scity');
    elementHandle[6] = $('#state');
    elementHandle[7] = $('#sstate');
    elementHandle[8] = $('#zip');
    elementHandle[9] = $('#szip');
    elementHandle[10] = $('#phone');
    elementHandle[11] = $('#sphone');
    elementHandle[12] = $('#card_number');
    elementHandle[13] = $('[name="card_type"]');
    elementHandle[14] = $('#month');
    elementHandle[15] = $('#year');
	
	
	elementHandle[0].focus();


        elementHandle[6].on('keyup', function() {
        elementHandle[6].val(elementHandle[6].val().toUpperCase());
        });

        elementHandle[7].on('keyup', function() {
        elementHandle[7].val(elementHandle[7].val().toUpperCase());
        });

		
	
	
		 $(':submit').on('click', function() {
			alert("asdfghjkloiuyh");
			for(var i=0; i < 16; i++)
            elementHandle[i].removeClass("error");
            errorStatusHandle.text(""); 
			alert("asdfghjkloiuyh");
            return isValidData();
        });
        
		$(':reset').on('click', function() {
			for(var i=0; i < 16; i++)
			elementHandle[i].removeClass("error");
            errorStatusHandle.text("");
        });
		
		
		function isValidData() {
			alert("asdfghjkloiuyh");
	
			if(isEmpty(elementHandle[0].val())) {
				elementHandle[0].addClass("error");
				errorStatusHandle.text("Please enter your name");
				elementHandle[0].focus();
				return false;
				}
			if(isEmpty(elementHandle[1].val())) {
				elementHandle[1].addClass("error");
				errorStatusHandle.text("Please enter your name");
				elementHandle[1].focus();
				return false;
				}	
			if(isEmpty(elementHandle[2].val())) {
				elementHandle[2].addClass("error");
				errorStatusHandle.text("Please enter your address");
				elementHandle[2].focus();
				return false;
            }	
			if(isEmpty(elementHandle[3].val())) {
				elementHandle[3].addClass("error");
				errorStatusHandle.text("Please enter your address");
				elementHandle[3].focus();
				return false;
            }	
			if(isEmpty(elementHandle[4].val())) {
				elementHandle[4].addClass("error");
				errorStatusHandle.text("Please enter your city");
				elementHandle[4].focus();
				return false;
            }
			if(isEmpty(elementHandle[5].val())) {
				elementHandle[5].addClass("error");
				errorStatusHandle.text("Please enter your city");
				elementHandle[5].focus();
				return false;
            }
			if(isEmpty(elementHandle[6].val())) {
				elementHandle[6].addClass("error");
				errorStatusHandle.text("Please enter your state");
				elementHandle[6].focus();
				return false;
            }
			if(!isValidState(elementHandle[6].val())) {
				elementHandle[6].addClass("error");
				errorStatusHandle.text("The state appears to be invalid, "+
				"please use the two letter state abbreviation");
				elementHandle[6].focus();            
				return false;
            }
			if(isEmpty(elementHandle[7].val())) {
				elementHandle[7].addClass("error");
				errorStatusHandle.text("Please enter your state");
				elementHandle[7].focus();
				return false;
            }
			if(!isValidState(elementHandle[7].val())) {
				elementHandle[7].addClass("error");
				errorStatusHandle.text("The state appears to be invalid, "+
				"please use the two letter state abbreviation");
				elementHandle[7].focus();            
				return false;
            }
			if(isEmpty(elementHandle[8].val())) {
				elementHandle[8].addClass("error");
				errorStatusHandle.text("Please enter your zip");
				elementHandle[8].focus();
				return false;
            }
			if(!$.isNumeric(elementHandle[8].val())) {
				elementHandle[8].addClass("error");
				errorStatusHandle.text("The zipcode appears to be invalid, "+
				"numbers only please. ");
				elementHandle[8].focus();            
				return false;
            }
			if(elementHandle[8].val().length != 5) {
				elementHandle[8].addClass("error");
				errorStatusHandle.text("The zip code must have exactly five digits")
				elementHandle[8].focus();            
				return false;
            }
			if(isEmpty(elementHandle[9].val())) {
				elementHandle[9].addClass("error");
				errorStatusHandle.text("Please enter your zip");
				elementHandle[9].focus();
				return false;
            }
			if(!$.isNumeric(elementHandle[9].val())) {
				elementHandle[9].addClass("error");
				errorStatusHandle.text("The zipcode appears to be invalid, "+
				"numbers only please. ");
				elementHandle[9].focus();            
				return false;
            }
			if(elementHandle[9].val().length != 5) {
				elementHandle[9].addClass("error");
				errorStatusHandle.text("The zip code must have exactly five digits")
				elementHandle[9].focus();            
				return false;
            }
			if(isEmpty(elementHandle[10].val())) {
				elementHandle[10].addClass("error");
				errorStatusHandle.text("Please enter your phone");
				elementHandle[10].focus();
				return false;
            }
			if(!$.isNumeric(elementHandle[10].val())) {
				elementHandle[10].addClass("error");
				errorStatusHandle.text("The phone number appears to be invalid, "+
				"numbers only please. ");
				elementHandle[10].focus();            
				return false;
            }
			if(elementHandle[10].val().length != 10) {
				elementHandle[10].addClass("error");
				errorStatusHandle.text("The phone number must have exactly 10 digits")
				elementHandle[10].focus();            
				return false;
            }
			if(isEmpty(elementHandle[11].val())) {
				elementHandle[11].addClass("error");
				errorStatusHandle.text("Please enter your phone");
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
				errorStatusHandle.text("The phone number must have exactly 10 digits")
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
			if(!$("input[name*='card_type']:checked").val()){
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
			    
			function isEmpty(fieldValue) {
				return $.trim(fieldValue).length == 0;    
				}
    

	
	
	
	