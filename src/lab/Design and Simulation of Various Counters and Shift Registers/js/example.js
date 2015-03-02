var binaryweighted = function() {
	this.switches = [];
	this.id
	this.v0
	this.vr=5;
	this.rf=505;
	this.r=505
	var k;
	var loc = [];

	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}
		$("#outputbinary").text("V0 : ")

	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];

		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png";
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}

		var scope = this
		//scope.setbinaryweighted();
	}
	this.setresistors = function() {

		$("#r1").val("2R : " + this.r * 2);
		$("#r2").val("4R : " + this.r * 4);
		$("#r3").val("8R : " + this.r * 8);
		$("#r4").val("16R : " + this.r * 16);
		$("#r5").val("32R : " + this.r * 32);
		$("#r6").val("64R : " + this.r * 64);
		$("#r7").val("128R : " + this.r * 128);
		$("#r8").val("256R : " + this.r * 256);
	}
	this.setbinaryweighted = function() {
		//formula and graph
		var b7 = this.switches[7].status;
		var b6 = this.switches[6].status;
		var b5 = this.switches[5].status;
		var b4 = this.switches[4].status;
		var b3 = this.switches[3].status;
		var b2 = this.switches[2].status;
		var b1 = this.switches[1].status;
		var b0 = this.switches[0].status;

		//this.v0 = (this.vr * this.rf/this.r) * (b7/1 + b6/2 + b5/4 + b4/8 + b3/16 + b2/32 + b1/64 + b0/128)

		this.v0 = (this.vr * this.r ) * ((b7 / (1 * this.r) ) + (b6 / (2 * this.r) ) + (b5 / (4 * this.r) ) + (b4 / (8 * this.r) ) + (b3 / (16 * this.r) ) + (b2 / (32 * this.r) ) + (b1 / (64 * this.r) ) + (b0 / (128 * this.r ) ) )

		if(!isNaN(this.v0))
			$("#outputbinary").html("V0 : " + this.v0.toFixed(2))
		var scope = this;
		scope.plotgraph();
	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.plotgraph = function() {
		var d1 = [];
		var omega = 2 * Math.PI * 10;
		for(var i = 0; i <= 0.1; i += 0.001)
		d1.push([i, this.v0 * Math.sin((i * omega))]);

		//alert(d1)
		$.plot($("#graph"), [{
			label : "",
			data : d1
		}], {
			grid : {
				backgroundColor : {
					colors : ["#000", "#000"] ,
				}
			}
		});
	}
	this.diagram = function() {
		r = new Raphael(document.getElementById('image'), 700, 800);
		line1 = r.path(" M9 20 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline = r.path("M0 20 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline0 = r.path("M65 20 l 75 -0,l0,442").attr({
			'stroke-width' : 3
		});
		line1.scale(0.8, 0.8);
		line1.attr("stroke", "#0000FF");
		line2 = r.path(" M9 85 l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline1 = r.path("M0 85 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline2 = r.path("M65 85 l 75 -0").attr({
			'stroke-width' : 3
		});
		line2.scale(0.8, 0.8);
		line2.attr("stroke", "#0000FF");
		line3 = r.path(" M15 150 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline3 = r.path("M0 150  l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline4 = r.path("M75 150  l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line3.attr("stroke", "#0000FF");
		line4 = r.path(" M15 215, l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline5 = r.path("M0 215  l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline6 = r.path("M75 215  l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line4.attr("stroke", "#0000FF");
		line5 = r.path(" M15 278,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline6 = r.path("M0 278 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline7 = r.path("M75 278 ,l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line5.attr("stroke", "#0000FF");
		line6 = r.path(" M15 340 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline7 = r.path("M0 340 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline8 = r.path("M75 340 ,l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line6.attr("stroke", "#0000FF");
		line7 = r.path(" M15 400,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline9 = r.path("M0 400 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline10 = r.path("M75 400 ,l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line7.attr("stroke", "#0000FF");
		line8 = r.path(" M15 460 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		smallline11 = r.path("M0 460 l 15 -0").attr({
			'stroke-width' : 3
		});
		smallline12 = r.path("M75 460 ,l 65 -0 ").attr({
			'stroke-width' : 3
		});
		line8.attr("stroke", "#0000FF");
		triangle = r.path("M350 170 ,l-0,80,l80,-45,l-80,-34").attr({
			fill : "lightgrey"
		});
		ladder = r.path("M200 218 ,l90 0,l0,-80,l40,0").attr({
			'stroke-width' : 12
		});
		ladder.attr("stroke", "grey");
		ladder2 = r.path("M450 218,l70,0,l-35,0,l0,-80,l-40,0").attr({
			'stroke-width' : 12
		});
		ladder2.attr("stroke", "grey");
	}
}
var r2rLadder = function() {
	this.switches = [];
	this.id;
	this.v0;
	this.vr=5;
	this.rf=505;
	this.r=505;
	var k;
	var loc = []
	this.initialize = function() {
		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}
		$("#outputr2r").html("V0 : ");
	}
	this.setresistors = function() {
		$("#r1_r2r").val("2R : " + this.r * 2);
		$("#r2_r2r").val("4R : " + this.r * 4);
		$("#r3_r2r").val("8R : " + this.r * 8);
		$("#r4_r2r").val("16R : " + this.r * 16);
		$("#r5_r2r").val("32R : " + this.r * 32);
		$("#r6_r2r").val("64R : " + this.r * 64);
		$("#r7_r2r").val("128R : " + this.r * 128);
		$("#r8_r2r").val("256R : " + this.r * 256);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];

		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png"
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png"
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}

		//lert(this.switches.toSource())
		var scope = this;
		//scope.setr2rLadder();
	}
	this.setr2rLadder = function() {
		//formula and graph

		var b7 = this.switches[7].status;
		var b6 = this.switches[6].status;
		var b5 = this.switches[5].status;
		var b4 = this.switches[4].status;
		var b3 = this.switches[3].status;
		var b2 = this.switches[2].status;
		var b1 = this.switches[1].status;
		var b0 = this.switches[0].status;
		this.v0 = ((this.vr * this.rf ) / this.r ) * (b0 * (1 / 128) + b1 * (1 / 64) + b2 * (1 / 32) + b3 * (1 / 16) + b4 * (1 / 8) + b5 * (1 / 4) + b6 * (1 / 2) + b7 * (1 / 1) );
		if(!isNaN(this.v0))
			$("#outputr2r").html("V0 : " + this.v0.toFixed(2))
		var scope = this;
		scope.plotgraph();
	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.plotgraph = function() {
		var d1 = [];
		var omega = 2 * Math.PI * 10;
		for(var i = 0; i <= 0.1; i += 0.001)
		d1.push([i, this.v0 * Math.sin((i * omega))]);
		$.plot($("#graph_r2r"), [{
			label : "",
			data : d1
		}], {
			grid : {
				backgroundColor : {
					colors : ["#000", "#000"] ,
				}
			}
		});

	}
	this.drawdiagram = function() {
		//console.log("in")
		r = new Raphael(document.getElementById('image2'), 700, 800);
		var line1 = r.path(" M9 20 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline = r.path("M0 20 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline0 = r.path("M65 20 l 75 -0").attr({
			'stroke-width' : 3
		});
		line1.scale(0.8, 0.8);
		line1.attr("stroke", "#0000FF");

		var line2 = r.path(" M9 85 l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline1 = r.path("M0 85 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline2 = r.path("M65 85 l 75 -0").attr({
			'stroke-width' : 3
		});
		line2.scale(0.8, 0.8);
		line2.attr("stroke", "#0000FF");

		var line3 = r.path(" M9 150 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline3 = r.path("M0 150  l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline4 = r.path("M65 150  l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line3.attr("stroke", "#0000FF");

		var line4 = r.path(" M8 215, l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline5 = r.path("M0 215  l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline6 = r.path("M64 215  l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line4.attr("stroke", "#0000FF");

		var line5 = r.path(" M8 278,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline6 = r.path("M0 278 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline7 = r.path("M64 278 ,l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line5.attr("stroke", "#0000FF");

		var line6 = r.path(" M8 340 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline7 = r.path("M0 340 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline8 = r.path("M64 340 ,l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line6.attr("stroke", "#0000FF");

		var line7 = r.path(" M8 400,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline9 = r.path("M0 400 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline10 = r.path("M64 400 ,l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line7.attr("stroke", "#0000FF");

		var line8 = r.path(" M8 460 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallline11 = r.path("M0 460 l 15 -0").attr({
			'stroke-width' : 3
		});
		var smallline12 = r.path("M64 460 ,l 75 -0 ").attr({
			'stroke-width' : 3
		});
		line8.attr("stroke", "#0000FF");

		//rotate

		var rotateline = r.path(" M0 20, l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate1 = r.path("M5 20 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate2 = r.path("M0 20 ,l 12 -0 ").attr({
			'stroke-width' : 3
		});
		rotateline.attr("stroke", "#0000FF");
		rotateline.scale(0.8, 0.8);
		rotateline.translate(97, 97)
		rotateline.rotate(-90);

		var rotateline = r.path(" M0 -43 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate3 = r.path("M5 20 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate4 = r.path("M140 94 ,l 0 -15 ").attr({
			'stroke-width' : 3
		});
		rotateline.attr("stroke", "#0000FF");
		rotateline.scale(0.8, 0.8);
		rotateline.translate(97, 97)
		rotateline.rotate(-90);

		var rotateline2 = r.path(" M12 86 ,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16").attr({
			'stroke-width' : 3
		});
		var smallrotate5 = r.path("M5 85 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate6 = r.path("M140 160 ,l 0 -16 ").attr({
			'stroke-width' : 3
		});
		rotateline2.attr("stroke", "#0000FF");
		rotateline2.scale(0.8, 0.8);
		rotateline2.translate(97, 97)
		rotateline2.rotate(-90);

		var rotateline3 = r.path(" M0 147 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate7 = r.path("M5 85 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate6 = r.path("M140 220 ,l 0 -14 ").attr({
			'stroke-width' : 3
		});
		rotateline3.attr("stroke", "#0000FF");
		rotateline3.scale(0.8, 0.8);
		rotateline3.translate(97, 97)
		rotateline3.rotate(-90);

		var rotateline4 = r.path(" M0 210 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate9 = r.path("M140 284 ,l 0 -14 ").attr({
			'stroke-width' : 3
		});
		rotateline4.attr("stroke", "#0000FF");
		rotateline4.scale(0.8, 0.8);
		rotateline4.translate(97, 97)
		rotateline4.rotate(-90);

		var rotateline5 = r.path(" M0 270 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate9 = r.path("M140 344 ,l 0 -14 ").attr({
			'stroke-width' : 3
		});
		rotateline5.attr("stroke", "#0000FF");
		rotateline5.scale(0.8, 0.8);
		rotateline5.translate(97, 97)
		rotateline5.rotate(-90);

		var rotateline6 = r.path(" M0 330 l 12 -0,l10 -15,l5 30,l12,-30,l8 30,l10,-30,l9 30,l8,-16,l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate8 = r.path("M5 85 l 12 -0").attr({
			'stroke-width' : 3
		});
		var smallrotate9 = r.path("M140 404 ,l 0 -14 ").attr({
			'stroke-width' : 3
		});
		rotateline6.attr("stroke", "#0000FF");
		rotateline6.scale(0.8, 0.8);
		rotateline6.translate(97, 97)
		rotateline6.rotate(-90);

		var smallrotate9 = r.path("M140 462 ,l 0 -12 ").attr({
			'stroke-width' : 3
		});
		var smallrotate9 = r.path("M140 30 ,l 0 -12 ").attr({
			'stroke-width' : 3
		});
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
		var triangle = r.path("M350 150 ,l-0,80,l80,-45,l-80,-34").attr({
			fill : "lightgrey"
		});
		var ladder = r.path("M200 218 ,l90 0,l0,-80,l40,0").attr({
			'stroke-width' : 12
		});
		ladder.attr("stroke", "grey");
		var ladder2 = r.path("M450 218,l70,0,l-35,0,l0,-80,l-40,0").attr({
			'stroke-width' : 12
		});
		ladder2.attr("stroke", "grey");

	}
}
var analog_to_digital = function() {
	this.amp=2.3;
	this.freq=10.1
	this.offset
	this.data
	this.res
	this.plotanalog = function() {

		var d1 = [];
		var omega = 2 * Math.PI * this.freq;
		for(var i = 0; i <= 0.1; i += 0.001)
		d1.push([i, (this.amp) * Math.sin((omega * i))]);
		$.plot($("#analoggraph"), [{
			data : d1,
			lines : {
				show : true,
				fill : true
			}
		}]);
	}
	this.plotdigital = function() {
		var d1 = [], d2 = [];
		for(var i = 0, j = 0; i <= 0.1, j < this.v0; i += 0.02, j += 0.025) {
			d1.push([i, Math.sin(j)]);
			d2.push([i, Math.sin(j)]);
		}
		$.plot($("#digitalgraph"), [{
			data : d1,
			label : "line1",
			lines : {
				show : true,
				fill : true
			}
		}], {
			grid : {
				backgroundColor : {
					colors : ["#000", "#000"] ,
				}
			}
		});
	}
}
var resolution = function() {
	this.bit
	this.noofbits
	var d1 = [];
	var datax = [], datay = []
	var output = 0;
	var diffrence;
	var i = 0;
	j = 0;
	var graph;
	var total = 256;
	var flag;
	var j = 0;
	;
	var loop = 0;
	var i = loop;
	this.resetToDefault = function() {
		bit = undefined;
		noofbits = undefined;
		d1 = []; datax = [], datay = [];
		output = 0; diffrence;
		i = 0;
		j = 0; graph;
		total = 256; flag;
		j = 0;
		loop = 0;
		i = loop;
	}
	this.init = function() {
		var scope = this;
		//alert("bit  "+this.bit);
		this.noofbits = Math.pow(2, this.bit);
		//alert("bit  "+this.noofbits);
		diffrence = 256 / this.noofbits;
		$("#diffrence_res").html(diffrence);
	}
	this.updategraph = function() {

		var options = {
			yaxes : {
				min : 0,
				max : 260
			},
			xaxes : {
				min : 0,
				max : 505,
				autoscaleMargin : true
			},
			grid : {
				backgroundColor : {
					colors : ["#000", "#000"]
				}
			}

		}
		graph = $.plot($("#res_graph"), [{
			data : ""
		}], options)
	}
	//it will iterate to all the x values and increase j when x is equal to datay[j]
	this.getinfo = function() {
		//that.init();
		while(output <= total) {
			datay.push(output)
			output = output + diffrence;
			$("#output_res").html(output)
		}
		while(i < total) {
			$("#output_res").html(i)
			d1.push([i, datay[j]]);
			graph.setData([d1]);
			graph.draw();

			if(i == datay[j + 1] || (i - loop) == datay[j + 1])
				j++;
			i++

		}
		d1.push([total, 0])
		graph.setData([d1]);
		graph.draw();
		loop = total
		total = total + 255;
		j = 0;
		datay.length == 0;
		return d1;
	}
}

$(document).ready(function() {
	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {
		$("ul.tabs").tabs("> .pane");

		$(":range").rangeinput({
			progress : true
		});
		var obj_a2d = new analog_to_digital();
		var obj_res = new resolution();

		//binaryweighted
		{
			var obj = new binaryweighted();
			obj.initialize();
			obj.diagram();
			$("#switch").delegate("img", "click", null, function() {
				var id = this.id;
				obj.switch_status(id);
			});
			//getting the  slider value
			$("#vr").change(function() {
				obj.vr = $("#vr").val();
				//obj.setbinaryweighted();
			});
			$("#rf").change(function() {
				obj.rf = $("#rf").val();
				//obj.setbinaryweighted();
			});
			$("#r").change(function() {
				obj.r = $("#r").val();
				obj.setresistors();
				//obj.setbinaryweighted();
			});
		}
		//r2r ladder
		{
			var obj_r2r = new r2rLadder();
			obj_r2r.initialize();
			obj_r2r.drawdiagram();
			//obj_r2r.plotgraph();
			$("#switch13").delegate("img", "click", null, function() {
				var id = this.id;
				obj_r2r.switch_status(id);
			});
			//getting the  slider value
			$("#vr_r2r").change(function() {
				obj_r2r.vr = $("#vr_r2r").val()
				//obj_r2r.setr2rLadder();
			});
			$("#rf_r2r").change(function() {
				obj_r2r.rf = $("#rf_r2r").val();
				//obj_r2r.setr2rLadder();
			});
			$("#r_r2r").change(function() {
				obj_r2r.r = $("#r_r2r").val();
				obj_r2r.setresistors();
				//obj_r2r.setr2rLadder();
			});
		}
		//analog to digital
		{

			$(function() {
				//getting the  slider value
				$("#amp_a2d").change(function() {
					obj_a2d.amp = $("#amp_a2d").val()
					//obj_a2d.plotanalog();
				});
				$("#freq_a2d").change(function() {
					obj_a2d.freq = $("#freq_a2d").val();
					//obj_a2d.plotanalog();
				});
				$("#resolution_a2d").change(function() {
					obj_a2d.res = $("#resolution_a2d").val();
					//obj_a2d.plotanalog();
				});
				$("#offset_a2d").change(function() {
					obj_a2d.offset = $("#offset_a2d").val();
					//obj_a2d.plotanalog();
				});
				$("#data_a2d").change(function() {
					obj_a2d.data = $("#data_a2d").val();
					//obj_a2d.plotanalog();
				});
			})
		}
		//resolution
		{
			$("#bit").change(function() {

			})
		} {
			$("#run_button_binw").click(function() {
				obj.r = $("#r").val();
				obj.setresistors();
				obj.setbinaryweighted();
			})

			$("#clear_button_binw").click(function() {
				//obj.initialize();
				//obj.switches = [];
				obj.id = undefined;
				obj.v0 = undefined;
				obj.vr = 5;
				obj.rf = 505;
				obj.r = 505;
				//obj.diagram();
				$("#graph").html("");
				$("#outputbinary").html("V0 :");

				var j = 7;
				for(var i = 1; i <= 8; i++) {
					$("#r" + i).val("");
					document.getElementById("b" + j + "_" + j).src = "images/on.png";
					obj.switch_status("b" + j + "_" + j);
					j--;
				}
				//alert($("#vr").val());
				$("#vr").val("5");
				$("#vr").blur();
				$("#r").val("505");
				$("#r").blur();
				$("#rf").val("505");
				$("#rf").blur();
				//$(":range").rangeinput({  progress: true });
			})
		} {
			$("#run_button_r2r").click(function() {
				obj_r2r.r = $("#r_r2r").val();
				obj_r2r.setresistors();
				obj_r2r.setr2rLadder();
			})

			$("#clear_button_r2r").click(function() {
				obj_r2r.initialize();
				//obj_r2r.switches = [];
				obj_r2r.id = undefined;
				obj_r2r.v0 = undefined;
				obj_r2r.vr = 5;
				obj_r2r.rf = 505;
				obj_r2r.r = 505;
				$("#graph_r2r").html("");
				$("#outputr2r").html("V0 :");
				//obj.setbinaryweighted();
				var j = 7;
				for(var i = 1; i <= 8; i++) {
					$("#r" + i + "_r2r").val("");
					document.getElementById("r2r_" + j).src = "images/on.png";
					obj.switch_status("r2r_" + j);
					j--;
				}
				$("#vr_r2r").val("5");
				$("#vr_r2r").blur();
				$("#r_r2r").val("505");
				$("#r_r2r").blur();
				$("#rf_r2r").val("505");
				$("#rf_r2r").blur();
			})
		} {
			$("#run_button_a2d").click(function() {
				obj_a2d.plotanalog();
				//alert(obj_a2d.amp+""+obj_a2d.freq);
			})

			$("#clear_button_a2d").click(function() {
				//obj_a2d.initialize();
				this.amp=2.3
				obj_a2d.freq = 10.1;
				obj_a2d.offset = undefined;
				obj_a2d.data = undefined;
				obj_a2d.res = undefined;
				$("#analoggraph").html("");
				$("#digitalgraph").html("");
				//obj.setbinaryweighted();
				//alert($("#vr").val());
				$("#amp_a2d").val("2.3");
				$("#amp_a2d").blur();
				$("#freq_a2d").val("10.1");
				$("#freq_a2d").blur();
				$("#resolution_a2d").val("25");
				$("#resolution_a2d").blur();
				$("#offset_a2d").val("50");
				$("#offset_a2d").blur();
				//$(":range").rangeinput({  progress: true });

				$("#dataformat").val("Offset Binary");
			})
		} {
			var tim;
			$("#run_button_res").click(function() {

				obj_res.bit = $("#bit").val();
				if(obj_res.bit != "--select--") {
					$("#run_button_res").attr("disabled", true);
					//$("#stop_button_res").attr("disabled", false);
					$("#clear_button_res").attr("disabled", false);

					obj_res.init();

					obj_res.updategraph();
					var reloading = function() {
						$.plot($("#res_graph"), [obj_res.getinfo()], obj_res.options);
						tim = setTimeout(reloading, 500);
					}
					reloading();
				} else {
					alert("Please select bit.");
				}
			})

			$("#clear_button_res").click(function() {
				$("#run_button_res").attr("disabled", false);
				$("#clear_button_res").attr("disabled", true);
			//	$("#stop_button_res").attr("disabled", true);
				clearTimeout(tim);
				obj_res.resetToDefault();
				$("#res_graph").html("");
				$("#bit").val("--select--");
				$("#output_res").html("<input type='text' size='7' disabled='true'>");
				$("#diffrence_res").html("<input type='text' size='7' disabled='true'>");
			})
			
			/*
			$("#stop_button_res").click(function() {
							$("#run_button_res").attr("disabled", false);
							//$("#clear_button_res").attr("disabled", true);
							$("#stop_button_res").attr("disabled", true);
							clearTimeout(tim);
						})*/
			
		}

	}
});
