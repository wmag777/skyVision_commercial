<?php

$mail = "mail@sky.vision";

include "mail.class.php";


	$m= new Mail('utf8');
	$m->To($mail);
	$m->Bcc("alexerm777@gmail.com");
	if(isset($_POST['theme'])){	$m->Subject("Заявка: ".$_POST['theme']);}else{	$m->Subject("Заявка");}
	$pla = "";
	$vir = "";
	if ($_POST['plan1'] or $_POST['plan2'] or $_POST['plan3']) {
		$pla = "
			<b>Планируемые способы продвижения:</b>".$_POST['plan1']."
			'".$_POST['plan2']."'
			'".$_POST['plan3']."'<br/>
		";
		
	}
	
	if ($_POST['vir1'] or $_POST['vir2']) {
		$vir = "
			<b>Вирусность:</b>'".$_POST['vir1']."'
			'".$_POST['vir2']."'<br/>
		";
		
	}
	
	$m->Body("<br/>
		
	".(!empty($_POST['time'])?"<b>Длительность</b>: ".$_POST['time']."<br/>":"")."
	".$pla."
	".$vir."
	".(isset($_POST['name'])&&!empty($_POST['name'])?"<b>ИМЯ</b>: ".$_POST['name']."<br/>":"")."
	".(!empty($_POST['phone'])?"<b>Телефон для связи</b>: ".$_POST['phone']."<br/>":"")."
	".(isset($_POST['email'])&&!empty($_POST['email'])?"<b>email для связи</b>: ".$_POST['email']."<br/>":"")."
	".(isset($_POST['messanger'])&&!empty($_POST['messanger'])?"<b>messanger</b>: ".$_POST['messanger']."<br/>":"")."
	".(isset($_POST['desc'])&&!empty($_POST['desc'])?"<b>desc</b>: ".$_POST['desc']."<br/>":"")."");
	$m->Send();
	echo '<h3>Заявка отправлена.</h3>';       

?>