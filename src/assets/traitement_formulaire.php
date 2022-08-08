<?php
try{

	ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST['email'];
    $to = "contact@vichitchristophe.online";
    $subject = $_POST['nom']." ".$_POST['prenom'];
    $message = $_POST['message'];
    $headers = $from;
    mail($to,$subject,$message, $headers);
	echo '<script type="text/javascript">
	alert("Votre message a été envoyé. Merci\n");
	setTimeout(document.location.href="https://www.vichit.fr");
	</script>'; 
}catch(Exception $e){
	echo'Désolé, une erreur est survenue. Votre message n\'a pas été envoyé.';
}
?>
