
var monostable = function(){
	this.t;
	this.r;
	this.c;
	var capfirstTOHandler;
	var capsecondTOHandler;
	var outfirstTOHandler;
	var outsecondTOHandler;
	var outputcount,capcount;
	var capdata = [], totalPoints = totalPointscap=totalPointsout= 1;
	var outdata = [],data = [] ;
	var ontime;
	this.calculate_ontime  = function()
	{
		this.t = (1.1 * (this.r * Math.pow(10,3)) * (this.c *  Math.pow(10 ,-6)))
		$("#ontime").html(this.t.toFixed(2))
		ontime = this.t
	}
	//Data for trigger graph
	function TriggerPlotData() {
  		if (data.length > 100)
            data = data.slice(1);
		// do a random walk
        while (data.length <  totalPoints) {
			if(click){
				y=0;
				click=false;  
			}
			else
	             y = 5;
	        data.push(y);
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
	//Data for capacitance graph
	var capacitanceplot = function(){
		if(capcount<=ontime )
		{	
			$("#output").html(capcount.toFixed(2));
			capdata.push(capcount)
			capcount = capcount+0.1;		
			console.log(capcount.toFixed(2))
			capsecondTOHandler = setTimeout(capacitanceplot, 90);
			
		}
		else	
		return 
	}
	function capacitorPlotData() {
		if (capdata.length > 100){
            capdata = capdata.slice(1);
		}
		
  		// do a random walk
        while (capdata.length <  totalPointscap) {
			  if(clickcap)
			  {
				clearTimeout(capfirstTOHandler)
				if(capcount<=ontime )
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
	      }
		 
		totalPointscap++;
        // zip the generated y values with the x values
		//when trigger is clicked
        var res = [];
	
        for (var i = 0; i < capdata.length; ++i){
			if (capdata[i] == 5)
					res.push([ i , 0 ])
			res.push([ i, capdata[i] ])

			}
		
			return res;
	}
	//Data for outptu graph
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
  		if (outdata.length > 100){
            outdata = outdata.slice(1);
		}
		
  		// do a random walk
        while (outdata.length <  totalPointsout) {
			  if(clickout){
			  clearTimeout(outfirstTOHandler)
			  if(outputcount<=ontime )
					outputplot();
			else
				{
					clickout = false;
					outputcount = 0.0;
					clearTimeout(outsecondTOHandler)
				}
			}
			else {
				y = 0;
			     outdata.push(y);
				}
	      }
		 
		totalPointsout++;
        // zip the generated y values with the x values
		//when trigger is clicked
        var res = [];
	
        for (var i = 0; i < outdata.length; ++i){
			if (outdata[i] == 5)
					res.push([ i , 0 ])
			res.push([ i, outdata[i] ])

			}
		
			return res;
		}
		var options = {
	    	grid: { backgroundColor: { colors: ["#000", "#000"] } },
			series : {
				shadowSize : 0
			}, // drawing is faster without shadows
			yaxis : {
				min : -1,
				max : 6
			},
			xaxis : {
				min : 0,
				max : 100,
				show : false,
				autoscaleMargin :true
			},
			color: "rgb(30, 180, 20)",
			threshold: {  color: "rgb(200, 20, 30)" },
				lines: { steps: true }
		};
		var plot_trigger = $.plot($("#trigger_graph"), [ {
			data : "[0,0]"
		} ], options);
		var plot_capacitor = $.plot($("#capacitor_graph"), [ {
			data : "[0,0]"
		} ], options);
		var plot_output = $.plot($("#output_graph"), [ {
			data : "[0,0]"
		} ], options);
		var that = this;
		this.updateTrigger = function() 
		{
			$.plot($("#trigger_graph"), [ TriggerPlotData() ], options);
			setTimeout(that.updateTrigger, 80);
		}
		this.updateCapacitance = function()
		{
			$.plot($("#capacitor_graph"), [ capacitorPlotData() ], options);
			capfirstTOHandler = setTimeout(that.updateCapacitance, 80);
		}
		this.updateoutput = function()
		{
			$.plot($("#output_graph"), [ outputPlotData() ], options);
			outfirstTOHandler = setTimeout(that.updateoutput, 80);
		}
};
$(document).ready(function(){

		var obj = new monostable();
		//initializing the range sliders
		$(":range").rangeinput({  progress: true, max: 100 });
		
		$("#power").click(function(){
			window.setTimeout(function(){
			document.getElementById("power").src = "on.png";
			},200)
			document.getElementById("power").src = "off.png"
			//call the function which resetes the value
			});
		
		$("#trigger").mouseup(function(){
			document.getElementById("trigger").src = "trigger_on.png";
			document.getElementById("output").src = "outputoff.png";
			//call plot function to plot for trigger
			click =true; 
			clickcap = true;
			clickout = true
			
			});
		$("#trigger").mousedown(function(){
			document.getElementById("trigger").src = "trigger_off.png";
			document.getElementById("output").src = "outputon.png";
			})
			
		//getting the slider values
		$("#r").change(function(){
			obj.r = $("#r").val() ; 
			obj.calculate_ontime();});
		$("#c").change(function(){
			obj.c = $("#c").val() ;
			obj.calculate_ontime();			});
		obj.updateTrigger();
		obj.updateCapacitance();
			obj.updateoutput();
});		