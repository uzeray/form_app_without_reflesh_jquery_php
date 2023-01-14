<?php
    // get database connection
    require("dbconnection.php");

    // handle form elements with post method
    $registerDate = $_POST['registerDate'];
    $name = strip_tags($_POST['name']);
    $surname = strip_tags($_POST['surname']);
    $birthday = $_POST['birthday'];
    $email = strip_tags($_POST['email']);
    $phone = strip_tags($_POST['phone']);
    $street = strip_tags($_POST['street']);
    $hauseNumber = strip_tags($_POST['hauseNumber']);
    $postCode = strip_tags($_POST['postCode']);
    $city = strip_tags($_POST['city']);
    $country = strip_tags($_POST['country']);

    // create MySQL query for add to database new member
    $sql = "INSERT INTO members (registerDate, name, surname, birthday, phone, email, street, hauseNumber, postCode, city, country) VALUES ('$registerDate', '$name', '$surname', '$birthday', '$phone', '$email', '$street', '$hauseNumber', '$postCode', '$city', '$country')";
    $newMember = mysqli_query($conn, $sql);


    // check to membership if successfuly completed 
    if($newMember){
        echo " Ihre Registrierung als neues Mitglied wurde erfolgreich abgeschlossen...! ";
    }
    // if database connection has failed...
    else{
        echo "Datenbankverbindung unterbrochen! Bitte überprüfen Sie die Internetverbindung und laden Sie die Seite neu...";
    }

    // close sql connection for security...
    mysqli_close($conn);

?>