<?php 
if($_POST){
extract($_POST);
  include '../libs/libmail.php';

  $body = '
    Nuevo mensaje desde formulario de contacto www.crystalsclean.cl<br /><br />
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Nombre</th><td>'.$_POST['nombre'].'</td>
        </tr>
        <tr>
          <th>Email</th><td>'.$_POST['email'].'</td>
        </tr>        
        <tr>
          <th>Mensaje</th><td>'.$_POST['mensaje'].'</td>
        </tr>
     </table>        
    ';   

     
    
    $m = new Mail;        
    $m->From( "Contacto Crystals Clean <no-reply@crystalsclean.cl>" );        
    //$m->To( 'contacto@crystalsclean.cl' );
    $m->To( 'aterrile@gmail.com' );
    $m->Subject( 'Nuevo contacto desde Crystals Clean (' . $asunto . ')' );        
    $m->Body($body);
    $m->Priority(3) ;    
    $sended = $m->Send();
    
    if( $sended ){
        echo"OK";
    }
}

?>