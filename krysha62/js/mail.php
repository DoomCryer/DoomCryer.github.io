<?php

$frm_name  = "krysha62";
$recepient = "krysha62@mail.ru";
$sitename  = "krysha62.ru";
$subject   = "Новая заявка с сайта \"$sitename\"";
$email     = "krysha62.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
// echo var_dump(mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\""));
