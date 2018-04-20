<?php

$valor = $_POST['codigoelemento'];


switch ($valor) {
    //Para Encender Aparatos
    case 'on1':
        exec('sudo python on1.py');
        break;
    case 'on2':
        exec('sudo python on2.py');
        break;
    case 'on3':
        exec('sudo python on3.py');
        break;
    case 'on4':
        exec('sudo python on4.py');
        break;
    case 'on5':
        exec('sudo python on5.py');
        break;
    case 'on6':
        exec('sudo python on6.py');
        break;

    //Para Apagar Aparatos
    case 'off1':
        exec('sudo python off1.py');
        break;
    case 'off2':
        exec('sudo python off2.py');
        break;
    case 'off3':
        exec('sudo python off3.py');
        break;
    case 'off4':
        exec('sudo python off4.py');
        break;
    case 'off5':
        exec('sudo python off5.py');
        break;
    case 'off6':
        exec('sudo python off6.py');
        break;

    default:
        break;

}

?>
