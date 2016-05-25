var proj4_data;
var cart;

$(document).ready( function() {
    proj4_data = new Array();
    cart = new shopping_cart("jadrn024");
    $.get('/perl/jadrn024/proj4/get_products.cgi', storeData);     

	$(document).on('click','#same_address',function(){
	if(document.getElementById('same_address').checked)
	{
		document.getElementById('sname').value= document.getElementById('name').value
		document.getElementById('saddress').value=document.getElementById('address').value
		document.getElementById('scity').value=document.getElementById('city').value
		document.getElementById('sstate').value=document.getElementById('state').value
		document.getElementById('szip').value=document.getElementById('zip').value
		document.getElementById('sphone').value=document.getElementById('phone').value     
	} 
	else{
		document.getElementById('sname').value="";
		document.getElementById('saddress').value="";
		document.getElementById('scity').value="";
		document.getElementById('sstate').value="";
		document.getElementById('szip').value="";
		document.getElementById('sphone').value="";
	}
	});
	
	 $(document).on('click',"#submit", function() {
			alert("asdfghjkloiuyh");
        });

	$(document).on('click',"#about_us", function() {
		aboutus();
		
	})
	$(document).on('click',"#contact_us", function() {
		contactus();
		
	})
	
	$(document).on('click','.add_button' ,function () {
		var sku = this.id;
		cart.add(sku, 1);
		$("#count").text(cart.size());
		displayShoppingcart();
	  });	
	  
	$(document).on('click', '.remove_button', function () {
		var sku = this.id;
		var quantity = $(this).closest('tr').find('span.quantity').text() - 1;
		if (quantity < 0)
		  return;
		cart.setQuantity(sku, quantity);
		$("#count").text(cart.size());
		displayShoppingcart();
	  });
	  
	$(document).on('click', '.remove_item', function () {
		var sku = this.id;
		cart.delete(sku);
		$("#count").text(cart.size());
		displayShoppingcart();
	});
		
	    
    $( "#dialog-modal" ).dialog({
            height: 650,
            width: 900,
            modal: true,
            autoOpen: false
    });
    
    $('#order_button').on('click', function($e) {       
            $("#dialog-modal").dialog('open');
            });                 
    });

   function displayShoppingcart(){
     $('#count').text(cart.size());
        var subtotal = 0;
        var taxRate = .08;
        var shipping = 2;
        var shipS = "$2.00";
        var cartArray = cart.getCartArray();
        if(cartArray.length == 0){
         $('#displaycart').html("<h1 class='about'>Your cart is currently empty</h1><br/><h3 class='about'>Please check our <a href='index.html'>products </a> to add some chocolates to cart ");
		 $('#order_button').hide();
		 $('#continue').hide();
		return;
        }
        var toprint = "<table id='displaycarttable'>";
        toprint += "<tr><th>Product Image</th><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th><th>Update Your Cart</th></tr>";
        for(var i=0; i < cartArray.length; i++) {
         var skuno = cartArray[i][0];
         var quantity = parseInt(cartArray[i][1]);
         var price;
         var name;
          for(var j=0; j < proj4_data.length; j++) {
           if(proj4_data[j][0] == cartArray[i][0]) {
               price = parseFloat(proj4_data[j][6]);
               name = proj4_data[j][2];
               var totalItemPrice = quantity * price;
               subtotal += totalItemPrice;
               toprint += "<tr><td><img width='100px' src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[j][0]+".jpg\" alt=\""
			   +proj4_data[i][2]+"\""+" width=\"200px\"  /></td><td>"+name+"</br>"+skuno+"</td>";
			  
				toprint += "<td class='cart_quantity'><span class='quantity'>"+quantity+"</span></td>";
			   
			   toprint +="<td>$"+price+"</td><td>$"+totalItemPrice.toFixed(2)+"</td>";
			   toprint +="<td><input type='button' class='add_button' id="+proj4_data[j][0]+" value='Add One' />"
			   +"<input type='button' class='remove_button' id="+proj4_data[j][0]+" value='Remove One' />"
			   +"<input type='button' class='remove_item' id="+proj4_data[j][0]+" value='Remove Item' /></td></tr>";
			  
			   
          }
         }
        }
        var tax = subtotal * taxRate;
        var totalPrice = subtotal + shipping + tax;
        toprint += "<tr class='no_border'><td></td><td></td><td></td> <td>Subtotal</td> <td>$" + subtotal.toFixed(2) + "<td></td></tr>" +
        "<tr class='no_border'><td></td>  <td></td> <td></td> <td>Tax: (8%)</td> <td>$" + tax.toFixed(2) + "</td><td></td></tr>" +
        "<tr class='no_border'> <td></td> <td></td><td></td>  <td>Shipping Charge</td> <td>" + shipS + "</td><td></td></tr>" +
        "<tr class='no_border' id=\"total\"> <td></td> <td></td><td></td>  <td>Total Price</td> <td>$" + totalPrice.toFixed(2) + "</td><td></td></tr></table>" ;
	
        $('#displaycart').html(toprint);
		
		if(cart.size()==0){
		$('#order_button').hide();
		$('#continue').hide();
		}
    }

	function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
     displayShoppingcart();
    }

	
	function aboutus(){
		
		aboutusdata = "<div id='aboutus1' ><div id='aboutus2' >"+"<h1 color='#384835'>About Us</h1><p>Bertha’s Deluxe Chocolates was established in 1873 by Bertha Sweet in the city of San Diego. It has grown from a local family owned chocolate shop to America’s choice for premium chocolates. Sweet is family long tradition of superb quality of chocolate and satisfaction continues in all our shops. Bertha Deluxe Chocolates are compose of natural rare ingredients and are hand-made by our skilled members. As your provider in premium chocolate, we continue our mission of producing only the best for our customers.</p>";
		aboutusdata += "<img src='about1.jpg' />"+"<img src='about2.jpeg' />"+"<img src='about3.jpg' />"+"<img src='about4.jpg' />"+"</div></div>";		
		var aboutus = document.getElementById('displaycart');
        aboutus.innerHTML = aboutusdata;
		
	}
	function contactus(){
		
		contactusdata = "<div id='aboutus1' ><div id='aboutus2' >"+"<h1 color='#384835'>Contact Us</h1><p>If you have any question, please contact us at:<br/>Phone number : (408) - 888 - 6723<br/>Fax number : (800) - 123 - 8888 <br/>Email Address : chocolate@berthas.com <br/>";
		contactusdata += "Mailing Address: 123 Main Street,house number:1432 ,San diego,Californina. <br/></p> ";
		contactusdata += "<img src='about1.jpg' />"+"<img src='about2.jpeg' />"+"<img src='about3.jpg' />"+"<img src='about4.jpg' />"+"</div></div>";		
		var contactus1 = document.getElementById('displaycart');
        contactus1.innerHTML = contactusdata;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}  