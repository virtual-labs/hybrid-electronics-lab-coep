
var binaryweighted = function()
 {
	 this.switches = [];
	 this.id ;
	 this.v0;
	 this.vr; this.rf; this.r;
	 var k;
	 var loc = []
	 this.initialize = function()
	 {
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		$("#outputbinary").text("V0 : ")
		var scope = this
		scope.setbinaryweighted();
	 }
	 this.switch_status =function(id,index)
	{
		
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
			if(previous_image == "off")
			{
				document.getElementById(id).src = "on.png"
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "off.png"
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
				
			}
		
		var scope = this
		scope.setbinaryweighted();
	 }
	 this.setresistors = function()
	 {
	 //alert(88)
	 $("#r1").val("2R : "+this.r*2);
	  $("#r2").val("4R : "+this.r*4);
	  $("#r3").val("8R : "+this.r*8);
	  $("#r4").val("16R : "+this.r*16);
	  $("#r5").val("32R : "+this.r*32);
	  $("#r6").val("64R : "+this.r*64);
	  $("#r7").val("128R : "+this.r*128);
	  $("#r8").val("256R : "+this.r*256);
	 }
	 this.setbinaryweighted = function()
	 {
		//formula and graph
		var b7 = this.switches[7].status;
		var b6 = this.switches[6].status;
		var b5 = this.switches[5].status;
		var b4 = this.switches[4].status;
		var b3 = this.switches[3].status;
		var b2 = this.switches[2].status;
		var b1 = this.switches[1].status;
		var b0 = this.switches[0].status;
		this.v0 = (this.vr * this.rf/this.r)*(b7/1 + b6/2 + b5/4 + b4/8 + b3/16 + b2/32 + b1/64 + b0/128)
		if(!isNaN(this.v0))
		$("#outputbinary").html("V0 : "+this.v0.toFixed(2))
		var scope = this;
		scope.plotgraph();
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.plotgraph = function()
	{alert("plot")
		var d1 = [];
		var omega = 2 * Math.PI * 10 ; 
		for (var i = 0; i <= 0.1; i += 0.001  )
        d1.push([i, this.v0* Math.sin((i * omega))]);
		
		//alert(d1)
		$.plot($("#graph"), [
        { label: "",  data: d1 }
     ], {
           grid: {
            backgroundColor: { colors: ["#fff", "#eee"] , }
        }
    });
	}
	this.diagram = function()
	{
		r=new Raphael(document.getElementById('image'),700,800);
		line1= r.path(" M9 20 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline = r.path("M0 20 l 15 -0").attr({'stroke-width':3});
		smallline0 = r.path("M65 20 l 75 -0,l0,442").attr({'stroke-width':3});
		line1.scale(0.8, 0.8);
		line1.attr ("stroke", "#0000FF");
		

		line2 = r.path(" M9 85 l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline1 = r.path("M0 85 l 15 -0").attr({'stroke-width':3});
		smallline2 = r.path("M65 85 l 75 -0").attr({'stroke-width':3});
		line2.scale(0.8, 0.8);
		line2.attr ("stroke", "#0000FF");

		line3 = r.path(" M15 150 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline3 = r.path("M0 150  l 15 -0").attr({'stroke-width':3});
		smallline4 = r.path("M75 150  l 65 -0 ").attr({'stroke-width':3});
		line3.attr ("stroke", "#0000FF");

		line4 = r.path(" M15 215, l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline5 = r.path("M0 215  l 15 -0").attr({'stroke-width':3});
		smallline6 = r.path("M75 215  l 65 -0 ").attr({'stroke-width':3});
		line4.attr ("stroke", "#0000FF");

		line5 = r.path(" M15 278,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline6 = r.path("M0 278 l 15 -0").attr({'stroke-width':3});
		smallline7 = r.path("M75 278 ,l 65 -0 ").attr({'stroke-width':3});
		line5.attr ("stroke", "#0000FF");

		line6 = r.path(" M15 340 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline7 = r.path("M0 340 l 15 -0").attr({'stroke-width':3});
		smallline8 = r.path("M75 340 ,l 65 -0 ").attr({'stroke-width':3});
		line6.attr ("stroke", "#0000FF");

		line7 = r.path(" M15 400,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline9 = r.path("M0 400 l 15 -0").attr({'stroke-width':3});
		smallline10 = r.path("M75 400 ,l 65 -0 ").attr({'stroke-width':3});
		line7.attr ("stroke", "#0000FF");

		line8 = r.path(" M15 460 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		smallline11 = r.path("M0 460 l 15 -0").attr({'stroke-width':3});
		smallline12 = r.path("M75 460 ,l 65 -0 ").attr({'stroke-width':3});
		line8.attr ("stroke", "#0000FF");
		triangle =r.path("M350 170 ,l-0,80,l80,-45,l-80,-34").attr({fill:"lightgrey"});

		ladder = r.path("M200 218 ,l90 0,l0,-80,l40,0").attr({'stroke-width':12});
		ladder.attr ("stroke", "grey");
		ladder2 = r.path("M450 218,l70,0,l-35,0,l0,-80,l-40,0").attr({'stroke-width':12});
		ladder2.attr ("stroke", "grey");
	}
}
var r2rLadder = function()
{
	 this.switches = [];
	 this.id ;
	 this.v0;
	 this.vr;this.rf;this.r;
	 var k;
	 var loc = []
	 this.initialize = function()
	 {
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		$("#outputr2r").html("V0 : ");
		var scope = this
		scope.setr2rLadder();
	 }
	 this.setresistors = function()
	 {
	  $("#r1_r2r").val("2R : "+this.r*2);
	  $("#r2_r2r").val("4R : "+this.r*4);
	  $("#r3_r2r").val("8R : "+this.r*8);
	  $("#r4_r2r").val("16R : "+this.r*16);
	  $("#r5_r2r").val("32R : "+this.r*32);
	  $("#r6_r2r").val("64R : "+this.r*64);
	  $("#r7_r2r").val("128R : "+this.r*128);
	  $("#r8_r2r").val("256R : "+this.r*256);
	 }
	 this.switch_status =function(id,index)
	 {
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
			if(previous_image == "off")
			{
				document.getElementById(id).src = "on.png"
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "off.png"
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
				
			}
		
		var scope = this
		scope.setr2rLadder();
	 }
	 this.setr2rLadder = function()
	 {
		//formula and graph
		var b7 = this.switches[7].status;
		var b6 = this.switches[6].status;
		var b5 = this.switches[5].status;
		var b4 = this.switches[4].status;
		var b3 = this.switches[3].status;
		var b2 = this.switches[2].status;
		var b1 = this.switches[1].status;
		var b0 = this.switches[0].status;
		this.v0 = (this.vr * this.rf/this.r * 128)*(b0*1 + b1*2 + b2*4 + b3*8 + b4*16 + b5*32 + b6*64 + b7*128)
		if(!isNaN(this.v0))
		$("#outputr2r").html("V0 : "+this.v0.toFixed(2))
		var scope = this;
		scope.plotgraph();
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.plotgraph = function()
	{alert("plotr2r")
		var d1 = [];
		var omega = 2 * Math.PI * 10 ; 
		for (var i = 0; i <= 0.1; i += 0.001  )
        d1.push([i, this.v0* Math.sin((i * omega))]);
		 $.plot($("#graph_r2r"), [
        { label: "",  data: d1}
     ], {
       
        grid: {
            backgroundColor: { colors: ["#fff", "#eee"] , }
        }
    });
	
	}
	this.drawdiagram=function()
	{
		console.log("in")
		r=new Raphael(document.getElementById('image2'),700,800);
		var line1= r.path(" M9 20 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline = r.path("M0 20 l 15 -0").attr({'stroke-width':3});
		var smallline0 = r.path("M65 20 l 75 -0").attr({'stroke-width':3});
		line1.scale(0.8, 0.8);
		line1.attr ("stroke", "#0000FF");

		var line2 = r.path(" M9 85 l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline1 = r.path("M0 85 l 15 -0").attr({'stroke-width':3});
		var smallline2 = r.path("M65 85 l 75 -0").attr({'stroke-width':3});
		line2.scale(0.8, 0.8);
		line2.attr ("stroke", "#0000FF");

		var line3 = r.path(" M9 150 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline3 = r.path("M0 150  l 15 -0").attr({'stroke-width':3});
		var smallline4 = r.path("M65 150  l 75 -0 ").attr({'stroke-width':3});
		line3.attr ("stroke", "#0000FF");

		var line4 = r.path(" M8 215, l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline5 = r.path("M0 215  l 15 -0").attr({'stroke-width':3});
		var smallline6 = r.path("M64 215  l 75 -0 ").attr({'stroke-width':3});
		line4.attr ("stroke", "#0000FF");

		var line5 = r.path(" M8 278,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline6 = r.path("M0 278 l 15 -0").attr({'stroke-width':3});
		var smallline7 = r.path("M64 278 ,l 75 -0 ").attr({'stroke-width':3});
		line5.attr ("stroke", "#0000FF");

		var line6 = r.path(" M8 340 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline7 = r.path("M0 340 l 15 -0").attr({'stroke-width':3});
		var smallline8 = r.path("M64 340 ,l 75 -0 ").attr({'stroke-width':3});
		line6.attr ("stroke", "#0000FF");

		var line7 = r.path(" M8 400,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline9 = r.path("M0 400 l 15 -0").attr({'stroke-width':3});
		var smallline10 = r.path("M64 400 ,l 75 -0 ").attr({'stroke-width':3});
		line7.attr ("stroke", "#0000FF");

		var line8 = r.path(" M8 460 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallline11 = r.path("M0 460 l 15 -0").attr({'stroke-width':3});
		var smallline12 = r.path("M64 460 ,l 75 -0 ").attr({'stroke-width':3});
		line8.attr ("stroke", "#0000FF");

		//rotate



		var rotateline = r.path(" M0 20, l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate1 = r.path("M5 20 l 12 -0").attr({'stroke-width':3});
		var smallrotate2 = r.path("M0 20 ,l 12 -0 ").attr({'stroke-width':3});
		rotateline.attr ("stroke", "#0000FF");
		rotateline.scale(0.8, 0.8);
		rotateline.translate(97,97)
		rotateline.rotate(-90);

		var rotateline = r.path(" M0 -43 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate3 = r.path("M5 20 l 12 -0").attr({'stroke-width':3});
		var smallrotate4 = r.path("M140 94 ,l 0 -15 ").attr({'stroke-width':3});
		rotateline.attr ("stroke", "#0000FF");
		rotateline.scale(0.8, 0.8);
		rotateline.translate(97,97)
		rotateline.rotate(-90);

		var rotateline2 = r.path(" M12 86 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({'stroke-width':3});
		var smallrotate5 = r.path("M5 85 l 12 -0").attr({'stroke-width':3});
		var smallrotate6 = r.path("M140 160 ,l 0 -16 ").attr({'stroke-width':3});
		rotateline2.attr ("stroke", "#0000FF");
		rotateline2.scale(0.8, 0.8);
		rotateline2.translate(97,97)
		rotateline2.rotate(-90);

		var rotateline3 = r.path(" M0 147 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate7 = r.path("M5 85 l 12 -0").attr({'stroke-width':3});
		var smallrotate6 = r.path("M140 220 ,l 0 -14 ").attr({'stroke-width':3});
		rotateline3.attr ("stroke", "#0000FF");
		rotateline3.scale(0.8, 0.8);
		rotateline3.translate(97,97)
		rotateline3.rotate(-90);

		var rotateline4 = r.path(" M0 210 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({'stroke-width':3});
		var smallrotate9 = r.path("M140 284 ,l 0 -14 ").attr({'stroke-width':3});
		rotateline4.attr ("stroke", "#0000FF");
		rotateline4.scale(0.8, 0.8);
		rotateline4.translate(97,97)
		rotateline4.rotate(-90);

		var rotateline5 = r.path(" M0 270 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({'stroke-width':3});
		var smallrotate9 = r.path("M140 344 ,l 0 -14 ").attr({'stroke-width':3});
		rotateline5.attr ("stroke", "#0000FF");
		rotateline5.scale(0.8, 0.8);
		rotateline5.translate(97,97)
		rotateline5.rotate(-90);

		var rotateline6 = r.path(" M0 330 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({'stroke-width':3});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({'stroke-width':3});
		var smallrotate9 = r.path("M140 404 ,l 0 -14 ").attr({'stroke-width':3});
		rotateline6.attr ("stroke", "#0000FF");
		rotateline6.scale(0.8, 0.8);
		rotateline6.translate(97,97)
		rotateline6.rotate(-90);

		var smallrotate9 = r.path("M140 462 ,l 0 -12 ").attr({'stroke-width':3});
		var smallrotate9 = r.path("M140 30 ,l 0 -12 ").attr({'stroke-width':3});
		//size
		line1.scale(0.8, 0.8);
		line2.scale(0.8, 0.8);
		line3.scale(0.8, 0.8);
		line4.scale(0.8, 0.8);
		line5.scale(0.8, 0.8);
		line6.scale(0.8, 0.8);
		line7.scale(0.8, 0.8);
		line8.scale(0.8, 0.8);

		//origanal line3 = r.path(" M0 150 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 82 -0").attr({'stroke-width':3});
		var triangle =r.path("M350 150 ,l-0,80,l80,-45,l-80,-34").attr({fill:"lightgrey"});
		var ladder = r.path("M200 218 ,l90 0,l0,-80,l40,0").attr({'stroke-width':12});
		ladder.attr ("stroke", "grey");
		var ladder2 = r.path("M450 218,l70,0,l-35,0,l0,-80,l-40,0").attr({'stroke-width':12});
		ladder2.attr ("stroke", "grey");

	}
}
 var analog_to_digital = function()
{
	this.amp;
	this.freq;
	this.offset;
	this.data;
	this.res;
	
	this.plotanalog = function()
	{
		var d1 = [];
		var omega = 2 * Math.PI * this.freq;
		for (var i = 0; i <= 0.1; i += 0.001  )
        d1.push([i, (this.amp) * Math.sin((omega*i))]);
		$.plot($("#analoggraph"), [
        {
            data: d1,
			lines: { show: true, fill: true }
        }
		], {
			// xaxes : [{ min: 0 , max:0.1}],
			//  yaxes : [{ min : -this.v0 , max: this.v0 }],
        grid: {
            backgroundColor: { colors: ["#fff", "#eee"] , }
        }
	});
	}
	this.plotdigital = function()
	{
	var d1 = [], d2 =[];
		for (var i = 0,j=0; i <= 0.1,j<this.v0; i += 0.02 , j+=0.025 ){
        d1.push([i, Math.sin(j)]);
		 d2.push([i, Math.sin(j)]);}
		$.plot($("#digitalgraph"), [
        {
            data: d1,
			label: "line1",
			lines: { show: true, fill: true }
        }
		]);
	}
}
 var resolution = function()
 {
	 this.plotgraph = function()
	 {
		var d1 = []
		for (var i = 0; i < 14; i += 1  )
			d1.push([i, Math.sin(i)]);
		
		$.plot($("#res_graph"), [
			{ label: "",  data: d1 }
		 ], {
			xaxes : [{ min: 0 , max:504}],
			yaxes : [{ min : 0 , max: 255 }],
			grid: {
				backgroundColor: { colors: ["#fff", "#eee"] , }
			}
		});
	}
 }
 $(document).ready(function(){ 
		
		//object of r2rLadder
		var obj_r2r = new r2rLadder();
		//object of binaryweighted
		var obj = new binaryweighted();
		//object of analog_to_digital
		var obj_a2d = new analog_to_digital();
		//object of resolution
		var obj_res = new resolution();
		//initializing the elements of r2rladder and binaryweighted
		obj.initialize();
		obj.diagram();
	
		obj_r2r.initialize();
		obj_r2r.drawdiagram();
	
		obj_a2d.plotanalog();
		obj_a2d.plotdigital();
		
		$("ul.tabs").tabs("div.panes > div");
	
	/**code for adding onclick event on tabs*/
	/*var current_tab ;
		var api = $('ul.tabs').data('tabs');
		api.onClick(function(event, index) {
				var parts = [
					'Click -',
					' index=', index,
					' getCurrentTab()=', api.getCurrentTab().text(),
					' getTabs()[index]=', $(api.getTabs()[index]).text()
				];
				current_tab=index;
				if(current_tab == 0)
					obj.diagram();
				if(current_tab == 1)
				obj_r2r.drawdiagram();
			
			});
		*/
				
		//initializing the range sliders
		$(":range").rangeinput({  progress: true, max: 100 });
		
		//tabs 1 switches and slider adding events		
		{
			$("#b7").click(function(){
			obj.switch_status("b7",7);
			})
			$("#b6").click(function(){
			obj.switch_status("b6",6);
			})
			$("#b5").click(function(){
			obj.switch_status("b5",5);
			})
			$("#b4").click(function(){
			obj.switch_status("b4",4);
			})
			$("#b3").click(function(){
			obj.switch_status("b3",3);
			})
			$("#b2").click(function(){
			obj.switch_status("b2",2);
			})
			$("#b1").click(function(){
			obj.switch_status("b1",1);
			})
			$("#b0").click(function(){
			obj.switch_status("b0",0);
			})
			
			//getting the  slider value 
			$("#vr").change(function(){
			obj.vr = $("#vr").val() ;
			obj.setbinaryweighted();			});
			$("#rf").change(function(){
			obj.rf = $("#rf").val(); 
			obj.setbinaryweighted();   });
			$("#r").change(function(){
			obj.r = $("#r").val(); 
			obj.setresistors();
			obj.setbinaryweighted();
			});
	}
		//tabs 2 switches and slider adding events	
		{
		$("#b7_r2r").click(function(){
		obj_r2r.switch_status("b7_r2r",7);
		})
		$("#b6_r2r").click(function(){
		obj_r2r.switch_status("b6_r2r",6);
		})
		$("#b5_r2r").click(function(){
		obj_r2r.switch_status("b5_r2r",5);
		})
		$("#b4_r2r").click(function(){
		obj_r2r.switch_status("b4_r2r",4);
		})
		$("#b3_r2r").click(function(){
		obj_r2r.switch_status("b3_r2r",3);
		})
		$("#b2_r2r").click(function(){
		obj_r2r.switch_status("b2_r2r",2);
		})
		$("#b1_r2r").click(function(){
		obj_r2r.switch_status("b1_r2r",1);
		})
		$("#b0_r2r").click(function(){
		obj_r2r.switch_status("b0_r2r",0);
		})
		
		//getting the  slider value 
		$("#vr_r2r").change(function(){
		obj_r2r.vr = $("#vr_r2r").val() 
		obj_r2r.setr2rLadder();});
		$("#rf_r2r").change(function(){
		obj_r2r.rf = $("#rf_r2r").val(); 
		obj_r2r.setr2rLadder();});
		$("#r_r2r").change(function(){
		obj_r2r.r = $("#r_r2r").val() ;
		obj_r2r.setresistors();
		obj_r2r.setr2rLadder();});
   }
		//tabs 3 switches and slider adding events	
		{
		//getting the  slider value 
		$("#amp_a2d").change(function(){
		obj_a2d.amp = $("#amp_a2d").val() 
		obj_a2d.plotanalog();});
		$("#freq_a2d").change(function(){
		obj_a2d.freq = $("#freq_a2d").val(); 
		obj_a2d.plotanalog();});
		$("#resolution_a2d").change(function(){
		obj_a2d.res = $("#resolution_a2d").val() ;
		obj_a2d.plotanalog();});
		$("#offset_a2d").change(function(){
		obj_a2d.offset = $("#offset_a2d").val() ;
		obj_a2d.plotanalog();});
		$("#data_a2d").change(function(){
		obj_a2d.data = $("#data_a2d").val() ;
		obj_a2d.plotanalog();});
		}
		//tabs 4
		{
			obj_res.plotgraph();
		}
});