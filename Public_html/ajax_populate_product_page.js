var proj4_data;

$(document).ready(function() {
//function initVars() {
    proj4_data = new Array();
    $.get('/perl/jadrn024/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn024");
    
    $('#milk').on('click', function() {
	    var category = "Milk chocolate";
		displayItem(category);
        })
        
    $('#dark').on('click', function() {
        var category = "Dark chocolate";
		displayItem(category);
        })
        
    $('#nuts').on('click', function() {   
        var category = "Nuts and chews";
		displayItem(category);
		})
        
    $('#brittle').on('click', function() {
        var category = "Brittles and toffies";
		displayItem(category);
        })
        
    $('#truffles').on('click', function() {
        var category = "Truffles";
		displayItem(category);
        })
        
    $('#gifts').on('click', function() {
        var category = "Gifts";
		displayItem(category);
        })
        
    $('#holiday').on('click', function() {
        var category = "Holiday assortments";
		displayItem(category);
        })
		
    $('#count').text(cart.size());   
	$(document).on('click',"#about_us", function() {
		aboutus2();
		
	})
	$(document).on('click',"#contact_us", function() {
		contactus2();
		
	})

 $(document).on('focusout',".quantity", function() {
  qt = this.value;
  this.value = "";
   
  $(document).on('click', ".addtoCart", function() {
    var sku = this.id;
    if (!qt == 0){
     cart.add(sku,qt);
     $(this).next().fadeIn(50).fadeOut(2000);
     qt = 0;
    }
    $('#count').text(cart.size());
  });
 });

});

function displayItem(category) {
 tmpString = "<h1 class='category'>"+category+"</h1>";
 for(var i=0; i < proj4_data.length; i++) {
     if(proj4_data[i][1] == category) {
		  tmpString += "<div class='perldata'><div class='imageleft'><img id='prodImage' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt='ProdImage'"+
                "/><br /></div><div class='productdata'>";

                // temp string to get the SKU
                tmpString +="<div class='sku'><h2>SKU: " + proj4_data[i][0] + "</h2></div>";

                // temp string to get the Category
                tmpString +="<div class='cat'><h2>Chocolate: " + proj4_data[i][2] + "</h2></div>";

                // temp string to get the Shortdescription
                tmpString +="<div class='Shortdescription'><h2>" + proj4_data[i][3] + "</h2></div>";

                // temp string to get the heading for description
                tmpString +="<div class='heading_3'><h2>About the chocolate:</h2></div>";

                // temp string to get the description
                tmpString +="<div class='description'><h2>" + proj4_data[i][4] + "</h2></div>";

                // temp string to get the Price in $s
                tmpString +="<div class='pricing'><h4><br>Price: $" + proj4_data[i][6] + "</h4></div>";
		
      tmpString += "<br /><input type='text' name='quantity' id='qty' class='quantity' size='4' placeholder='qty'>" +"<input type='button' class='addtoCart' value='ADD TO BAG' id=\"" +proj4_data[i][0]+ "\"/><span id='cartadd'>Added to cart</span></td></tr>";
      tmpString += "</div></div>";               
     }
 }
 var handle = document.getElementById('content');
 handle.innerHTML = tmpString;
}

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
     // populate the page with something...
        tmpString = "";
        var ctr = 0;
        var ctg = ["Milk chocolate", "Dark chocolate", "Nuts and chews", "Brittles and toffies", "Truffles", "Gifts", "Holiday assortments"];
			
			 for(var j=0; j < ctg.length; j++) {
				 tmpString += "<h1>"+ctg[j]+"</h1>";
				for(var i=0; i < proj4_data.length-1; i++) {
					if(proj4_data[i][1] == ctg[j]){
						tmpString += "<div class='perldata'><div class='imageleft'><img id='prodImage' src=\"/~jadrn000/PROJ4_IMAGES/"+
						proj4_data[i][0]+".jpg\" alt='ProdImage'"+
						"/><br /></div><div class='productdata'>";

						// temp string to get the SKU
						tmpString +="<div class='sku'><h2>SKU: " + proj4_data[i][0] + "</h2></div>";

						// temp string to get the Category
						tmpString +="<div class='cat'><h2>Chocolate: " + proj4_data[i][2] + "</h2></div>";

						// temp string to get the Shortdescription
						tmpString +="<div class='Shortdescription'><h2>" + proj4_data[i][3] + "</h2></div>";

		  
						// temp string to get the heading for description
						tmpString +="<div class='heading_3'><h2>About the chocolate:</h2></div>";

						// temp string to get the description
						tmpString +="<div class='description'><h2>" + proj4_data[i][4] + "</h2></div>";

						// temp string to get the Price in $s
						tmpString +="<div class='pricing'><h4><br>Price: $" + proj4_data[i][6] + "</h4></div>";
				
			  tmpString += "<br /><input type='text' name='quantity' id='qty' class='quantity' size='4' placeholder='qty'>" +"<input type='button' class='addtoCart' value='ADD TO BAG' id=\"" +proj4_data[i][0]+ "\"/><span id='cartadd'>Added to cart</span></td></tr>";
			  tmpString += "</div></div>";               
					}
		 }
	 }
		tmpString += "</tr></tables>"
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    }
	
	
	function aboutus2(){
		
		aboutusdata1 = "<div id='aboutus1' ><div id='aboutus2' >"+"<h1 color='#384835'>About Us</h1><p>Bertha’s Deluxe Chocolates was established in 1873 by Bertha Sweet in the city of San Diego. It has grown from a local family owned chocolate shop to America’s choice for premium chocolates. Sweet is family long tradition of superb quality of chocolate and satisfaction continues in all our shops. Bertha Deluxe Chocolates are compose of natural rare ingredients and are hand-made by our skilled members. As your provider in premium chocolate, we continue our mission of producing only the best for our customers.</p>";
		aboutusdata1 += "<img src='about1.jpg' />"+"<img src='about2.jpeg' />"+"<img src='about3.jpg' />"+"<img src='about4.jpg' />"+"</div></div>";		
		var aboutus1 = document.getElementById('content');
        aboutus1.innerHTML = aboutusdata1;
		
	}
	function contactus2(){
		
		contactusdata2 = "<div id='aboutus1' ><div id='aboutus2' >"+"<h1 color='#384835'>Contact Us</h1><p>If you have any question, please contact us at:<br/>Phone number : (408) - 888 - 6723<br/>Fax number : (800) - 123 - 8888 <br/>Email Address : chocolate@berthas.com <br/>";
		contactusdata2 += "Mailing Address: 123 Main Street,house number:1432 ,San diego,Californina. <br/></p> ";
		contactusdata2 += "<img src='about1.jpg' />"+"<img src='about2.jpeg' />"+"<img src='about3.jpg' />"+"<img src='about4.jpg' />"+"</div></div>";		
		var contactus2 = document.getElementById('content');
        contactus2.innerHTML = contactusdata2;
		
	}

// from http://www.webmasterworld.com/forum91/3262.htm            
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
