#!/usr/bin/perl  

use CGI;
use CGI::Cookie

$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn024',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<title>Bertha's Deluxe Chocolates</title>
	<link rel="stylesheet" href="http://jadran.sdsu.edu/~jadrn024/proj4/main.css">    
	 <link rel="stylesheet" type="text/css" href="http://jadran.sdsu.edu/~jadrn024/proj4/jquery-ui-1.10.4.custom/css/start/jquery-ui-1.10.4.custom.min.css" />
    <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script>
    <script type="text/javascript" src="ajax_get_lib.js"></script>
     <script type="text/javascript" src="shopping_cart.js"></script>
	 <script type="text/javascript" src="ordernow.js"></script>
	 <script type="text/javascript" src="jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>
</head>
<body>		
			 <div id="counter">
				<a href="order.html"><img id="cart" src="http://jadran.sdsu.edu/~jadrn024/proj4/cart.jpg" /><span id="count1">Your Cart </br> Items:<span id="count">0</span></span></a>
			</div>
			<div id="title">
			<h1>Bertha's Deluxe Chocolates</h1>
			</div>
			
			<div id="left_column">
					<ul id="main_menu">
						<li id="home" class="main_menu"> <a href="http://jadran.sdsu.edu/~jadrn024/proj4/index.html" > Home </a> </li> 
						<li id="Products" class="main_menu"> <a href="http://jadran.sdsu.edu/~jadrn024/proj4/index.html" > Products </a> 
							
							</li>
						<li id="order_now" class="main_menu"> <a href="http://jadran.sdsu.edu/~jadrn024/proj4/order.html" > Order Now </a> </li> 
						<li id="about_us" class="main_menu"> <a href="#" > About Us </a> </li> 
						<li id="contact_us" class="main_menu"> <a href="#" > Contact Us </a> </li> 
					</ul>
			</div>	
		<div class="right">	
			<div id="container" class="order_content">
			   	
			</div>
			<input type='button' value='Place Your Order' id='order_button' />

			  <!-- The order form is not visible until the Order Now button is clicked -->
			  <div id="dialog-modal" class="widget-dialog-container" title="Complete Your Order">
			   <form method="post" action="/perl/jadrn024/proj4/read_cookie.cgi">
				
				<fieldset>
					<legend>Billing Address</legend>
				   <table>
					<tr>
						<td>First Name:</td>
						<td><input type="text" name="BfirstName" size="20" /></td>
					</tr>
					<tr>
						<td>Last Name:</td>
						<td><input type="text" name="BlastName" size="20" /></td>
					</tr>
					<tr>
						<td>Address:</td>
						<td><Input type="text" name="Baddress1" size="20" /><br />
						<Input type="text" name="Baddress2" size="20" /></td>
					</tr>
					<tr>
						<td>City:</td>
						<td><Input type="text" name="Bcity" size="20" /></td>
					</tr>
					<tr>
						<td>State:</td>
						<td><Input type="text" name="Bstate" size="20" /></td>
					</tr>
					<tr>
						<td>Zip:</td>
						<td><Input type="text" name="Bzip" size="9" /></td>
					</tr>
				  
					</table>
				</fieldset>
				<fieldset>
					<legend>Shipping Address</legend>
				   <table>
					<tr>
						<td>First Name:</td>
						<td><input type="text" name="SfirstName" size="20" /></td>
					</tr>
					<tr>
						<td>Last Name:</td>
						<td><input type="text" name="SlastName" size="20" /></td>
					</tr>
					<tr>
						<td>Address:</td>
						<td><Input type="text" name="Saddress1" size="20" /><br />
						<Input type="text" name="Saddress2" size="20" /></td>
					</tr>
					<tr>
						<td>City:</td>
						<td><Input type="text" name="Scity" size="20" /></td>
					</tr>
					<tr>
						<td>State:</td>
						<td><Input type="text" name="Sstate" size="20" /></td>
					</tr>
					<tr>
						<td>Zip:</td>
						<td><Input type="text" name="Szip" size="9" /></td>
					</tr>

					</table>
				</fieldset>
				<fieldset>
					<legend>Payment Information</legend>
				   <table>
					<tr>
						<td>Card Type:</td>
						<td><input type="text" name="cardType" size="20" /></td>
					</tr>
					<tr>
						<td>Name on Card:</td>
						<td><input type="text" name="nameOnCard" size="20" /></td>
					</tr>
					<tr>
						<td>Card Number:</td>
						<td><input type="text" name="cardNumber" size="20" /></td>
					</tr>
					 <tr>
						<td>Expiration Date:</td>
						<td><input type="text" name="expDate" size="20" /></td>
					</tr>
					<tr>
						<td>Security code:</td>
						<td><input type="text" name="secCode" size="20" /></td>
					</tr>
					</fieldset>
					</table>
					<table>
						<tr>
						<td><input type="reset" /></td>
						<td><input type="submit" class="ui-button" value="Submit Order"/></td>
					</tr>
				</table>
			   </form>
			</div> 
    <div>
            <h1>Cookie Reader</h1>
END_CONTENT
my %cookies = $ENV{COOKIE};
for( keys %cookies) {
print "The value of the cookie is: $cookies{$_}\n";
}

print "<table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
    print "$cookies{$_}\n";
    }
    
print "<h1>Shopping cart cookie</h1>";
my $v = $q->cookie('jadrn024');
print "The raw cookie value is $v<br />";   
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    print "$sku = $qty<br />";
    } 
     
print "<h1>Parameters passed to script:</h1>\n";
my ($key, $value);

                
foreach $key ($q->param) {
    print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
        print "<td>$value</td>\n";
        }
    print "</tr>\n";
}
print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
foreach $key ($q->param) {
    print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
        print "<td>$value</td>\n";
        }
    print "</tr>\n";
}
print "</table>\n";
print "</div></div>\n";
print "</body>\n";
print "</html>\n";

