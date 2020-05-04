<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['mobile'];
    $visitor_company = $_POST['company'];
    $message = $_POST['message'];

    $email_from = $visitor_email;
    $email_subject = "Nouveau message provenant du site Geosophy !";
    $email_body = "Nom de l'utilisateur: $name.\n".
                    "Email de l'utilisateur: $visitor_email.\n".
                        "Téléphone de l'utilisateur: $visitor_phone.\n".
                            "Compagnie de l'utilisateur: $visitor_company.\n".

                                "Message de l'utilisateur: $message.\n";
    $to = "naoufel.maazouzi@live.fr";
    $headers = "From: $email_from \r\n";
    $headers .= "Repondre à: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: /index.js", sleep(3));
}

?>