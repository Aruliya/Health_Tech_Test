<?php

$servername = " sql6.freesqldatabase.com"; 
$username = " sql6684053";
$password = "FxTmmGsLS"; 
$database ="sql6684053"; 
$port = 3306;
$conn = new mysqli("sql6.freesqldatabase.com", "sql6684053", "FxTmmGsLSt", "sql6684053",3306);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $age = $_POST["age"];
    $sex = $_POST["sex"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $bloodGroup = $_POST["bloodGroup"];
    $address = $_POST["address"];
    $phoneNo = $_POST["phoneNo"];
    $email = $_POST["email"];

    // SQL to insert data into table
    $sql = "INSERT INTO your_table_name (FirstName, LastName, Age, sex, Height, Weight, `Blood Group`, Address, `Phone No.`, `Email Add.`) 
            VALUES ('$firstName', '$lastName', $age, '$sex', $height, $weight, '$bloodGroup', '$address', $phoneNo, '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
