<?php
  $servername = "localhost";
  $username = "database_username";// usually 'root' is basic username
  $password = "password"; // usually empty or defined by user
  $dbname = " database_name"; // defination by user or must check on your db

  // create to connection structure
  $conn = mysqli_connect($servername, $username, $password, $dbname);

  //check to connection is success or not
  if (!$conn) { // if does not connected
    die("Connection failed: " . mysqli_connect_error());
  }
  // if connection has successful
  else{
    echo "Connection is Successfuly!";
  }


?>