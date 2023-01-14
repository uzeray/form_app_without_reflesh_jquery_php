// start to ready function when document is ready
$(document).ready(function(){
             
    // get time for check to form membership date field max and min date limit
    var d = new Date();

    // define mounth and day
    var month = d.getMonth()+1;
    var day = d.getDate();

    // create today variable to get local time
    var today = d.getFullYear() + '-' +
                ((''+month).length<2 ? '0' : '') + month + '-' +
                ((''+day).length<2 ? '0' : '') + day
    ;

    // create min date for block to under 18 years old can not be member of your system
    var minDate = d.getFullYear() - 18 + '-' +
                ((''+month).length<2 ? '0' : '') + month + '-' +
                ((''+day).length<2 ? '0' : '') + day
    ;

    
    
    
    

    

                
    // on form register button when clicked
    $('#register').click(function(){

        // assign to register date
        var registerDate=$("#registerDate").val();
        // check to register date if its empty or is it next date
        // we are checking that because member can not be member in future
        if (registerDate == "" || registerDate > today) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Mitgliedsdaten Darf nicht leer bleiben oder Sie können kein Datum nach dem heutigen Tag auswählen.</h5>";
            return false;
        }
        // assign to name
        var name=$("#name").val();
        // check to name if blank or smal than 3 or longer than 20 characters
        if (name == "" || name.length < 3 || name.length > 20) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Vorname Darf nicht leer bleiben.</h5>";
            return false;
        }

        // assign to surname
        var surname =$("#surname").val();
        // check to field is blank or longer 20 or shorter than 3 characters
        if (surname == "" || surname.length < 3 || surname.length > 20) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Nachname Darf nicht leer bleiben.</h5>";
            return false;
        }

        // assign to birthday
        var birthday=$("#birthday").val();
        // check to birthday of member is old than 18 years old
        if (birthday == "" || minDate < birthday) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Geburtsdatum Darf nicht leer bleiben oder Personen unter 18 Jahren können nicht Mitglied werden.</h5>";
            return false;
        }

        // assign to email
        var email=$("#email").val();
        // check to email is empty or longer is enough or not
        if(email == "" || email.length < 5 || email.length > 60){
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Email Darf nicht leer bleiben oder Geben Sie eine gültige Email ein..</h5>";
            return false;
        }
        else {
            // assign to an regex for check to email format
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // check to email by regex is it standart format or not
            if(!re.test(email)){
                document.querySelector('.statusDiv').innerHTML = "<h5>E-Mail-Format ist ungültig.</h5>";
                return false;
            }
        }

        // assign to phone
        var phone=$("#phone").val();
        // check to phone number is empty
        if (phone == ""){
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Telefon Nummer Darf nicht leer bleiben</h5>";
            return false;
        }
        else{
            // assign to regex for check to phone format
            var phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            // test to phone format is valid or not
            if(phone.test(phoneFormat)){
                document.querySelector('.statusDiv').innerHTML = "<h5>Telefon-Format ist ungültig.</h5>";
                return false;
            }
        }

        // assign street
        var street=$("#street").val();
        // check if street fiel is empty
        if (street == "" || street.length < 3 || street.length > 50) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Strasse Darf nicht leer bleiben oder Geben Sie eine gültige Strasse ein.</h5>";
            return false;
        }

        // assign to hasue number
        var hauseNumber=$("#hauseNumber").val();
        // check to hause number is long or empty
        if (hauseNumber == "" || hauseNumber.length > 5) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Hause Nummer Darf nicht leer bleiben oder Geben Sie eine gültige Hause Nummer ein.</h5>";
            return false;
        }

        // assign to post code
        var postCode=$("#postCode").val();
        // check to post code characters is long or empty
        if (postCode == "" || postCode.length < 4 || postCode.length > 7) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Postleitzahl Darf nicht leer bleiben oder Geben Sie eine gültige Postleitzahl ein.</h5>";
            return false;
        }

        // assign to city
        var city=$("#city").val();
        // check to city is longer character or empty
        if (city == "" || city.length < 3 || city.length > 20) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Ort/Stadt Darf nicht leer bleiben oder Geben Sie eine gültige Ort/Stadt ein.</h5>";
            return false;
        }

        // assign to country
        var country=$("#country").val();
        // check to country is empty or so long
        if (country == "" || country.length < 3 || country.length > 30) {
            document.querySelector('.statusDiv').innerHTML = "<h5>Bitte füllen Sie alle Felder aus. Land Darf nicht leer bleiben oder Geben Sie eine gültige Land ein.</h5>";
            return false;
        }

        // check to checkbox field is it checked or not
        if( $('#checkBox').is(':checked') ){}
        else{
            document.querySelector('.statusDiv').innerHTML = "<h5>Mitgliedsbeitrag und Bedingungen nicht akzeptiert, bitte überprüfen Sie das Kästchen Zahlung und Bedingungen.</h5>";
            return false;
        }

        // if user did an mistake before it will clear by click to register button
        $('.statusDiv').empty();

        // ajax function for handle and post variable to membership.php
        $.ajax({  
            // url is which page is has our php processes
            url:'membership.php',
            // methot is how you want to send by post or get
            // secure method is post
            method:'POST',
            // data is whic parameters you wand to sent membership.php
            data:{
                registerDate:registerDate,
                name:name,
                surname:surname,
                birthday:birthday,
                email:email,
                phone:phone,
                street:street,
                hauseNumber:hauseNumber,
                postCode:postCode,
                city:city,
                country:country,
                // all data variables will send
            },
            // cache to mistakes
            cache: false,
            // when process is successful 
            success: function(data) {
                // will show by alert funciton an message
                alert(data);
                // after success process text boxes will clear
                $('#form1 input[type="text"]').val('');
                // and date fields will clear
                $('#form1 input[type="date"]').val('');

            },
            // when have an error
            error: function(xhr, status, error) {
                // errors will take place on console
                console.error(xhr);
            }

        });
    });

});