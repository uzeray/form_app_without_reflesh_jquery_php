<?php require("dbconnection.php"); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">    
        <title>Document</title>
        
        // bootstrap 5 cdn connection
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
       
        


        <style>
            *{box-sizing: border-box;}
        </style>
    </head>
    <body class="d-flex flex-column min-vh-100>
        <?php require('header.php') ?>


        <div class="container-xs d-flex m-5">

            <div class="container-xs contents">

                <p class="h3 text-dark mb-5 d-flex">Mitgliedsantrag</p> 
                
               
               
                // create an form to send membership.php
                <form action="membership.php" id="form1" method="post">
                    <label for="date">* Mitgliedsdaten</label>
                    <input type="date" name="registerDate" id="registerDate">
                    <input type="text" name="name" id="name" placeholder="* Vorname">
                    <input type="text" name="surname" id="surname" placeholder="* Nachname">
                    <label for="birthday">* Geburtsdatum</label>
                    <input type="date" name="birthday" id="birthday">
                    <input type="text" name="email" id="email" placeholder="* E-mail">
                    <input type="number" name="phone" id="phone" placeholder="* Telefon Nummer (12345678910 oder 0012345678910)">
                    <input type="text" name="street" id="street" placeholder="* Strasse">
                    <input type="number" name="hauseNumber" id="hauseNumber" placeholder="* Hause Nummer">
                    <input type="nummer" name="postCode" id="postCode" placeholder="* Postleitzahl">
                    <input type="text" name="city" id="city" placeholder="* Ort/Stadt">
                    <input type="text" name="country" id="country" placeholder="* Land">
                    <br>
                    <p class="h4 my-3">
                        <input type="checkbox" name="checkBox" style=" transform: scale(2);" id="checkBox"lass="mb-2">
                        Der jährliche Beitrag beträgt CHF 00.00 (fünfzig Franken).
                    </p> 
                    
                    // will display to form mistake on this div
                    <div class="contai statusDiv my-2 w-100 text-center text-dark"></div>
                    
                    // submit button will started to procedures
                    <input type="button" class="btn btn-dark" name="register" id="register" value="Register">
                </form>
                       

            

            </div>

        </div>

       


        <?php require('footer.php') ?>

        // bootstrap 5 propper cdn connections
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        
        // jquery cdn connection
        <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
        
        // for without reflesh post method use this external jquery file
        <script src="registerAJAX.js" type="text/javascript"></script>
        

    </body>
</html>