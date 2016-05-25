#!/usr/bin/perl 
#       Sample perl cgi script.  This script inserts entries in customer table in mysql DB
#       Code by Alan Riggins
#

use DBI;
use CGI;

mmy $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn024";
my $username = "jadrn024";
my $password = "bottom";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password) or die 'Cannot connect to db';

print <<EOC;
Content-type:  text/html

<!DOCTYPE html>
<html>
<head>
        <title>A Database Insertion Example with Perl</title>
        <meta http-equiv="content-type" 
                content="text/html;charset=utf-8" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <style type="text/css">
            h1 { text-align: center; }
            table { width: 40%; margin: 0 auto 0 auto; border-collapse: collapse; }
            td { border: 1px solid blue; background-color: #DDD; }
        </style>

</head>
<body>
EOC

  my $query = new CGI;  

  my $b_first_name = $query->param('bfName');
  my $b_last_name = $query->param('blName');
  my $b_AddressLine1 = $query->param('BillingAddressLine1');
  my $b_AddressLine2 = $query->param('BillingAddressLine2');
  my $b_city = $query->param('BillingCity');
  my $b_state = $query->param('BillingState');
  my $b_zipcode = $query->param('ZipCode');
  my $b_phone = $query->param('BillingPhone');

  my $s_first_name = $query->param('sfName');
  my $s_last_name = $query->param('slName');
  my $s_AddressLine1 = $query->param('AddressLine1');
  my $s_AddressLine2 = $query->param('AddressLine2');
  my $s_city = $query->param('City');
  my $s_state = $query->param('State');
  my $s_zipcode = $query->param('zipCode');
  my $s_phone = $query->param('homePhone');
  my $s_method = $query->param('radio');
  my $cc_Number = $query->param('cardnumber');
  my $cc_exp_month = $query->param('Month');
  my $cc_exp_year = $query->param('Year');
  my $cc_ccv = $query->param('ccv');

print "The b_zipcode is:\n";
print  "$b_zipcode";

my $statement = "INSERT INTO customer VALUES(0, '$b_first_name', '$b_last_name', '$b_AddressLine1', '$b_AddressLine2', '$b_city', '$b_state', '$b_zipcode', '$b_phone', '$s_first_name', '$s_last_name', '$s_AddressLine1', '$s_AddressLine2', '$s_city', '$s_state', '$s_zipcode', '$s_phone', '$s_method', '$cc_Number', '$cc_exp_month', '$cc_exp_year', '$cc_ccv');";

print "The SQL statement is:\n";
print "$statement\n";


my $count = $dbh->do($statement);


print "<h1>Result of Insertion</h1>\n";
if($count == 1) {
    print "SUCCESS, the number of rows affected is $count\n";
    }
else {
    print "ERROR: ".$dbh->errstr()."<br />\n";
    print "ERROR: ".$dbh->state()."\n";
    }

print "</body></html>";
$dbh->disconnect() or die $DBI::errstr;;    
