var updateHandler,click,clickout;
function astable(){
	var data = [];
	var outdata = [];		
	outputcount = 0;
	this.t1;
	this.r1;
	this.r2;	
	this.c1;
	var ontime1;	
	var outfirstTOHandler;
	var secondtimeout_handler,totalPoints = totalPointsout= 1;
	
/*--------Calculate the frequency---------------*/
	this.calculate_ontime1  = function()
	{
		this.t1=(((this.r1*Math.pow(10,3))+(this.r2*Math.pow(10,3)))*(this.c1*Math.pow(10,-6)))/1.44		
		$("#ontime2").html(this.t1.toFixed(2));
		ontime1=this.t1;
	}
/*1microfarad = 0.000001, resis:1000*/
	
/*------------GETTING DATA FOR TRIGGER GRAPH------------*/
   function TriggerPlotData() {
  		if (data.length > 0)
  			data.splice(0,1);
		while (data.length < totalPoints)
		{
			if(click){			
			y=0;
			click=false;
			}
			else
			 y = 5;
	        data.push(y);
			totalPoints=100;
			}
			totalPoints++;
		
		 // zip the generated y values with the x values
		//when trigger is clicked
        var res = [];
	     for (var i = 0; i < data.length; ++i){
			if (data[i] == 0)
					res.push([ i , 5 ])
			res.push([ i, data[i] ])
			}
			return res;
		}
   	
  //-----------------------------GETTING DATA FOR OUTPUT GRAPH--------------------------------- 	
   	function outputplot ()
   	{		
	   if(outputcount<=ontime1 )
		{	
			$("#output2").html(outputcount.toFixed(2));
			outdata.push(ontime1)
			outputcount = outputcount+0.1;		
			secondtimeout_handler = setTimeout(outputplot, 90);
			document.getElementById("output3").src = "images/outputon1.png";
		}
		else
			document.getElementById("output3").src = "images/outputoff1.png";
			return 
	}
	
	function outputPlotData() 
	{
  		if (outdata.length > 0){
            outdata=outdata.splice(1);
           }
  		while (outdata.length <  totalPointsout) {
            if(clickout){
                clearTimeout(outfirstTOHandler)
			    if(outputcount<=ontime1)
			   		{ outputplot();}
			    else{ 
					clickout = false;
					outputcount = 0.0;
					clearTimeout(secondtimeout_handler)
				}				
			}
			else {
				y = 0;
			    outdata.push(y);		
			    }
				totalPointsout = 100
	      }
		totalPointsout++;		
        var res = [];
	    for (var i = 0; i < outdata.length; ++i)
	    {
			if (outdata[i] == 5)
					res.push([ i , 0 ])
			res.push([ i, outdata[i] ])
		}
	        return res;
	}
		
   	
/*---------For the look of the graph------------*/
//----------------trigger graph-------------------
		
		var options = {
	    	grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0,
				color :  "#0000FF"
			},   
			yaxis : {
				min : -1,
				max : 6
			},
			xaxis : {
			   //	min : 0,
			   //   max : 100,
				autoscaleMargin :false	,
				show : false,
				tickDecimal: 20,				
			},
			lines: { steps: true }			
		};
		
//---------------------Output graph-----------------------------
		var options1 = {
	    	grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0,
				color :  "#FF0000"
			},  

			yaxis : {
				min : -1,
				max : 6
			},
			xaxis : {
			   //	min : 0,
			   //   max : 100,
				autoscaleMargin :false	,
				show : false,
				tickDecimal: 20,				
			},			
			lines: { steps: true }			
		};
			
//-----------------------Formatting the look of the graph-------------------**	
			
		var that = this;
		this.updateastable = function(){
		try{
			$.plot($("#trigger_graph1"), [ TriggerPlotData()],options); 			
			$.plot($("#output_graph1"), [ outputPlotData()],options1);
			updateHandler = setTimeout(that.updateastable, 80);
		}
			catch(e){}			
		}	
}

//function show_graph(){
$(function(){
if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
else
{
	
	$("#trigger_graph1").css("visibility","visible");
	$("#output_graph1").css("visibility","visible");
	
	var obj1_astable = new astable();
	obj1_astable.updateastable();	
	
	$('.tab2').bind("click", function() {       		
       		$("#r1").change(function(){
			obj1_astable.r1 = $("#r1").val() ; 
			obj1_astable.calculate_ontime1();});
			$("#r2").change(function(){
			obj1_astable.r2=$("#r2").val();	
			obj1_astable.calculate_ontime1();});			
			$("#c1").change(function(){
			obj1_astable.c1 = $("#c1").val() ;
			obj1_astable.calculate_ontime1();});
			obj1_astable.updateastable();			
       	});
	
	
	$("#trigger1").mouseup(function(){
			document.getElementById("trigger1").src = "images/trigger_on.png";
			click =true; 			
			clickout = true
			
			});
	$("#trigger1").mousedown(function(){
			document.getElementById("trigger1").src = "images/trigger_off.png";
		});	 
}
})
