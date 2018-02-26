var gpio = require('rpi-gpio');

var awsIot = require('aws-iot-device-sdk');

gpio.setMode('mode_bcm');


var count=0;

gpio.on('change', function(channel, value) {
	console.log('Channel ' + channel + ' value is now ' + value);
  count++;
  console.log(count);

    if(count >= 10);
    count = count % 10;

    if(count >= 100)
    count = count % 100;
  

 var a=10;
 var b=7;
 var c=19;
 var d=23;
 var e=18;
 var f=27;
 var g=06;
 var dot=9;

gpio.setup(a, gpio.DIR_OUT, write);
gpio.setup(b, gpio.DIR_OUT, write);
gpio.setup(c, gpio.DIR_OUT, write);
gpio.setup(d, gpio.DIR_OUT, write);
gpio.setup(e, gpio.DIR_OUT, write);
gpio.setup(d, gpio.DIR_OUT, write);
gpio.setup(f, gpio.DIR_OUT, write);
gpio.setup(g, gpio.DIR_OUT, write);
gpio.setup(dot, gpio.DIR_OUT, write);



var numbers = {

  "one" : [false,true,true,false,false,false,false],
  "two" : [true,true,false,true,true,false,true,],
  "three": [true,true,true,true,false,false,true],
  "four": [false,true,true,false,false,true,true],
  "five": [true,false,true,true,false,true,true],
  "six": [true,false,true,true,true,true,true],
  "seven" : [true,true,true,false,false,false,false],
  "eight" : [true,true,true,true,true,true,true],
  "nine" : [true,true,true,false,false,true,true],
  "zero" : [true,true,true,true,true,true,false],

};

function write(err) {

   if(count == 1){

    gpio.write(a, numbers.one[0]) ;

    gpio.write(b,numbers.one[1]) ; 
    
    gpio.write(c, numbers.one[2]) ;

    gpio.write(d,numbers.one[3]) ; 
    
    gpio.write(e, numbers.one[4]) ;

    gpio.write(f, numbers.one[5]) ;
    
    gpio.write(g, numbers.one[6]) ;

    gpio.write(dot,true) ;
   }   

    if(count == 0){

    gpio.write(a, numbers.zero[0]) ;

    gpio.write(b,numbers.zero[1]) ; 
    
    gpio.write(c, numbers.zero[2]) ;

    gpio.write(d,numbers.zero[3]) ; 
    
    gpio.write(e, numbers.zero[4]) ;

    gpio.write(f, numbers.zero[5]) ;
    
    gpio.write(g, numbers.zero[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 2){

    gpio.write(a, numbers.two[0]) ;

    gpio.write(b,numbers.two[1]) ; 
    
    gpio.write(c, numbers.two[2]) ;

    gpio.write(d,numbers.two[3]) ; 
    
    gpio.write(e, numbers.two[4]) ;

    gpio.write(f, numbers.two[5]) ;
    
    gpio.write(g, numbers.two[6]) ;

    gpio.write(dot,true) ;
   }     

   if(count == 3){

    gpio.write(a, numbers.three[0]) ;

    gpio.write(b,numbers.three[1]) ; 
    
    gpio.write(c, numbers.three[2]) ;

    gpio.write(d,numbers.three[3]) ; 
    
    gpio.write(e, numbers.three[4]) ;

    gpio.write(f, numbers.three[5]) ;
    
    gpio.write(g, numbers.three[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 4){

    gpio.write(a, numbers.four[0]) ;

    gpio.write(b,numbers.four[1]) ; 
    
    gpio.write(c, numbers.four[2]) ;

    gpio.write(d,numbers.four[3]) ; 
    
    gpio.write(e, numbers.four[4]) ;

    gpio.write(f, numbers.four[5]) ;
    
    gpio.write(g, numbers.four[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 5){

    gpio.write(a, numbers.five[0]) ;

    gpio.write(b,numbers.five[1]) ; 
    
    gpio.write(c, numbers.five[2]) ;

    gpio.write(d,numbers.five[3]) ; 
    
    gpio.write(e, numbers.five[4]) ;

    gpio.write(f, numbers.five[5]) ;
    
    gpio.write(g, numbers.five[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 6){

    gpio.write(a, numbers.six[0]) ;

    gpio.write(b,numbers.six[1]) ; 
    
    gpio.write(c, numbers.six[2]) ;

    gpio.write(d,numbers.six[3]) ; 
    
    gpio.write(e, numbers.six[4]) ;

    gpio.write(f, numbers.six[5]) ;
    
    gpio.write(g, numbers.six[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 7){

    gpio.write(a, numbers.seven[0]) ;

    gpio.write(b,numbers.seven[1]) ; 
    
    gpio.write(c, numbers.seven[2]) ;

    gpio.write(d,numbers.seven[3]) ; 
    
    gpio.write(e, numbers.seven[4]) ;

    gpio.write(f, numbers.seven[5]) ;
    
    gpio.write(g, numbers.seven[6]) ;

    gpio.write(dot,true) ;
   }    

   if(count == 8){

    gpio.write(a, numbers.eight[0]) ;

    gpio.write(b,numbers.eight[1]) ; 
    
    gpio.write(c, numbers.eight[2]) ;

    gpio.write(d,numbers.eight[3]) ; 
    
    gpio.write(e, numbers.eight[4]) ;

    gpio.write(f, numbers.eight[5]) ;
    
    gpio.write(g, numbers.eight[6]) ;

    gpio.write(dot,true) ;
   }  

   if(count == 9){

    gpio.write(a, numbers.nine[0]) ;

    gpio.write(b,numbers.nine[1]) ; 
    
    gpio.write(c, numbers.nine[2]) ;

    gpio.write(d,numbers.nine[3]) ; 
    
    gpio.write(e, numbers.nine[4]) ;

    gpio.write(f, numbers.nine[5]) ;
    
    gpio.write(g, numbers.nine[6]) ;

    gpio.write(dot,true) ;
   }    
}

});

gpio.setup(3, gpio.DIR_IN, gpio.EDGE_BOTH);

var device = awsIot.device({
   keyPath: '~/home/pi/GitHub/raspi-things/9e81cd9844-private.pem.key',
  certPath: '~/home/pi/GitHub/raspi-things/9e81cd9844-certificate.pem',
    caPath: '~/home/pi/GitHub/raspi-things/rootCA.pem.crt',
  clientId: 'prepaid-meter',
  region: 'us-east-1'
});


// device
//   .on('connect', function() {
//     console.log('connect');
//    // device.subscribe('topic_1');
//     device.publish('prepaid', JSON.stringify({ test_data: 'nde'}));
//   });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//   });



 /*var a=10;
 var b=7;
 var c=19;
 var d=23;
 var e=18;
 var f=27;
 var g=06;
 var dot=9;

gpio.setup(a, gpio.DIR_OUT, write);
gpio.setup(b, gpio.DIR_OUT, write);
gpio.setup(c, gpio.DIR_OUT, write);
gpio.setup(d, gpio.DIR_OUT, write);
gpio.setup(e, gpio.DIR_OUT, write);
gpio.setup(d, gpio.DIR_OUT, write);
gpio.setup(f, gpio.DIR_OUT, write);
gpio.setup(g, gpio.DIR_OUT, write);
gpio.setup(dot, gpio.DIR_OUT, write);

//var count = 9;

var numbers = {

  "one" : [false,true,true,false,false,false,false],
  "two" : [true,true,false,true,true,false,true,],
  "three": [true,true,true,true,false,false,true],
  "four": [false,true,true,false,false,true,true],
  "five": [true,false,true,true,false,true,true],
  "six": [true,false,true,true,true,true,true],
  "seven" : [true,true,true,false,false,false,false],
  "eight" : [true,true,true,true,true,true,true],
  "nine" : [true,true,true,false,false,true,true],
  "zero" : [true,true,true,true,true,true,false],

}

function write(err) {

   if(count == 1){

    gpio.write(a, numbers.one[0]) ;

    gpio.write(b,numbers.one[1]) ; 
    
    gpio.write(c, numbers.one[2]) ;

    gpio.write(d,numbers.one[3]) ; 
    
    gpio.write(e, numbers.one[4]) ;

    gpio.write(f, numbers.one[5]) ;
    
    gpio.write(g, numbers.one[6]) ;

    gpio.write(dot,true) ;
   };   

    if(count == 0){

    gpio.write(a, numbers.zero[0]) ;

    gpio.write(b,numbers.zero[1]) ; 
    
    gpio.write(c, numbers.zero[2]) ;

    gpio.write(d,numbers.zero[3]) ; 
    
    gpio.write(e, numbers.zero[4]) ;

    gpio.write(f, numbers.zero[5]) ;
    
    gpio.write(g, numbers.zero[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 2){

    gpio.write(a, numbers.two[0]) ;

    gpio.write(b,numbers.two[1]) ; 
    
    gpio.write(c, numbers.two[2]) ;

    gpio.write(d,numbers.two[3]) ; 
    
    gpio.write(e, numbers.two[4]) ;

    gpio.write(f, numbers.two[5]) ;
    
    gpio.write(g, numbers.two[6]) ;

    gpio.write(dot,true) ;
   };     

   if(count == 3){

    gpio.write(a, numbers.three[0]) ;

    gpio.write(b,numbers.three[1]) ; 
    
    gpio.write(c, numbers.three[2]) ;

    gpio.write(d,numbers.three[3]) ; 
    
    gpio.write(e, numbers.three[4]) ;

    gpio.write(f, numbers.three[5]) ;
    
    gpio.write(g, numbers.three[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 4){

    gpio.write(a, numbers.four[0]) ;

    gpio.write(b,numbers.four[1]) ; 
    
    gpio.write(c, numbers.four[2]) ;

    gpio.write(d,numbers.four[3]) ; 
    
    gpio.write(e, numbers.four[4]) ;

    gpio.write(f, numbers.four[5]) ;
    
    gpio.write(g, numbers.four[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 5){

    gpio.write(a, numbers.five[0]) ;

    gpio.write(b,numbers.five[1]) ; 
    
    gpio.write(c, numbers.five[2]) ;

    gpio.write(d,numbers.five[3]) ; 
    
    gpio.write(e, numbers.five[4]) ;

    gpio.write(f, numbers.five[5]) ;
    
    gpio.write(g, numbers.five[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 6){

    gpio.write(a, numbers.six[0]) ;

    gpio.write(b,numbers.six[1]) ; 
    
    gpio.write(c, numbers.six[2]) ;

    gpio.write(d,numbers.six[3]) ; 
    
    gpio.write(e, numbers.six[4]) ;

    gpio.write(f, numbers.six[5]) ;
    
    gpio.write(g, numbers.six[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 7){

    gpio.write(a, numbers.seven[0]) ;

    gpio.write(b,numbers.seven[1]) ; 
    
    gpio.write(c, numbers.seven[2]) ;

    gpio.write(d,numbers.seven[3]) ; 
    
    gpio.write(e, numbers.seven[4]) ;

    gpio.write(f, numbers.seven[5]) ;
    
    gpio.write(g, numbers.seven[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 8){

    gpio.write(a, numbers.eight[0]) ;

    gpio.write(b,numbers.eight[1]) ; 
    
    gpio.write(c, numbers.eight[2]) ;

    gpio.write(d,numbers.eight[3]) ; 
    
    gpio.write(e, numbers.eight[4]) ;

    gpio.write(f, numbers.eight[5]) ;
    
    gpio.write(g, numbers.eight[6]) ;

    gpio.write(dot,true) ;
   };    

   if(count == 9){

    gpio.write(a, numbers.nine[0]) ;

    gpio.write(b,numbers.nine[1]) ; 
    
    gpio.write(c, numbers.nine[2]) ;

    gpio.write(d,numbers.nine[3]) ; 
    
    gpio.write(e, numbers.nine[4]) ;

    gpio.write(f, numbers.nine[5]) ;
    
    gpio.write(g, numbers.nine[6]) ;

    gpio.write(dot,true) ;
   };    
};
*/