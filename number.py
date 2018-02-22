######### SAMPLE CODE FOR 7 SEGMENT DISPLAY ###########

### Setup the Raspberry Pi GPIO for USE


# First import the GPIO module
import RPi.GPIO as GPIO

# Now set up GPIO using BCM numbering
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

### Assign the 7 segment variables that will map to each GPIO port
# Note: Use the numbers based on how you wired up the Pi

##a=19
##b=26
##c=20
##d=16
##e=12
##f=14
##g=6
##dot=21

a=10
b=7
c=19
d=23
e=18
f=27
g=06
dot=9


### Declare each GPIO port that will be used as an OUTPUT port
GPIO.setup(a,GPIO.OUT)
GPIO.setup(b,GPIO.OUT)
GPIO.setup(c,GPIO.OUT)
GPIO.setup(d,GPIO.OUT)
GPIO.setup(e,GPIO.OUT)
GPIO.setup(f,GPIO.OUT)
GPIO.setup(g,GPIO.OUT)
GPIO.setup(dot,GPIO.OUT)
### Turn on specific segments to make a number
#Number 1 = b,c ON and everything else OFF
GPIO.output(a,0)
GPIO.output(b,1)
GPIO.output(c,1)
GPIO.output(d,0)
GPIO.output(e,0)
GPIO.output(f,0)
GPIO.output(g,0)
GPIO.output(dot,1)