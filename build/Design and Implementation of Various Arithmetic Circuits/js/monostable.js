var click,clickout,clickcap;
var monostable = function(){
	this.t;
	this.r;
	this.c;
	var capfirstTOHandler;
	var capsecondTOHandler;
	var outfirstTOHandler;
	var secondtimeout_handler;
	var outputcount = 0,capcount = 0;
	var capdata = [], totalPoints = totalPointscap= totalPointsout= 1;
	var outdata = [],data = [];
	var ontime;
	this.calculate_ontime  = function()
	{
		this.t = (1.1 * (this.r * Math.pow(10,3)) * (this.c *  Math.pow(10 ,-6)));
		$("#ontime").html(this.t.toFixed(2));
		ontime = this.t
	}

//-----------------Data for trigger graph-------------------**
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
		
		
		
//-----------------------Data for capacitance graph--------------------------------**
	var capacitanceplot = function(){
		if(capcount<=ontime )
		{	
			$("#output").html(capcount.toFixed(2));
			capdata.push(capcount)
			capcount = capcount+0.1;		
			capsecondTOHandler = setTimeout(capacitanceplot, 90);
			document.getElementById("output1").src = "images/outputon.png";
			}
		else
			document.getElementById("output1").src = "images/outputoff.png";
			return 
	}
	function capacitorPlotData() {
		if (capdata.length > 0){
             capdata.splice(0,1);
          }
	    while (capdata.length <  totalPointscap) {
			  if(clickcap)
			  {
				clearTimeout(capfirstTOHandler)
				if(capcount<=ontime)
							capacitanceplot();
				else
				{
					clickcap = false;
					capcount = 0.0;
					clearTimeout(capsecondTOHandler)
				}
			}
			else {
				  y = 0;
			     capdata.push(y);
			     }
			     totalPointscap = 100
	      }
		totalPointscap++;
        var res = [];
	    for (var i = 0; i < capdata.length; ++i){
			if (capdata[i] == 5)
					res.push([ i , 0 ])
			res.push([ i, capdata[i] ])
            }
			return res;
			}
	
	
	
	
//-------------------------------------Data for output graph------------------------**
	function outputplot (){
	if(outputcount<=ontime )
		{	
			$("#output").html(outputcount.toFixed(2));
			outdata.push(ontime)
			outputcount = outputcount+0.1;		
			secondtimeout_handler = setTimeout(outputplot, 90);
			}
		else
			return 
		}
	function outputPlotData() {
  		if (outdata.length > 0){
            outdata.splice(0,1);
           }
  		while (outdata.length <  totalPointsout) {
               if(clickout){
              clearTimeout(outfirstTOHandler)
			  if(outputcount<=ontime)
			        outputplot();
			        else
				{ 
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
	    for (var i = 0; i < outdata.length; ++i){
			if (outdata[i] == 5)
					res.push([ i , 0 ])
			res.push([ i, outdata[i] ])
			}
	        return res;
		}
		
		
		
//-----------------------Formatting the look of the graph-------------------**
		
	var plot_trigger = $.plot($("#trigger_graph"), [ {
			 data : "[0,0]" 
		} ] ,
		{
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
		}
		);
		
	var plot_capacitor = $.plot($("#capacitor_graph"), [ {
			data :  "[0,0]"
		} ],{
			grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0,
				color :  "#00CD00"
			},   
			yaxis : {
				min : -1,
				max : 6
			},
			xaxis : {
			   //	min : 0,
			//    max : 100,
				autoscaleMargin :false,
				show : false,
				tickDecimal: 20,
				
			},
			lines: { steps: true }
		});
	
	var plot_output = $.plot($("#output_graph"), [ {
			data : "[0,0]"
		} ], {
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
		});
		
		
		
		var that = this;
		this.updateTrigger = function() 
		{
			$.plot($("#trigger_graph"), [ TriggerPlotData() ], 
			{
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
		});
			setTimeout(that.updateTrigger, 80);
		}
		
		this.updateCapacitance = function()
		{
			$.plot($("#capacitor_graph"), [ capacitorPlotData() ], 
			{
			grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0,
				color :  "#00CD00"
			},   
			yaxis : {
				min : -1,
				max : 6
			},
			xaxis : {
			  // 	min : 0,
			    //  max : 100,
				autoscaleMargin :false	,
				show : false,
				tickDecimal: 20,
				
			},
			lines: { steps: true }
		});
			capfirstTOHandler = setTimeout(that.updateCapacitance, 80);
		}
		
		
		this.updateoutput = function()
		{
			$.plot($("#output_graph"), [ outputPlotData() ], 
			{
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
		});
			outfirstTOHandler = setTimeout(that.updateoutput, 80);
		}
}


$(function(){
	if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
else
{   
		var obj1_astable = new astable();
		obj1_astable.updateastable();
		    
		$("#output_graph").css("visibility","visible");
		$("#capacitor_graph").css("visibility","visible");
		$("#trigger_graph").css("visibility","visible");
		
		var obj = new monostable();
		$("ul.tabs").tabs("> .pane");
	
		$('.tab1').bind("click", function() {
       		//var obj = new monostable();
       		$("#r").change(function(){
			obj.r = $("#r").val() ; 
			obj.calculate_ontime();});
			$("#c").change(function(){
			obj.c = $("#c").val() ;
			obj.calculate_ontime();});
			obj.updateTrigger();
			obj.updateCapacitance();
			obj.updateoutput();
       	});
     	
		$(":range").rangeinput({  progress: true, max: 100 });			//initializing the range sliders
		                       														
		                       														
		$("#power").click(function(){
		window.setTimeout(function(){
		document.getElementById("power").src = "images/on.png";
		},200)
		document.getElementById("power").src = "images/off.png"
		});                                                       
			                                                                      
		
		$("#trigger").mouseup(function(){
			document.getElementById("trigger").src = "images/trigger_on.png";
			click =true; 
			clickcap = true;
			clickout = true
			
			});
		$("#trigger").mousedown(function(){
			document.getElementById("trigger").src = "images/trigger_off.png";
			})
			
		//getting the slider values
		$("#r").change(function(){
			obj.r = $("#r").val() ; 
			obj.calculate_ontime();});
		$("#c").change(function(){
			obj.c = $("#c").val() ;
			obj.calculate_ontime();});
			obj.updateTrigger();
			obj.updateCapacitance();
			obj.updateoutput();
			}
})		