<? 
// ----------------------------конфигурация-------------------------- // 
 
date_default_timezone_set('Etc/GMT-5');

$to = 'barbershop.aristocrat@gmail.com';  // e-mail админа 

$subject .= date('F j, Y, g:i a');

$headers = "From: BARBERSHOP ARISTOCRAT <makemeh1@cavaliers.unisonplatform.com>\r\n";
$headers .= "Content-type:text/html;charset=windows-1251rn";

 
//---------------------------------------------------------------------- // 

// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$telephone=$_POST['telephone'];

$day=$_POST['day'];

//$month=$_POST['month'];

$time=$_POST['time'];


$message = "<br /><b>Имя:</b>  $name<br /><br /><b>Телефон:</b>  $telephone<br /><br /><b>День:</b>  $day<br /><br /><b>Время:</b>  $time"; 


 // Отправляем письмо админу  
 
mail($to, $subject, $message, $headers);

// Выводим сообщение пользователю 
 
?>