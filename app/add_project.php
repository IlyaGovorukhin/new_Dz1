<?php 
$name =$_POST['projectName'];
$data = array();



if ($name === '') {
	$data['status'] = 'Ошибка';
	$data['text'] = 'Заполните имя';
}else {
	$data['status'] = 'OK';
	$data['text'] = 'Имя введено';
}

header("Content-Type: application/json");
echo json_encode($data);
exit;

 ?>