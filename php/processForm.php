<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) {
      
    $name = $_REQUEST['name'];
    $mail = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    $to = 'jakarta@indianfracsand.com';

    $headers = "From: ".$name." <".$mail."> \r\n";

    $send_email = mail($to,$subject,$message,$headers);

    echo ($send_email) ? 'success' : 'error';

}
?>