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
 
$msg=$_POST['telephone'];

$soobshenie=$_POST['message'];

$message = "<br /><b>Имя:</b>  $name<br /><br /><b>Телефон:</b>  $msg<br /><br /><b>Сообщение:</b>  $soobshenie"; 


 // Отправляем письмо админу  
 
mail($to, $subject, $message, $headers);

// Выводим сообщение пользователю 
 
?>