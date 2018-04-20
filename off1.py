import RPi.GPIO as GPIO #importamos la libreria y cambiamos su nombre por "GPIO"
import time #necesario para los delays
 
#establecemos el sistema de numeracion que queramos, en mi caso BCM
GPIO.setmode(GPIO.BCM)
 
#configuramos el pin GPIO17 como una salida
GPIO.setup(17, GPIO.OUT)
 

GPIO.output(17, GPIO.LOW)

#encendemos y apagamos el led 5 veces
#for i in range(0,5):
 
#    GPIO.output(17, GPIO.HIGH)
    #time.sleep(1)
    #GPIO.output(17, GPIO.LOW)
    #time.sleep(1)
 
GPIO.cleanup()