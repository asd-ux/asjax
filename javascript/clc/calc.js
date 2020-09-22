var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

var form = document.getElementById('xIsWhatPercantageOfY');
form.addEventListener('submit',function(Event){

    if(!numField1.Value || !numField2.value){
        alert("please enter values in the fields");
    }
    else{
    var x= parseFloat(numField1.value);
    var y= parseFloat(numField2.value);
    
        
        
    var result = x / y;
    var percent = result * 100;
    alert(percent);
        
        resultField.innertext = "Answer:" + percent + "%";
        event.preventDefault();
    }
    
   
});
