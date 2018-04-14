
// var emitter = new EventEmitter();
// emitter.setMaxListeners(100);
var gpio = require('rpi-gpio');

var Gpio = require('onoff').Gpio;

var relay = new Gpio(11,'out');

var awsIot = require('aws-iot-device-sdk');

var AWS = require('aws-sdk');

gpio.setMode('mode_bcm');

var awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "xxxxxxxxxxxxx", "secretAccessKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

AWS.config.update(awsConfig);

var count=0 ;

var data1 = 0 ;

var docClient = new AWS.DynamoDB.DocumentClient();



function putData() {

  var params = {
        
        Item:{
            id : "0" ,
            message : count.toString(),
        },
        
        TableName : 'consumption'
        
    };
    
    docClient.put(params, function(err,data){
        if (err) {
         
            console.log('Error saving Data!',err.stack);
        } else {
            
            console.log('Data Saved!', data);
        }
        
    });
  
}


function getData() {

    var params = {
        TableName: "rechargeMMM",
        Key: {
            "id": "0"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("success - " + JSON.stringify(data, null, 2));
        data1 = data.Item.message;

            return data1 ;
        }
    });   
}

getData();


function relayOff(){
    if(count >= data1){
    relay.write(0, function(err){
      if (err) throw err;
      console.log('relay-off');
    });

    relay.unexport();
}
else return;

  } 



//console.log(data1);


// var device = awsIot.device({
//   keyPath: '9e81cd9844-private.pem',
//   certPath: '9e81cd9844-certificate.pem',
//   caPath: 'rootCA.pem',
//   clientId: 'prepaid-meter',
//   region: 'us-east-1',
//   host: 'a1gclxlf7o8zk9.iot.us-east-1.amazonaws.com',
// });

gpio.on('change', function(channel, value) {
	console.log('Channel ' + channel + ' value is now ' + value);
  count++;


  console.log(count,data1);

    if(count >= 10){
    count = count % 10;
    count--;
    }
    if(count >= 100){
    count = count % 100;
    count--;
    }
    var a=10;
    var b=7;
    var c=19;
    var d=23;
    var e=18;
    var f=27;
    var g=06;
    var dot=9;
// gpio.setup(11, gpio.DIR_LOW, write);
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

    putData();

    relayOff();

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

        putData();

        relayOff();

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

//        putData();


    putData();

    relayOff();
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

        putData();

        relayOff();

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

        putData();

        relayOff();

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

        putData();

        relayOff();

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

        putData();

        relayOff();

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

        putData();

        relayOff();

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

        putData();

        relayOff();

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

        putData();

        relayOff();

    
//     relay.write(0, function(err){
//       if (err) throw err;
//       console.log('relay-off');
//     });

//     relay.unexport();

 } 

  
//   device
//   .on('connect', function() {
//     console.log('connect');
//    // device.subscribe('topic_1');
//     device.publish('prepaid', JSON.stringify({ test_data: count}));
//     console.log("Published!!");
//   });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//   });  
   

}


//   device
//   .on('connect', function() {
//     console.log('connect');
//    // device.subscribe('topic_1');
//     device.publish('prepaid', JSON.stringify({ test_data: count}));
//     console.log("Published!!");
//   });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//   });  
});

gpio.setup(3, gpio.DIR_IN, gpio.EDGE_BOTH);

// function pub() {

//   device
//   .on('connect', function() {
//     console.log('connect');
//    // device.subscribe('topic_1');
//     device.publish('prepaid', JSON.stringify({ test_data: count}));
//     console.log("Published!!");
//   });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//   });

  
// }
