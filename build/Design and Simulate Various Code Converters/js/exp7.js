//1bitcomparator

var comparator1bit = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];
		//alert(id);
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}
		
		var a=document.getElementById("a2_0_text").value;
		var b=document.getElementById("b2_1_text").value;
		
		
		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {

		var y0, y1, y2;
		var a = this.switches[0].status;
		var b = this.switches[1].status;

		if(a > b) {
			y0 = 1;
			y1 = 0;
			y2 = 0;
		}

		if(a == b) {
			y0 = 0;
			y1 = 1;
			y2 = 0;
		}

		if(a < b) {
			y0 = 0;
			y1 = 0;
			y2 = 1;
		}

		if(y0 == true) {
			document.getElementById("led18").src = "images/lightbulb1.png";
			document.getElementById("led18_text").value = 1;
		} else {
			document.getElementById("led18").src = "images/lightbulb.png";
			document.getElementById("led18_text").value = 0;
		}
		if(y1 == true) {
			document.getElementById("led17").src = "images/lightbulb1.png";
			document.getElementById("led17_text").value = 1;
		} else {
			document.getElementById("led17").src = "images/lightbulb.png";
			document.getElementById("led17_text").value = 0;
		}
		if(y2 == true) {
			document.getElementById("led19").src = "images/lightbulb1.png";
			document.getElementById("led19_text").value = 1;
		} else {
			document.getElementById("led19").src = "images/lightbulb.png"
			document.getElementById("led19_text").value = 0;
		}
		
		document.getElementById("out1_text").value=y0+""+y1+""+y2;
		
		
	}
	this.clearAll = function() {
		/*
		 document.getElementById("led17").src = "images/lightbulb.png";
		 document.getElementById("led18").src = "images/lightbulb.png";
		 document.getElementById("led19").src = "images/lightbulb.png";
		 document.getElementById("a2_0").src = "images/off.png";
		 document.getElementById("b2_1").src = "images/off.png";
		 document.getElementById("led17_text").value = 0;
		 document.getElementById("led18_text").value = 0;
		 document.getElementById("led19_text").value = 0;
		 document.getElementById("a2_0_text").value = 0;
		 document.getElementById("b2_1_text").value = 0;*/

	}
}
//2bitcomparator
var comparator2bit = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];

		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}
		//alert(document.getElementById("b_1_text").value + "" + document.getElementById("a_0").value);
		var a_text = document.getElementById("b_1_text").value + "" + document.getElementById("a_0_text").value;
		var b_text = document.getElementById("d_3_text").value + "" + document.getElementById("c_2_text").value;
		document.getElementById("a_out_text").value = a_text;
		document.getElementById("b_out_text").value = b_text;
		
		document.getElementById("a_out_dec_text").value=parseInt(parseInt(a_text),2);
		document.getElementById("b_out_dec_text").value=parseInt(parseInt(b_text),2);

		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {

		var a0 = this.switches[0].status;
		var a1 = this.switches[1].status;
		var b0 = this.switches[2].status;
		var b1 = this.switches[3].status;
		//alert(a0+a1+b0+b1);
		var aGb = (a1 && !b1) || (a0 * !b1 * !b0) || (a1 * a0 * !b0)
		//this.setcomparator(aGb, "_OUTPUT0");
		var bGa = (!a1 && b1) || (!a0 * b1 * b0) || (!a1 * !a0 * b0)
		//this.setcomparator(bGa, "_OUTPUT2");
		var aEb = !(aGb || bGa);
		//this.setcomparator(aEb, "_OUTPUT1");

		if(aGb == true) {
			document.getElementById("led1").src = "images/lightbulb1.png";
			document.getElementById("led1_text").value = 1;
			document.getElementById("y_out_text").value = "001";
		} else {
			document.getElementById("led1").src = "images/lightbulb.png";
			document.getElementById("led1_text").value = 0;
		}
		if(bGa == true) {
			document.getElementById("led2").src = "images/lightbulb1.png";
			document.getElementById("led2_text").value = 1;
			document.getElementById("y_out_text").value = "010";
		} else {
			document.getElementById("led2").src = "images/lightbulb.png";
			document.getElementById("led2_text").value = 0;
		}
		if(aEb == true) {
			document.getElementById("led3").src = "images/lightbulb1.png";
			document.getElementById("led3_text").value = 1;
			document.getElementById("y_out_text").value = "100";
		} else {
			document.getElementById("led3").src = "images/lightbulb.png";
			document.getElementById("led3_text").value = 0;
		}
	}
}
//4bitcomparator------------------------------------------------------
var comparator4bit = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.reset4Bit = function(id) {
		document.getElementById(id).src = "images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		//alert(id);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png"
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}
		var a3 = document.getElementById("f1_5_text").value;
		var a2 = document.getElementById("d1_3_text").value;
		var a1 = document.getElementById("g1_6_text").value;
		var a0 = document.getElementById("a1_0_text").value;

		var b3 = document.getElementById("c1_2_text").value;
		var b2 = document.getElementById("b1_1_text").value;
		var b1 = document.getElementById("h1_7_text").value;
		var b0 = document.getElementById("e1_4_text").value;

		document.getElementById("a_out_text4").value = a3 + "" + a2 + "" + a1 + "" + a0;
		document.getElementById("b_out_text4").value = b3 + "" + b2 + "" + b1 + "" + b0;
		
		document.getElementById("a_out_dec_text4").value=parseInt(parseInt(a3 + "" + a2 + "" + a1 + "" + a0),2);
		document.getElementById("b_out_dec_text4").value=parseInt(parseInt(b3 + "" + b2 + "" + b1 + "" + b0),2);

		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {

		var a0 = this.switches[0].status;
		var b0 = this.switches[4].status;
		var a1 = this.switches[6].status;
		var b1 = this.switches[7].status;
		var a2 = this.switches[3].status;
		var b2 = this.switches[1].status;
		var a3 = this.switches[5].status;
		var b3 = this.switches[2].status;
		//alert(a0,b0,a1,b1,a2,b2,a3,b3)

		var y1 = !(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * !(a0 * !b0 || !a0 * b0)
		//alert("y1 :" +y1)
		var y2 = (a3 * !b3)
		var y3 = !(a3 * !b3 || !a3 * b3) * (a2 * !b2)
		var y4 = !(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * (a1 * !b1)
		var y5 = !(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * (a0 * !b0)
		// alert("y5:"+y5)
		var y6 = y2 + y3 + y4 + y5
		//var y6=[(a3 * !b3) || [(a3 * !b3 || !a3 * b3) * (a2 * !b2)] || [(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1)] || [(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0)]]
		var y7 = !(y1 || y6)
		//var y7=![[(a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0 || !a0 * b0)]  ||  [(a3 * !b3) || (a3 * !b3 || !a3 * b3) * (a2 * !b2) || (a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1) || (a3 * !b3 || !a3 * b3) * (a2 * !b2 || !a2 * b2) * (a1 * !b1 || !a1 * b1) * (a0 * !b0)]]

		if(y1 == true) {
			document.getElementById("led6").src = "images/lightbulb1.png";
			document.getElementById("led6_text").value = 1;
			y1=1;
		} else {
			document.getElementById("led6").src = "images/lightbulb.png";
			document.getElementById("led6_text").value = 0;
			y1=0;
		}
		if(y7 == true) {
			document.getElementById("led5").src = "images/lightbulb1.png";
			document.getElementById("led5_text").value = 1;
			y7=1;
		} else {
			document.getElementById("led5").src = "images/lightbulb.png";
			document.getElementById("led5_text").value = 0;
			y7=0;
		}
		if(y6 == true) {
			document.getElementById("led4").src = "images/lightbulb1.png";
			document.getElementById("led4_text").value = 1;
			y6=1;
		} else {
			document.getElementById("led4").src = "images/lightbulb.png";
			document.getElementById("led4_text").value = 0;
			y6=0;
		}
		
		document.getElementById("y_out_text4").value=y6+""+y1+""+y7;
	}
}
//--------------------------------------------------------multipliers---------------------------------------------------------------

//2bitmultiplier

var multiplier2bit = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.reset2BitMul = function(id) {
		document.getElementById(id).src = "images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}

		var a0 = document.getElementById("2bita_3_text").value;
		var a1 = document.getElementById("2bita_2_text").value;

		var b0 = document.getElementById("2bitb_1_text").value;
		var b1 = document.getElementById("2bitb_0_text").value;

		document.getElementById("aout_bin_text").value = a1 + "" + a0;
		document.getElementById("bout_bin_text").value = b1 + "" + b0;
		var a_dec=parseInt( parseInt(a1 + "" + a0), 2);
		var b_dec=parseInt( parseInt(b1 + "" + b0), 2);
		//alert(utility.convertToDecimal(0010));
		//var temp=10010000;
		document.getElementById("aout_dec_text").value=a_dec;
		document.getElementById("bout_dec_text").value=b_dec;
		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {
		var a0 = this.switches[3].status;
		var a1 = this.switches[2].status;
		var b0 = this.switches[1].status;
		var b1 = this.switches[0].status;

		//alert([a0,a1,b0,b1])

		var p0 = (a0 * b0)
		//this.setmultiplier(p0, "_OUTPUT0");

		//var p1 = (!a1 * a0 * b1)||(	a1*a0*!b0 )|| (a1 * !b1 * b0) || (a1 *!a0 *b0);
		var p1 = (a0 * b1) * !(a1 * b0) || !(a0 * b1) * (a1 * b0)

		var p2 = (a1 * b1 * !b0 ) || (a1 * !a0 * b1)
		//this.setmultiplier(p2, "_OUTPUT2");

		var p3 = (a1 * a0 * b1 * b0)
		//this.setmultiplier(p3, "_OUTPUT3");

		if(p0 == true) {
			document.getElementById("led10").src = "images/lightbulb1.png";
			document.getElementById("led10_text").value = 1;
		} else {
			document.getElementById("led10").src = "images/lightbulb.png";
			document.getElementById("led10_text").value = 0;
		}
		if(p1 == true) {
			document.getElementById("led9").src = "images/lightbulb1.png";
			document.getElementById("led9_text").value = 1;
		} else {
			document.getElementById("led9").src = "images/lightbulb.png";
			document.getElementById("led9_text").value = 0;
		}
		if(p2 == true) {
			document.getElementById("led8").src = "images/lightbulb1.png";
			document.getElementById("led8_text").value = 1;
		} else {
			document.getElementById("led8").src = "images/lightbulb.png";
			document.getElementById("led8_text").value = 0;
		}
		if(p3 == true) {
			document.getElementById("led7").src = "images/lightbulb1.png";
			document.getElementById("led7_text").value = 1;
		} else {
			document.getElementById("led7").src = "images/lightbulb.png";
			document.getElementById("led7_text").value = 0;
		}
		document.getElementById("pout_text").value="";
		
		var p_out=document.getElementById("pout_text").value;
		for(var i=7;i<=10;i++){
			p_out=p_out+""+document.getElementById("led"+i+"_text").value;
		}
		document.getElementById("pout_text").value=p_out;
		document.getElementById("pout_text_dec").value=parseInt(parseInt(p_out),2);
		
	}
}
//3biutmultiplier------>

var multiplier3bit = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	
	this.reset3BitMul = function(id) {
		document.getElementById(id).src = "images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.switch_status = function(id) {
		var index = id.split("_",3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "images/on.png";
			document.getElementById(id+"_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "images/off.png";
			document.getElementById(id+"_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json

		}
		var a2=document.getElementById("p1_3_text").value;
		var a1=document.getElementById("r1_5_text").value;
		var a0=document.getElementById("o1_2_text").value;
		
		document.getElementById("aout3_bin_text").value=a2+""+a1+""+a0;
		document.getElementById("aout3_dec_text").value=parseInt(parseInt(a2+""+a1+""+a0),2);
		
		var b2=document.getElementById("n1_1_text").value;
		var b1=document.getElementById("q1_4_text").value;
		var b0=document.getElementById("m1_0_text").value;
		
		document.getElementById("bout3_bin_text").value=b2+""+b1+""+b0;
		document.getElementById("bout3_dec_text").value=parseInt(parseInt(b2+""+b1+""+b0),2);

		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {
		a0 = this.switches[2].status;
		a1 = this.switches[5].status;
		a2 = this.switches[3].status;
		b0 = this.switches[0].status;
		b1 = this.switches[4].status;
		b2 = this.switches[1].status;
		//alert(a1,a0,a2,b0,b1,b2)
		//alert("a0 :"+a0);
		//alert("a1 :"+a1);
		//alert("a2 :"+a2);
		//alert("b0 :"+b0);
		//alert("b1 :"+b1);
		//alert("b2 :"+b2);
		/*
		 var m11=(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)
		 var m13=(a1 * b1) * (a0 * b0)
		 var m12=(a1 * b1) || [(a1 * b1) * (a0 * b0)]
		 var m10=(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]
		 var m14=(a0 * b1) * !(a1 * b0)  ||  !(a0 * b1) * (a1 * b0)
		 var m15= (a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]
		 var m16=[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)
		 var m17=(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]
		 var m20=[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1)  [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]
		 var m19=(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]
		 var m18=[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]
		 var m21=[[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  || (a1 * b1)
		 var m22=[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *  ![(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]  ||  ![(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *   [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]
		 var m23=(a2 * b0) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2) ]  ||  !(a2 * b0)  * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]

		 var  P0= a0 * b0

		 //var  P1= m7 * !m8 + !m7 * m8
		 var  P1=(a0 * b1) * !(a1 * b0) || !(a0 * b1) * (a1 * b0)

		 //var P2= m4 * !m16 + !m4 * m16
		 var  P2=(a2 * b0) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2) ] ||  !(a2 * b0)  *  [[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]

		 var  P3= [(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *  ![(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]  ||  ![(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]  *   [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]

		 // var  P4= m15 * !m18 + !m15 * m18
		 //var  P4=[(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]    *    ![[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]]] *  [(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[(a1 * b1) || [(a1 * b1) * (a0 * b0)] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]]
		 var P4=[(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]  *  ![[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  ||  ![(a2 * b2) * ![(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]] || !(a2 * b2) * [(a2 * b2) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]]  *    [[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]

		 //var  P5= m1 * m21
		 var  P5= (a2 * b2) *  [[[(a2 * b1) * !(a1 * b2) || !(a2 * b1) * (a1 * b2)]   *    [(a1 * b1) * ![[[(a1 * b1) || [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) || ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) || [(a1 * b1) * (a0 * b0)]] || !(a2 * b0) * [(a1 * b1) || [(a1 * b1) * (a0 * b0)]]]] || !(a1 * b1) * [[[(a1 * b1) + [(a1 * b1) * (a0 * b0)]] * !(a0 * b2) + ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] *(a0 * b2)]  *   [(a2 * b0) * ![(a1 * b1) + [(a1 * b1) * (a0 * b0)]] + !(a2 * b0) * [(a1 * b1) + [(a1 * b1) * (a0 * b0)]]]]]]  || (a1 * b1)]
		 */

		var m1 = a2 * b2
		var m2 = a2 * b1
		var m3 = a1 * b2
		var m4 = a2 * b0
		var m5 = a1 * b1
		var m6 = a0 * b2
		var m7 = a0 * b1
		var m8 = a1 * b0
		var m9 = a0 * b0

		var m11 = m2 * !m3 || !m2 * m3
		//alert("m11 :"+m11)
		var m13 = m5 * m9
		var m12 = m5 * !m13 || !m5 * m13
		var m10 = m1 * m12
		var m14 = m7 * !m8 || !m7 * m8
		var m15 = m1 * !m10 || !m1 * m10
		var m16 = m12 * !m6 || !m12 * m6
		var m17 = m4 * !m12 || !m4 * m12
		var m20 = m16 * m17
		var m19 = m5 * !m20 || !m5 * m20
		//alert("m19 :"+m19)
		var m18 = m11 * m19
		var m21 = m18 || m5
		var m22 = m11 * !m19 || !m11 * m19
		//alert("m22 :"+m22)
		var m23 = m4 * !m16 || !m4 * m16
		//alert("m23 :"+m23)
		var P1 = m14
		var P0 = m9
		var P2 = m23
		var P3 = m22
		var P4 = m15 * !m18 || !m15 * m18
		var P5 = m1 * m21

		if(P0 == true){
			document.getElementById("led11").src = "images/lightbulb1.png";
			document.getElementById("led11_text").value=1;
		}
		else{
			document.getElementById("led11").src = "images/lightbulb.png";
			document.getElementById("led11_text").value=0;
		}
		if(P1 == true){
			document.getElementById("led12").src = "images/lightbulb1.png";
			document.getElementById("led12_text").value=1;
		}
		else{
			document.getElementById("led12").src = "images/lightbulb.png";
			document.getElementById("led12_text").value=0;
		}
		if(P2 == true){
			document.getElementById("led13").src = "images/lightbulb1.png";
			document.getElementById("led13_text").value=1;
		}
		else{
			document.getElementById("led13").src = "images/lightbulb.png";
			document.getElementById("led13_text").value=0;
		}
		if(P3 == true){
			document.getElementById("led15").src = "images/lightbulb1.png";
			document.getElementById("led15_text").value=1;
		}
		else{
			document.getElementById("led15").src = "images/lightbulb.png";
			document.getElementById("led15_text").value=0;
		}
		if(P4 == true){
			document.getElementById("led14").src = "images/lightbulb1.png";
			document.getElementById("led14_text").value=1;
		}
		else{
			document.getElementById("led14").src = "images/lightbulb.png";
			document.getElementById("led14_text").value=0;
		}
		if(P5 == true){
			document.getElementById("led16").src = "images/lightbulb1.png";
			document.getElementById("led16_text").value=1;
		}
		else{
			document.getElementById("led16").src = "images/lightbulb.png";
			document.getElementById("led16_text").value=0;
		}
		var p0=document.getElementById("led11_text").value;
		var p1=document.getElementById("led12_text").value;
		var p2=document.getElementById("led13_text").value;
		var p3=document.getElementById("led15_text").value;
		var p4=document.getElementById("led14_text").value;
		var p5=document.getElementById("led16_text").value;
		
		var p_out=p5+""+p4+""+p3+""+p2+""+p1+""+p0;
		
		document.getElementById("pout3bit_bin_text").value=p_out;
		document.getElementById("pout3bit_dec_text").value=parseInt(parseInt(p_out),2);
	}
}

$(document).ready(function() {
	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {
		//mul2bit
		{
			var multiplier2bitObject = new multiplier2bit();
			multiplier2bitObject.initialize();
			$("#outputs2").delegate("img", "click", null, function() {
				var id = this.id;
				multiplier2bitObject.switch_status(id);
			});
		}

		//mul3bit
		{
			var multiplier3bitObject = new multiplier3bit();
			multiplier3bitObject.initialize();
			$("#outputs3").delegate("img", "click", null, function() {
				var id = this.id;
				multiplier3bitObject.switch_status(id);
			});
		}
		//comparator4bit
		{
			var comparator4bitObject = new comparator4bit();
			comparator4bitObject.initialize();
			$("#outputs1").delegate("img", "click", null, function() {
				var id = this.id;
				comparator4bitObject.switch_status(id);
			});
		}
		//comparator2bit
		{
			var comparator2bitObject = new comparator2bit();
			comparator2bitObject.initialize();
			$("#outputs").delegate("img", "click", null, function() {
				var id = this.id;
				comparator2bitObject.switch_status(id);
			});
		}
		//comparator1bit
		{
			$("ul.tabs").tabs("> .pane");
			var comparator1bitObject = new comparator1bit();
			comparator1bitObject.initialize();
			$("#outputs4").delegate("img", "click", null, function() {
				var id = this.id;
				comparator1bitObject.switch_status(id);

			});
		} {
			$("#run_button_1bitcom").click(function() {
				//comparator1bitObject.initialize();
				comparator1bitObject.calculate();
			})
			$("#clear_button_1bitcom").click(function() {
				//comparator1bitObject.clearAll();
				for(var i = 17; i <= 19; i++) {
					//alert("a_"+i+"_"+i);
					document.getElementById("led" + i).src = "images/lightbulb.png";
					document.getElementById("led" + i + "_text").value = 0;
					//comparator1bitObject.switch_status("led" + i);

				}
				document.getElementById("a2_0").src = "images/on.png";
				document.getElementById("a2_0_text").value = 1;
				comparator1bitObject.switch_status("a2_0");
				document.getElementById("b2_1").src = "images/on.png";
				document.getElementById("b2_1_text").value = 1;
				comparator1bitObject.switch_status("b2_1");
				document.getElementById("out1_text").value="";

			})
		} {

			$("#run_button_2bitcom").click(function() {
				//comparator1bitObject.initialize();
				comparator2bitObject.calculate();
			})
			$("#clear_button_2bitcom").click(function() {
				//comparator1bitObject.clearAll();
				for(var i = 1; i <= 3; i++) {
					//alert("a_"+i+"_"+i);
					document.getElementById("led" + i).src = "images/lightbulb.png";
					document.getElementById("led" + i + "_text").value = 0;
					//comparator1bitObject.switch_status("led" + i);

				}
				document.getElementById("d_3").src = "images/on.png";
				document.getElementById("d_3_text").value = 1;
				comparator2bitObject.switch_status("d_3");
				document.getElementById("c_2").src = "images/on.png";
				document.getElementById("c_2_text").value = 1;
				comparator2bitObject.switch_status("c_2");
				document.getElementById("b_1").src = "images/on.png";
				document.getElementById("b_1_text").value = 1;
				comparator2bitObject.switch_status("b_1");
				document.getElementById("a_0").src = "images/on.png";
				document.getElementById("a_0_text").value = 1;
				comparator2bitObject.switch_status("a_0");
				document.getElementById("y_out_text").value = "";
				document.getElementById("a_out_text").value = "00";
				document.getElementById("b_out_text").value = "00";
				document.getElementById("a_out_dec_text").value="0";
				document.getElementById("b_out_dec_text").value="0";

			})
		} {
			$("#run_button_4bitcom").click(function() {
				//comparator1bitObject.initialize();
				comparator4bitObject.calculate();
			})

			$("#clear_button_4bitcom").click(function() {
				//comparator1bitObject.clearAll();
				for(var i = 4; i <= 6; i++) {
					//alert("a_"+i+"_"+i);
					document.getElementById("led" + i).src = "images/lightbulb.png";
					document.getElementById("led" + i + "_text").value = 0;
				}

				comparator4bitObject.reset4Bit("f1_5");
				comparator4bitObject.reset4Bit("d1_3");
				comparator4bitObject.reset4Bit("g1_6");
				comparator4bitObject.reset4Bit("a1_0");

				comparator4bitObject.reset4Bit("c1_2");
				comparator4bitObject.reset4Bit("b1_1");
				comparator4bitObject.reset4Bit("h1_7");
				comparator4bitObject.reset4Bit("e1_4");

				document.getElementById("y_out_text4").value = "";
				document.getElementById("a_out_text4").value = "0000";
				document.getElementById("b_out_text4").value = "0000";
				
				document.getElementById("a_out_dec_text4").value="00";
				document.getElementById("b_out_dec_text4").value="00";

			})
		} {
			$("#run_button_2bitmul").click(function() {
				multiplier2bitObject.calculate();
			})

			$("#clear_button_2bitmul").click(function() {
				for(var i = 7; i <= 10; i++) {
					//alert("a_"+i+"_"+i);
					document.getElementById("led" + i).src = "images/lightbulb.png";
					document.getElementById("led" + i + "_text").value = 0;
				}
				multiplier2bitObject.reset2BitMul("2bita_3");
				multiplier2bitObject.reset2BitMul("2bita_2");
				multiplier2bitObject.reset2BitMul("2bitb_1");
				multiplier2bitObject.reset2BitMul("2bitb_0");
				
				document.getElementById("aout_bin_text").value="00";
				document.getElementById("bout_bin_text").value="00";
				document.getElementById("pout_text").value="";
				document.getElementById("pout_text_dec").value="";
				document.getElementById("aout_dec_text").value="0";
				document.getElementById("bout_dec_text").value="0";
			})
			
			$("#run_button_3bitmul").click(function (){
				multiplier3bitObject.calculate();
			})
			
			$("#clear_button_3bitmul").click(function (){
				for(var i=11;i<=16;i++){
					document.getElementById("led" + i).src = "images/lightbulb.png";
					document.getElementById("led" + i + "_text").value = 0;
				}
				multiplier3bitObject.reset3BitMul("p1_3");
				multiplier3bitObject.reset3BitMul("r1_5");
				multiplier3bitObject.reset3BitMul("o1_2");
				
				multiplier3bitObject.reset3BitMul("n1_1");
				multiplier3bitObject.reset3BitMul("q1_4");
				multiplier3bitObject.reset3BitMul("m1_0");
				
				document.getElementById("aout3_bin_text").value = "000";
				document.getElementById("aout3_dec_text").value = "0";
				
				document.getElementById("bout3_bin_text").value = "000";
				document.getElementById("bout3_dec_text").value = "0";
				
				document.getElementById("pout3bit_bin_text").value = "";
				document.getElementById("pout3bit_dec_text").value = "";
				
			})
		}
	}
});