/*
Author: Agrawal Nikhita P.
Date  : 9/3/2012
i-Value Bridge Software Solutions
*/

var updateHandler;
function astable(){
	var asdata = [];
	totalPointsForAstable = 1,
	outputcount = 0.0;
	count = 0.0;
	this.t1;
	this.r1 =50;
	this.r2 =50;
	this.r3 =50;
	this.c1 =1;
	var frequency;
	
/*--------Calculate the frequency---------------*/
	this.calculate_freq  = function()
	{
		this.t1=2*((this.r1 * 1000) *(this.c1 * 1/1000000 ))* (Math.log(1+((2*(this.r3 * 1000)/(this.r2 * 1000)))));
		frequency = 1/this.t1;
		$("#caltime").html(frequency.toFixed(2));
		options.xaxis.max = frequency/100 .toFixed(2);
	}
/*1microfarad = 0.000001, resis:1000*/
	
/*------------GETTING DATA FOR GRAPH------------*/
    function getRandomData() {
		if (asdata.length > 0){
		   asdata =  asdata.slice(1);
		}
		while (asdata.length < frequency/100) {
		var  y = -5 ;
		if(y == -5){
			asdata.push(y,5);    		
			totalPointsForAstable = 100; 
			
			}
		}
	totalPointsForAstable++;
 	var res = [];
 	for (var i = -5; i < asdata.length; ++i){
			 if (res[i] == 5)
			 	res.push([ i , -5 ]);
			 	res.push([ i, asdata[i] ]);
		}
		return res;
   	}

/*---------For the look of the graph------------*/
		var options = {
	    	grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0,
				color :  "#FFFFFF"
			}, 

			yaxis : {
				 ticks: 6,
            	 min: -6,
            	 max: 6,
            	 color:"#008B00",
            	 autoscaleMargin :false,
				 show : false,
			},
			xaxis : {	
				min:0,
				max: 10,
				ticks: 10,
				autoscaleMargin :false,
				show : false,
				color:"#008B00",
			},

			color: "rgb(30, 180, 20)",
			threshold: {  color: "rgb(200, 20, 30)" },
			lines: { steps: true }
			
		};
			
			
			var that = this;
			this.updateastable = function() {
			try{
							$.plot($("#placeholder"), [ getRandomData()], options);
							var temp = that.updateastable;
							updateHandler = setTimeout(temp, 1000);
							
			  }
				catch(e){
				//	alert(e);
				}
			}
}

//function show_graph(){
$(function(){
	
	$("#placeholder").css("visibility","visible");
	var obj1_astable = new astable();
	obj1_astable.updateastable();
	
	$("#c1").change(function(){
	obj1_astable.c1 = parseFloat($("#c1").val());
	obj1_astable.calculate_freq();
	obj1_astable.updateastable();});
	
	$("#r1").change(function(){
	obj1_astable.r1 = parseFloat($("#r1").val());
	obj1_astable.calculate_freq();
	obj1_astable.updateastable();});
	
	$("#r2").change(function(){
	obj1_astable.r2 = parseFloat($("#r2").val());
	obj1_astable.calculate_freq();
	obj1_astable.updateastable();});
	
    $("#r3").change(function(){
	obj1_astable.r3 = parseFloat ($("#r3").val());
	obj1_astable.calculate_freq();
	obj1_astable.updateastable();});
	
	$('#power1').click(function(e){
	clearInterval(updateHandler);
	if($('#power1').attr('clicked') == true )
	{
	document.getElementById("power1").src = "off.png";
	}
	return false;
	});      
});
