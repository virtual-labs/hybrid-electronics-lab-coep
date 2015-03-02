var halfadder = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var input1=this.switches[0].status;
		var input2=this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = input1 && input2;
	
		if(sum ==true)
		document.getElementById("sum").src = "lightbulb1.png"
		else
		document.getElementById("sum").src = "lightbulb.png"
		if(carry ==true)
		document.getElementById("carry").src = "lightbulb1.png"
		else
		document.getElementById("carry").src = "lightbulb.png"
	}
}
var fulladder = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.calculate = function ()
	{
		var input3=(this.switches[0].status != null)? this.switches[0].status : false; 
		var input4=(this.switches[1].status!= null)? this.switches[1].status : false;
		var input5=(this.switches[2].status!= null)? this.switches[2].status : false;
		
		var sum_halfadder =(!input3 && !input4 && input5) || (!input3 && input4 && !input5) || (input3 && !input4 && !input5) || (input3 && input4 && input5)
		var carry_halfadder = (input3 && input4) || (input3 && input5) || (input4 && input5)
	
	
		if(sum_halfadder ==true)
		document.getElementById("sum_fulladder").src = "lightbulb1.png"
		else
		document.getElementById("sum_fulladder").src = "lightbulb.png"
		if(carry_halfadder ==true)
		document.getElementById("carry_fulladder").src = "lightbulb1.png"
		else
		document.getElementById("carry_fulladder").src = "lightbulb.png"
	}
}
var bitadder = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.calculate = function ()
	{
		var a1 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var b1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a0 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var b0 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var cin =(this.switches[4].status != null)? this.switches[4].status : false; 
		
            
            var temp0 = ( (!a0) && b0 ) || ( a0 && (!b0) );
		var s0 = ( (!temp0) && cin) || ( temp0 && (!cin));
            var c0 = ( a0 && b0 ) || (temp0 && cin);
            
            var temp1 = ((!a1)&&b1) || (a1&&(!b1));
		var s1 = ((!temp1) && c0) || (temp1 && (!c0));
            var c1 = ( a1 && b1 ) || (temp1 && c0);
            
		
		if(s0 ==true)
		document.getElementById("sum1_2bit").src = "lightbulb1.png"
		else
		document.getElementById("sum1_2bit").src = "lightbulb.png"
		if(s1 ==true)
		document.getElementById("sum2_2bit").src = "lightbulb1.png"
		else
		document.getElementById("sum2_2bit").src = "lightbulb.png"
		if(c1 ==true)
		document.getElementById("carry_2bit").src = "lightbulb1.png"
		else
		document.getElementById("carry_2bit").src = "lightbulb.png"
	}
}
var halfsubtracter = function()
{
   this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var input1=this.switches[0].status;
		var input2=this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = !input1 && input2;
	    
		if(sum ==true)
		document.getElementById("sum_halfsub").src = "lightbulb1.png"
		else
		document.getElementById("sum_halfsub").src = "lightbulb.png"
		if(carry ==true)
		document.getElementById("carry_halfsub").src = "lightbulb1.png"
		else
		document.getElementById("carry_halfsub").src = "lightbulb.png"
	} 

}
var fullsubtracter = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.calculate = function ()
	{
		var x=(this.switches[0].status != null)? this.switches[0].status : false; 
		var y=(this.switches[1].status!= null)? this.switches[1].status : false;
		var z=(this.switches[2].status!= null)? this.switches[2].status : false;
		
		var sum_halfadder =(!x && !y && z) || (!x && y && !z) || (x && !y && !z) || (x && y && z)
		var carry_halfadder = z && !( (!x && y) || (x && !y)) || (!x &&  y);
	
	
		if(sum_halfadder ==true)
		document.getElementById("sum_fullsub").src = "lightbulb1.png"
		else
		document.getElementById("sum_fullsub").src = "lightbulb.png"
		if(carry_halfadder ==true)
		document.getElementById("carry_fullsub").src = "lightbulb1.png"
		else
		document.getElementById("carry_fullsub").src = "lightbulb.png"
	}
}
var bitaddersubtracter = function()
{
	this.switches = [];
	this.initialize = function(){
		
		for(var i=0;i<9;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var a0 = (this.switches[0].status != null)? this.switches[0].status : false
		var b0 =(this.switches[1].status != null)? this.switches[1].status : false
		var a1 = (this.switches[2].status != null)? this.switches[2].status : false
		var b1 = (this.switches[3].status != null)? this.switches[3].status : false
		var a2 = (this.switches[4].status != null)? this.switches[4].status : false
		var b2 = (this.switches[5].status != null)? this.switches[5].status : false
		var a3 = (this.switches[6].status != null)? this.switches[6].status : false
		var b3 = (this.switches[7].status != null)? this.switches[7].status : false
		var cout = (this.switches[8].status != null)? this.switches[8].status : false
            
            //alert(a0)
            
            var tb0 = ((!b0) && cout) || (b0 && (!cout));
           // alert(tb0);
            var tb1 = ((!b1) && cout) || (b1 && (!cout));
           //  alert(tb1);
            var tb2 = ((!b2) && cout) || (b2 && (!cout));
            // alert(tb2);
            var tb3 = ((!b3) && cout) || (b3 && (!cout));
           //  alert(tb3);
		var temp0 = ((!a0)&&tb0) || (a0&&(!tb0));
		var s0 = ((!temp0) && cout) || (temp0 && (!cout));
            var c0 = (a0 && tb0) || (cout && temp0);
          //  alert(s0)
            var temp1 = (!a1 && tb1) || (a1 && !tb1);
            var s1 = ((!temp1 && c0) || (temp1 && !c0));
            var c1 = (a1 && tb1) || (c0 && temp1);
            var temp2 = ((!a2) && tb2) || (a2 && (!tb2));
            var s2 = ((!temp2) && c1) || (temp2 && (!c1));
            var c2 = (a2 && tb2) || (c1 && temp2);
            var temp3 = ((!a3) && tb3) || (a3 && (!tb3));
            var s3 = ((!temp3) && c2) || (temp3 && (!c2));
            var c3 = (a3 && tb3) || (c2 && temp3);
		/*var s1 = a1 && ((!b1 && cout) || (b1 && !cout))
		var s2 = a2 && ((!b2 && cout) || (b2 && !cout))
		var s3 = a3 && ((!b3 && cout) || (b3 && !cout))*/
		
	
		if(s0 ==true)
		document.getElementById("s0_4bit").src = "lightbulb1.png"
		else
		document.getElementById("s0_4bit").src = "lightbulb.png"
		if(s1 ==true)
		document.getElementById("s1_4bit").src = "lightbulb1.png"
		else
		document.getElementById("s1_4bit").src = "lightbulb.png"
		if(s2 ==true)
		document.getElementById("s2_4bit").src = "lightbulb1.png"
		else
		document.getElementById("s2_4bit").src = "lightbulb.png"
		if(s3 ==true)
		document.getElementById("s3_4bit").src = "lightbulb1.png"
		else
		document.getElementById("s3_4bit").src = "lightbulb.png"
		if(c3 == true)
		document.getElementById("carry_4bit").src = "lightbulb1.png"
		else
		document.getElementById("carry_4bit").src = "lightbulb.png"
	} 

}
var binarytogray = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	
	}
	this.switch_status = function(id,index)
	{//alert("1" + [id,index]);
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
		scope.calculate()
	}
	this.calculate = function ()
	{
		var b0=(this.switches[0].status != null)? this.switches[0].status : false; 
		var b1=(this.switches[1].status!= null)? this.switches[1].status : false;
		var b2=(this.switches[2].status!= null)? this.switches[2].status : false;
		var b3 = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var g0 = (!b1 && b0) ||(b1 && !b0)
		var g1 = (!b2&& b1) ||(b2 && !b1)
		var g2 = ((!b3 && b2) ||(b3 && !b2))
		var g3 = b3;
		
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		$("#b_tog_text").html(b)
		var g = (((g0)?1:0) * 1) + (((g1)?1:0) * 2) + (((g2)?1:0) * 4) + (((g3)?1:0) * 8);
		$("#g_tog_text").html(g)
		
		if(g0 == true)
		document.getElementById("g0_btog").src = "lightbulb1left.png"
		else
		document.getElementById("g0_btog").src = "lightbulbleft.png"
		if(g1 == true)
		document.getElementById("g1_btog").src = "lightbulb1left.png"
		else
		document.getElementById("g1_btog").src = "lightbulbleft.png"
		if(g2 == true)
		document.getElementById("g2_btog").src = "lightbulb1left.png"
		else
		document.getElementById("g2_btog").src = "lightbulbleft.png"
		if(g3 == true)
		document.getElementById("g3_btog").src = "lightbulb1left.png"
		else
		document.getElementById("g3_btog").src = "lightbulbleft.png"
	}
	
}
var graytobinary = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.calculate = function ()
	{
		var g0=(this.switches[0].status != null)? this.switches[0].status : false; 
		var g1=(this.switches[1].status!= null)? this.switches[1].status : false;
		var g2=(this.switches[2].status!= null)? this.switches[2].status : false;
		var g3 = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var g3xorg2 = ((!g3 && g2) ||(g3 && !g2));
		var g0xorg1 = ((!g1 && g0) ||(g1 && !g0));
		
		var a = ((!g3xorg2 && g0xorg1)|| (g3xorg2 && !g0xorg1))					
		var b = ((!g3xorg2 && g1 )||(g3xorg2 && !g1))
		var c = g3xorg2;
		var d = g3;
		
		
		
		var b1 = (((a)?1:0) * 1) + (((b)?1:0) * 2) + (((c)?1:0) * 4) + (((d)?1:0) * 8);
		$("#b_graytobinary").html(b1);
		var g = (((g0)?1:0) * 1) + (((g1)?1:0) * 2) + (((g2)?1:0) * 4) + (((g3)?1:0) * 8);
		$("#g_graytobinary").html(g);
		
		if(a ==true)
		document.getElementById("b0_gtob").src = "lightbulb1left.png"
		else
		document.getElementById("b0_gtob").src = "lightbulbleft.png"
		if(b ==true)
		document.getElementById("b1_gtob").src = "lightbulb1left.png"
		else
		document.getElementById("b1_gtob").src = "lightbulbleft.png"
		if(c ==true)
		document.getElementById("b2_gtob").src = "lightbulb1left.png"
		else
		document.getElementById("b2_gtob").src = "lightbulbleft.png"
		if(d ==true)
		document.getElementById("b3_gtob").src = "lightbulb1left.png"
		else
		document.getElementById("b3_gtob").src = "lightbulbleft.png"
	}
	
}
var bcdtoexcess = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.calculate = function () {
		var b0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var b1 = (this.switches[1].status!= null)? this.switches[1].status : false;
		var b2 = (this.switches[2].status!= null)? this.switches[2].status : false;
		var b3 = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		if(b > 9) {
			$("#b_bcdtoexcess").html(b);
			$("#e_bcdtoe3").html(0);
			alert("Invalid Value");
			document.getElementById("e0_bcdtoe3").src = "lightbulbleft.png";
			document.getElementById("e1_bcdtoe3").src = "lightbulbleft.png";
			document.getElementById("e2_bcdtoe3").src = "lightbulbleft.png";
			document.getElementById("e3_bcdtoe3").src = "lightbulbleft.png";
			return;
		}
		
		var e = b+3;
		var e_binary = utility.decimalToBinary(e);
		var eArray = e_binary.toString().split("");
		
		$("#b_bcdtoexcess").html(b);
		$("#e_bcdtoe3").html(e);
		
		document.getElementById("e0_bcdtoe3").src = eArray[3] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("e1_bcdtoe3").src = eArray[2] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("e2_bcdtoe3").src = eArray[1] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("e3_bcdtoe3").src = eArray[0] == true ? "lightbulb1left.png" : "lightbulbleft.png";	
	}
}
var excesstobcd = function()
{
this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
	{
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "on.png"
			var json = {"name" :id,"status" : true };
			this.switches[index]=json
		} else {
			document.getElementById(id).src = "off.png"
			var json = {"name" :id,"status" : false };
			this.switches[index] = json
		}
		var scope = this
		scope.calculate()
	}
	this.calculate = function () {
		var w = (this.switches[0].status != null)? this.switches[0].status : false; 
		var x = (this.switches[1].status!= null)? this.switches[1].status : false;
		var y = (this.switches[2].status!= null)? this.switches[2].status : false;
		var z = (this.switches[3].status!= null)? this.switches[3].status : false;
		
		var e = (((w)?1:0) * 1) + (((x)?1:0) * 2) + (((y)?1:0) * 4) + (((z)?1:0) * 8);
		if(e == 0 || e == 1 || e == 2 || e == 13 || e == 14 || e ==15) {
			$("#e_excesstobcd").html(e);
			$("#b_excesstobcd").html(0);
			document.getElementById("b0_excesstobcd").src =  "lightbulbleft.png";
			document.getElementById("b1_excesstobcd").src =  "lightbulbleft.png";
			document.getElementById("b2_excesstobcd").src =  "lightbulbleft.png";
			document.getElementById("b3_excesstobcd").src =  "lightbulbleft.png";
			alert("Invalid Value");
			return
		}
		
		var b = e-3;
		var b_binary = utility.decimalToBinary(b);
		var bArray = b_binary.toString().split("");
		var bArray = b_binary.toString().split("");

		$("#e_excesstobcd").html(e);
		$("#b_excesstobcd").html(b);
		
		document.getElementById("b0_excesstobcd").src =  bArray[3] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("b1_excesstobcd").src =  bArray[2] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("b2_excesstobcd").src =  bArray[1] == true ? "lightbulb1left.png" : "lightbulbleft.png";
		document.getElementById("b3_excesstobcd").src =  bArray[0] == true ? "lightbulb1left.png" : "lightbulbleft.png";		
	}
	
}
var binarycounter = function()
{
	this.cbc;
	var time;
	var x,bin = [],counter = 0;;
	this.init = function(){
	}
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function() {
		var localCounter = this.counter;
		if(typeof(this.counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bc").text(localCounter);
		if(b[0] ==true)
			document.getElementById("b3_binary_counter").src = "lightbulb1_up.png"
		else
			document.getElementById("b3_binary_counter").src = "lightbulb_up.png"
		if(b[1] ==true)
			document.getElementById("b2_binary_counter").src = "lightbulb1_up.png"
		else
			document.getElementById("b2_binary_counter").src = "lightbulb_up.png"
		if(b[2] ==true)
			document.getElementById("b1_binary_counter").src = "lightbulb1_up.png"
		else
			document.getElementById("b1_binary_counter").src = "lightbulb_up.png"
		if(b[3] ==true)
			document.getElementById("b0_binary_counter").src = "lightbulb1_up.png"
		else
			document.getElementById("b0_binary_counter").src = "lightbulb_up.png"
		localCounter++;
		if(localCounter == 16)
			localCounter = 0;
		this.counter = localCounter;
	}
	var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		
		time = setInterval(scope.updatecounter, ((this.cbc)*10));
	}
}
var bcdcounter = function()
{
	this.cbcd;
	var x,bin = [],counter = 0;
	var time;
	this.init = function(){
		for(var i=0;i<10;i++)
			bin[i] = i.toString(2);
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var localCounter = this.counter;
		if(typeof(this.counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bcd").text(localCounter);
		if(b[0] ==true)
		document.getElementById("b3_bcd_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b3_bcd_counter").src = "lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b2_bcd_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b2_bcd_counter").src = "lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b1_bcd_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b1_bcd_counter").src = "lightbulb_up.png"
		if(b[3] ==true)
		document.getElementById("b0_bcd_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b0_bcd_counter").src = "lightbulb_up.png"
		localCounter++;
		if(localCounter == 10)
			localCounter = 0;
		this.counter = localCounter;
	}
	var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cbcd)*10));
	}
}
var johncounter = function()
{
	this.cjohn;
	var x,bin = [],counter = 0;
	var time;
	var data = new Array("1000","1100","1110","1111","0111","0011","0001","0000");
	this.init = function(){
	
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var b = data[counter].split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		if(b[3] ==true)
		document.getElementById("b3_john_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b3_john_counter").src = "lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b2_john_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b2_john_counter").src = "lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b1_john_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b1_john_counter").src = "lightbulb_up.png"
		if(b[0] ==true)
		document.getElementById("b0_john_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b0_john_counter").src = "lightbulb_up.png"
		counter++;
		if(counter == 8)
			counter = 0;
		return
	}
var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cjohn)*10));
	}
}
var ringcounter = function()
{
	this.cring;
	var x,bin = [],counter = 0;
	var time;
	var data = new Array("0000","0001","0010","0100", "1000" , "0001", "0010","0100", "1000");
	this.init = function(){
		for(var i=0;i<data.length;i++)
			bin[i] = data[i].toString(2);
		//alert(bin)
	}
	
	this.destruct = function(){
		clearInterval(time);
		time = ""
	}
	this.updatecounter = function()
	{	
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		
		if(b[3] ==true)
		document.getElementById("b0_ring_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b0_ring_counter").src = "lightbulb_up.png"
		if(b[2] ==true)
		document.getElementById("b1_ring_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b1_ring_counter").src = "lightbulb_up.png"
		if(b[1] ==true)
		document.getElementById("b2_ring_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b2_ring_counter").src = "lightbulb_up.png"
		if(b[0] ==true)
		document.getElementById("b3_ring_counter").src = "lightbulb1_up.png"
		else
		document.getElementById("b3_ring_counter").src = "lightbulb_up.png"
		counter++;
		if(counter == data.length)
			counter = 0;
		return
	}
var scope = this;
	this.startcounter = function(){
		//scope.updatecounter();
		time = setInterval(scope.updatecounter, ((this.cring)*10));
	}
}
var alu_logic = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<14;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.toggleBits=function( dec ){
    var mask = 0xFFFFFFF;
    return ( dec ^ mask ).toString(2).match( RegExp( "[01]{"+(dec.toString(2).length)+"}$" ) )[0];
	}

	
	this.deciToBin = function(arg)
{
	res1 = 999;
	args = arg;
	while(args>1)
	{
		arg1 = parseInt(args/2);
		arg2 = args%2;
		args = arg1;
		if(res1 == 999)
		{
			res1 = arg2.toString();
		}
		else
		{
			res1 = arg2.toString()+res1.toString();
		}
	}
	if(args == 1 && res1 != 999)
	{
		res1 = args.toString()+res1.toString();
	}
	else if(args == 0 && res1 == 999)
	{
		res1 = 0;
	}
	else if(res1 == 999)
	{
		res1 = 1;
	}
	var ll = res1.length;
	while(ll%4 != 0)
	{
		res1 = "0"+res1;
		ll = res1.length;
	}	
	return res1;
}
	
	this.neg =  function (val)
	{ //alert("val: "+val);
		var x = Math.pow(2,4);
		//alert("x :"+x);
		var ans = ((x-1)-val);
		//alert("ans :"+ans);
		return ans;
		
	}
	var that = this;
	this.calculate = function ()
	{
		//for input A
		var a0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a2 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a3 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b1 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b2 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b3 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
			
		//for select lines
		var s0 = (this.switches[8].status != null)? this.switches[8].status : false; 
		var s1 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s2 = (this.switches[10].status != null)? this.switches[10].status : false; 
		var s3 = (this.switches[11].status != null)? this.switches[11].status : false; 

		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		var a_bar = utility.computeOnesComplement(a);
		var b_bar = utility.computeOnesComplement(b);
		
		if(!s3 && !s2 && !s1 && !s0) {
			y = a_bar
		} else if(!s3 && !s2 && !s1 && s0) {
			y = utility.computeOnesComplement(utility.BinaryAddition(a, b));
		} else if(!s3 && !s2 && s1 && !s0) {
			y = utility.BinaryMultiplication(a_bar, b);
		} else if(!s3 && !s2 && s1 && s0) {
			y = "0000";
		} else if(!s3 && s2 && !s1 && !s0) {
			y = utility.computeOnesComplement(utility.BinaryMultiplication(a, b));
		} else if(!s3 && s2 && !s1 && s0) {
			y = b_bar;
		} else if(!s3 && s2 && s1 && !s0) {
			y = utility.BinaryXOR(a, b);
		} else if(!s3 && s2 && s1 && s0) {
			y = utility.BinaryMultiplication(a, b_bar);
		} else if(s3 &&  !s2 && !s1 && !s0) {
			y = utility.BinaryAddition(a_bar, b);
		} else if(s3 &&  !s2 && !s1 && s0) {
			y = utility.computeOnesComplement(utility.BinaryXOR(a, b));
		} else if(s3 &&  !s2 && s1 && !s0) {
			y = b;
		} else if( s3 &&  !s2 && s1 && s0) {
			y = utility.BinaryMultiplication(a, b);
		} else if(s3 &&  s2 && !s1 && !s0) {
			y = "1111";
		} else if(s3 &&  s2 && !s1 && s0) {
			y = utility.BinaryAddition(a, b_bar);
		} else if(s3 &&  s2 && s1 && !s0) {
			y = utility.BinaryAddition(a, b);
		} else if(s3 &&  s2 && s1 && s0) {
			y = a;
		}
		var y_bin = y.toString().split("");
		$("#a_l").html("A: "+a);
		$("#b_l").html("B: "+b);
		$("#y_l").html("Y: "+y);

		document.getElementById("y3_alu_logic").src = y_bin[0] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y2_alu_logic").src = y_bin[1] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y1_alu_logic").src = y_bin[2] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y0_alu_logic").src = y_bin[3] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
	}
}



var alu_arithmetic = function()
{

	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<14;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		scope.calculate()
	}
	this.toggleBits=function( dec ){
    var mask = 0xFFFFFFF;
    return ( dec ^ mask ).toString(2).match( RegExp( "[01]{"+(dec.toString(2).length)+"}$" ) )[0];
	}
	
		this.neg1 =  function (val)
	{ //alert("val: "+val);
		var x = Math.pow(2,4);
		//alert("x :"+x);
		var ans = ((x-1)-val);
		//alert("ans :"+ans);
		return ans;
		
	}
	
	this.deciToBin1 = function(arg)
{
	res1 = 999;
	args = arg;
	while(args>1)
	{
		arg1 = parseInt(args/2);
		arg2 = args%2;
		args = arg1;
		if(res1 == 999)
		{
			res1 = arg2.toString();
		}
		else
		{
			res1 = arg2.toString()+res1.toString();
		}
	}
	if(args == 1 && res1 != 999)
	{
		res1 = args.toString()+res1.toString();
	}
	else if(args == 0 && res1 == 999)
	{
		res1 = 0;
	}
	else if(res1 == 999)
	{
		res1 = 1;
	}
	var ll = res1.length;
	while(ll%4 != 0)
	{
		res1 = "0"+res1;
		ll = res1.length;
	}	
	return res1;
}


	var that = this;
	this.calculate = function () {
		//for input A
		var a0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a2 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a3 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b1 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b2 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b3 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);

		//for select lines
		var s0 = (this.switches[8].status != null)? this.switches[8].status : false; 
		var s1 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s2 = (this.switches[10].status != null)? this.switches[10].status : false; 
		var s3 = (this.switches[11].status != null)? this.switches[11].status : false;

		//for mode in cin
		var mode = (this.switches[12].status != null)? this.switches[12].status : false; 
		var cin = (this.switches[13].status != null)? this.switches[13].status : false;
		
		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		
		var a_bar = utility.computeOnesComplement(a);
		var b_bar = utility.computeOnesComplement(b);
		
		var AB = utility.BinaryMultiplication(a, b);
		var ABBar = utility.BinaryMultiplication(a, b_bar);

		//A+B
		var AplusBlogical = utility.BinaryAddition(a, b);
		//A+BBar
		var AplusBBarlogical = utility.BinaryAddition(a, b_bar);
	
		/** Arithmetic operations*/
		if(cin == true) { /* with carry*/
			if(!s3 && !s2 && !s1 && !s0) {
				y = {number: a, carry: 0};
			} else if(!s3 && !s2 && !s1 && s0) {
				y = {number: AplusBlogical, carry: 0};
			} else if(!s3 && !s2 && s1 && !s0) {
				y = {number: AplusBBarlogical, carry: 0};
			} else if(!s3 && !s2 && s1 && s0) {
				y = {number: utility.computeTwosComplement("0001"), carry: 0};
			} else if(!s3 && s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, ABBar);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, ABBar);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && !s0) {
				var res1 = utility.ArithmaticAddition(a, utility.computeTwosComplement(b));
				var result = utility.ArithmaticAddition(res1.number, utility.computeTwosComplement("0001"), res1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(ABBar, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, AB);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(a, b);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, AB);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(AB, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} else if(s3 && s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, a_bar);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, a);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, a);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(a, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} 
		} else { /* no carry*/
			if(!s3 && !s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && s1 && s0) {
				y = {number: "0000", carry: 0};
			} else if(!s3 && s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, ABBar);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(AplusBlogical, ABBar);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(a, utility.computeTwosComplement(b));
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && s0) {
				y = {number: ABBar, carry: 0};
			} else if(s3 &&  !s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, AB);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(a, b);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && !s0) {
				var result1 = utility.ArithmaticAddition(AplusBBarlogical, AB);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && s0) {
				y = {number: AB, carry: 0};
			} else if(s3 && s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(AplusBlogical, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && !s0) {
				var result1 = utility.ArithmaticAddition(AplusBBarlogical, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && s0) {
				y = {number: a, carry: 0};
			}
		}
		var bin = y.number;
		var carry = y.carry;
		var y_bin = bin.toString().split("");
		$("#a_a").html("A: "+a);
		$("#b_a").html("B: "+b);
		$("#y_arith").val(bin);
		document.getElementById("y3_alu_arithmetic").src = y_bin[0] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y2_alu_arithmetic").src = y_bin[1] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y1_alu_arithmetic").src = y_bin[2] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y0_alu_arithmetic").src = y_bin[3] == true ? "lightbulb1_up.png" : "lightbulb_up.png";
		document.getElementById("y_alu_carry").src = (carry == "1" ? "lightbulb1_up.png" : "lightbulb_up.png");		
	}
}
var encoder = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var d1 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var d2  = (this.switches[1].status != null)? this.switches[1].status : false; 
		var d3  =(this.switches[2].status != null)? this.switches[2].status : false; 
		var d4  = (this.switches[3].status != null)? this.switches[3].status : false; 
		var d5 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var d6  = (this.switches[5].status != null)? this.switches[5].status : false; 
		var d7  = (this.switches[6].status != null)? this.switches[6].status : false; 
		var d8  =(this.switches[7].status != null)? this.switches[7].status : false; 
		
		var A0 = d1
		var A1 = d2 || d4 || d6 ||d8	
		var A2 = d3 || d4 || d7 ||d8
		var A3 = d5 || d6 || d7 || d8
		$("#d_encoder").html((d1?1:0)+""+(d2?1:0)+""+(d3?1:0)+""+(d4?1:0)+""+(d5?1:0)+""+(d6?1:0)+""+(d7?1:0)+""+(d8?1:0));
		$("#a_encoder").html((A3?1:0)+""+(A2?1:0)+""+(A1?1:0));
		if(A0 ==true)
		document.getElementById("a0_encoder").src = "lightbulb1left.png"
		else
		document.getElementById("a0_encoder").src = "lightbulbleft.png"
		if(A1 ==true)
		document.getElementById("a1_encoder").src = "lightbulb1left.png"
		else
		document.getElementById("a1_encoder").src = "lightbulbleft.png"
		if(A2 ==true)
		document.getElementById("a2_encoder").src = "lightbulb1left.png"
		else
		document.getElementById("a2_encoder").src = "lightbulbleft.png"
		if(A3 ==true)
		document.getElementById("a3_encoder").src = "lightbulb1left.png"
		else
		document.getElementById("a3_encoder").src = "lightbulbleft.png"
	}
}
var decoder = function()
{
	
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		//$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var s0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var s1  = (this.switches[1].status != null)? this.switches[1].status : false; 
		var s2  = (this.switches[2].status != null)? this.switches[2].status : false; 
		
		var q0 = !s2 && !s1 && !s0
		var q1 = !s2 && !s1 && s0
		var q2 = !s2 && s1 && !s0
		var q3 = !s2 && s1 && s0
		var q4 = s2 && !s1 && !s0
		var q5 = s2 && !s1 && s0
		var q6 = s2 && s1 && !s0
		var q7 = s2 && s1 && s0
		$("#s_decoder").html((s2?1:0)+""+(s1?1:0)+""+(s0?1:0));
		$("#q_decoder").html((q0?1:0)+""+(q1?1:0)+""+(q2?1:0)+""+(q3?1:0)+""+(q4?1:0)+""+(q5?1:0)+""+(q6?1:0)+""+(q7?1:0));		
		if(q0 ==true)
		document.getElementById("q0_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q0_decoder").src = "lightbulbleft.png"
		if(q1 ==true)
		document.getElementById("q1_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q1_decoder").src = "lightbulbleft.png"
		if(q2 ==true)
		document.getElementById("q2_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q2_decoder").src = "lightbulbleft.png"
		if(q3 ==true)
		document.getElementById("q3_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q3_decoder").src = "lightbulbleft.png"
		if(q4 ==true)
		document.getElementById("q4_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q4_decoder").src = "lightbulbleft.png"
		if(q5 ==true)
		document.getElementById("q5_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q5_decoder").src = "lightbulbleft.png"
		if(q6 ==true)
		document.getElementById("q6_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q6_decoder").src = "lightbulbleft.png"
		if(q7 ==true)
		document.getElementById("q7_decoder").src = "lightbulb1left.png"
		else
		document.getElementById("q7_decoder").src = "lightbulbleft.png"
	}
}
var multiplexer  = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<11;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
		var i0 =(this.switches[0].status != null)? this.switches[0].status : false; 
		var i1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var i2 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var i3 =(this.switches[3].status != null)? this.switches[3].status : false; 
		var i4 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var i5 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var i6 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var i7 =(this.switches[7].status != null)? this.switches[7].status : false; 
		var s0 = (this.switches[8].status != null)? this.switches[8].status : false; 
		var s1 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s2 = (this.switches[10].status != null)? this.switches[10].status : false; 
			
		var y = (i0 && !s1 && !s0 && !s2) || (i1 && !s1 && s0 && !s2) || (i2 && s1 && !s0 && !s2) || (i3 && s1 && s0 && !s2) ||
					(i4 && !s1 && !s0 && s2)|| (i5 && !s1 && s0 && s2) || (i6 && s1 && !s0 && s2) || (i7 && s1 && s0 && s2)
		$("#s_mul").html((s0?1:0)+""+(s1?1:0)+""+(s2?1:0));
		$("#i_mul").html((i0?1:0)+""+(i1?1:0)+""+(i2?1:0)+""+(i3?1:0)+""+(i4?1:0)+""+(i5?1:0)+""+(i6?1:0)+""+(i7?1:0));		
		$("#yout_mul").html(y?1:0)
		if(y ==true)
		document.getElementById("y_mul").src = "lightbulb1left.png"
		else
		document.getElementById("y_mul").src = "lightbulbleft.png"
		
	}
}
var demultiplexer = function()
{
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id,index)
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
		
		var	scope = this
		scope.calculate();
	}
	this.calculate = function ()
	{
			var i = (this.switches[0].status != null)? this.switches[0].status : false; 
			var s0 = (this.switches[1].status != null)? this.switches[1].status : false; 
			var s1 = (this.switches[2].status != null)? this.switches[2].status : false; 
			var s2 =(this.switches[3].status != null)? this.switches[3].status : false; 
			
			var q0 = (i && !s1 && !s0 && !s2)
			var q1 = (i && !s1 && s0 && !s2 )
			var q2 = (i && s1 && !s0 && !s2 )
			var q3 = (i && s1 && s0 && !s2) 
			var q4 = (i && !s1 && !s0 && s2)
			var q5 = (i && !s1 && s0 && s2 )
			var q6 = (i && s1 && !s0 && s2 )
			var q7 = (i && s1 && s0 && s2) 
	
		$("#q_demul").html((q0?1:0)+""+(q1?1:0)+""+(q2?1:0)+""+(q3?1:0)+""+(q4?1:0)+""+(q5?1:0)+""+(q6?1:0)+""+(q7?1:0));		
		$("#in_demul").html((s0?1:0)+""+(s1?1:0)+""+(s2?1:0))
		
		if(q0 ==true)
		document.getElementById("q0_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q0_demul").src = "lightbulbleft.png"
		if(q1 ==true)
		document.getElementById("q1_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q1_demul").src = "lightbulbleft.png"
		if(q2 ==true)
		document.getElementById("q2_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q2_demul").src = "lightbulbleft.png"
		if(q3 ==true)
		document.getElementById("q3_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q3_demul").src = "lightbulbleft.png"
		if(q4 ==true)
		document.getElementById("q4_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q4_demul").src = "lightbulbleft.png"
		if(q5 ==true)
		document.getElementById("q5_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q5_demul").src = "lightbulbleft.png"
		if(q6 ==true)
		document.getElementById("q6_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q6_demul").src = "lightbulbleft.png"
		if(q7 ==true)
		document.getElementById("q7_demul").src = "lightbulb1left.png"
		else
		document.getElementById("q7_demul").src = "lightbulbleft.png"
		
	}

}
var binaryweighted = function()
{
	 this.switches = [];
	 this.id ;
	 this.v0;
	 this.vr; this.rf; this.r;
	 var k;
	 var loc = [];
	 
	 this.initialize = function()
	 {
		
		for(var i=0;i<8;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
		$("#outputbinary").text("V0 : ")
		
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
            
		//this.v0 = (this.vr * this.rf/this.r) * (b7/1 + b6/2 + b5/4 + b4/8 + b3/16 + b2/32 + b1/64 + b0/128)
            
           this.v0 = ( this.vr * this.r ) * ( ( b7 / (1 * this.r) ) + ( b6 / (2 * this.r) ) + ( b5 / (4 * this.r) )  + ( b4 / (8 * this.r) ) + ( b3 / (16 * this.r) ) + ( b2 / (32 * this.r) ) + ( b1 / (64 * this.r) ) + ( b0 / (128 * this.r ) ) )
            
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
	{
		var d1 = [];
		var omega = 2 * Math.PI * 10 ; 
		for (var i = 0; i <= 0.1; i += 0.001  )
        d1.push([i, this.v0* Math.sin((i * omega))]);
		
		//alert(d1)
		$.plot($("#graph"), [
        { label: "",  data: d1 }
     ], {
           grid: {
            backgroundColor: { colors: ["#000", "#000"] , }
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
		this.v0 = ( ( this.vr * this.rf ) / this.r ) * ( b0 * (1/128) + b1* (1/64) + b2  * (1/32) + b3 * (1/16) + b4 * (1/8) + b5 * (1/4) + b6 * (1/2) + b7 * (1/1) );
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
	{
		var d1 = [];
		var omega = 2 * Math.PI * 10 ; 
		for (var i = 0; i <= 0.1; i += 0.001  )
        d1.push([i, this.v0* Math.sin((i * omega))]);
		 $.plot($("#graph_r2r"), [
        { label: "",  data: d1} ] , {
           grid: {
            backgroundColor: { colors: ["#000", "#000"] , }
        }
    });
	
	}
	this.drawdiagram=function()
	{
		//console.log("in")
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
		]);
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
        }] , {
           grid: {
            backgroundColor: { colors: ["#000", "#000"] , }
        }
    });
	}
}
var resolution = function()
{
	this.bit;
	this.noofbits;
	var d1 = [];
	var datax = [] , datay = []
	var output= 0;
	var diffrence;
	var i=0;j=0;
	var graph;
	var total = 256;
	var flag;
	var j =0; ;
	var loop= 0;
	var i = loop ;
			
	this.init = function()
	{
		var scope = this;
		//alert("bit  "+this.bit);
		this.noofbits = Math.pow(2,this.bit);
		//alert("bit  "+this.noofbits);
		diffrence = 256/this.noofbits;
		$("#diffrence_res").html(diffrence);
	}
	this.updategraph = function()
	{
		
		var options = {
				yaxes: { min: 0, max: 260 },
				xaxes: { min: 0, max: 505 ,autoscaleMargin :true		},
				grid: {
				backgroundColor: { colors: ["#000", "#000"] }
				}
				
			}
		graph = $.plot($("#res_graph"), [ {data : "" }],options)
	}	
	//it will iterate to all the x values and increase j when x is equal to datay[j]
	this.getinfo = function()
	{
				//that.init();
		while(output<=total){
			datay.push(output)
			output = output + diffrence ;
			$("#output_res").html(output)
		}	
		while (i < total)
		{
			$("#output_res").html(i)
			d1.push([ i, datay[j]]);
			graph.setData([d1]);
			graph.draw();						
						
			if(i == datay[j+1] ||(i-loop)== datay[j+1]  )
				j++;
			i++
						
		}
		d1.push([total,0])
		graph.setData([d1]);
		graph.draw();
		loop = total
		total = total+255;
		j=0;
		datay.length == 0;
		return d1;
	}
 }
var Monostable = function()
{
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
	var click , clickout,clickcap;
	this.set = function(){
	alert(1)
		click =true; 
			clickcap = true;
			clickout = true
		
	}
	this.calculate_ontime  = function()
	{
		alert(2)
		this.t = (1.1 * (this.r * Math.pow(10,3)) * (this.c *  Math.pow(10 ,-6)))
		$("#ontime").html(this.t.toFixed(2))
		ontime = this.t.toFixed(2)
		alert(ontime)
	}
	//Data for trigger graph
		var TriggerPlotData = function () {
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
			$("#output_mon").html(capcount.toFixed(2));
			capdata.push(capcount)
			capcount = capcount+0.1;		
			//console.log(capcount.toFixed(2))
			capsecondTOHandler = setTimeout(capacitanceplot, 90);
			
		}
		else	{
		document.getElementById("output_img_mon").src = "outputon.png";
		return }
	}
		var capacitorPlotData = function() {
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
		var  outputplot = function (){
	if(outputcount<=ontime )
		{	
			$("#output").html(outputcount.toFixed(2));
			outdata.push(ontime)
			outputcount = outputcount+0.1;		
			secondtimeout_handler = setTimeout(outputplot, 90);
			
		}
		else{
			document.getElementById("output_img_mon").src = "outputon.png";
			return 
		}
			
	}
		var outputPlotData = function() {
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
} 
 //initliaze the Adder
 
 $(document).ready(function(){ 
	
	$("ul.tabs").tabs("> .pane");
		
	$(":range").rangeinput({  progress: true });
		
	//objects
		var obj_halfadder = new halfadder();
		var obj_fulladder = new fulladder();
		var obj_bitadder = new bitadder();
		var obj_bitaddersubtracter = new bitaddersubtracter();
		var obj_r2r = new r2rLadder();
		var obj = new binaryweighted();
		var obj_a2d = new analog_to_digital();
		var obj_res = new resolution();
		var obj_binarycounter = new binarycounter();
		var obj_bcdcounter = new bcdcounter();
		var obj_johncounter = new johncounter();
		var obj_ringcounter = new ringcounter();
		var obj_alu_arithmetic = new alu_arithmetic();
		var obj_alu_logic = new alu_logic();
		var obj_binarytogray  = new binarytogray();
		var obj_graytobinary = new graytobinary();
		var obj_bcdtoexcess = new  bcdtoexcess()
		var obj_excesstobcd = new excesstobcd();
		var obj_encoder = new encoder();
		var obj_decoder = new decoder();
		var obj_multiplexer = new multiplexer();
		var obj_demultiplexer = new demultiplexer();
		var obj_halfsubtracter = new halfsubtracter();
		var obj_fullsubtracter = new fullsubtracter();
		
		//var obj_mono = new Monostable();
		
	//halfadder
	{
		obj_halfadder.initialize();
		$(function(){
		$("#a").click( function(){
		obj_halfadder.switch_status("a",0)
		})
		$("#b").click( function(){
		obj_halfadder.switch_status("b",1)
		})
	});
	}
	//fulladder
	{
		obj_fulladder.initialize();
		$(function(){
		$("#button1_fa").click( function(){
		obj_fulladder.switch_status("button1_fa",0)
		})
		$("#button2_fa").click( function(){
		obj_fulladder.switch_status("button2_fa",1)
		})
		$("#button3_fa").click( function(){
		obj_fulladder.switch_status("button3_fa",2)
		})
		});
	}
	//2bitadder
	{
	obj_bitadder.initialize();
	
	$(function(){
		
		$("#button1_2bit").click( function(){
		obj_bitadder.switch_status("button1_2bit",0)
		})
		$("#button2_2bit").click( function(){
		obj_bitadder.switch_status("button2_2bit",1)
		})
		$("#button3_2bit").click( function(){
		obj_bitadder.switch_status("button3_2bit",2)
		})
		$("#button4_2bit").click( function(){
		obj_bitadder.switch_status("button4_2bit",3)
		})
            $("#button5_2bit").click( function(){
		obj_bitadder.switch_status("button5_2bit",4)
		})
		
	});
	
 	}	
	//halfsubtracter
	{
		obj_halfsubtracter.initialize();
		$(function(){
		$("#button1_halfsub").click( function(){
		obj_halfsubtracter.switch_status("button1_halfsub",0)
		})
		$("#button2_halfsub").click( function(){
		obj_halfsubtracter.switch_status("button2_halfsub",1)
		})
		})
	}
	//fullsubtracter
	{
		obj_fullsubtracter.initialize();
		$(function(){
		$("#button1_fullsub").click( function(){
		obj_fullsubtracter.switch_status("button1_fullsub",0)
		})
		$("#button2_fullsub").click( function(){
		obj_fullsubtracter.switch_status("button2_fullsub",1)
		})
		$("#button3_fullsub").click( function(){
		obj_fullsubtracter.switch_status("button3_fullsub",2)
		})
		});
	
	}
	//addersubtracter
	{
		obj_bitaddersubtracter.initialize();
		$(function(){
		$("#b3_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("b3_4bit",7)
		})
		$("#a3_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("a3_4bit",6)
		})
		$("#b2_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("b2_4bit",5)
		})
		$("#a2_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("a2_4bit",4)
		})
		$("#b1_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("b1_4bit",3)
		})
		$("#a1_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("a1_4bit",2)
		})
		$("#b0_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("b0_4bit",1)
		})
		$("#a0_4bit").click( function(){
		obj_bitaddersubtracter.switch_status("a0_4bit",0)
		})
		$("#cout").click( function(){
		obj_bitaddersubtracter.switch_status("cout",8)
		})
		
		});
	}
	//binaryweighted	
	{
		obj.initialize();
		obj.diagram();
		$(function(){
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
			obj.setbinaryweighted();});
			$("#rf").change(function(){
			obj.rf = $("#rf").val(); 
			obj.setbinaryweighted();   });
			$("#r").change(function(){
			obj.r = $("#r").val(); 
			obj.setresistors();
			obj.setbinaryweighted();
			});
		})
	}
	//r2r ladder
	{
		obj_r2r.initialize();
		obj_r2r.drawdiagram();
		$(function(){
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
		})
	}
	//analog to digital
	{
	
	$(function(){
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
	})
	}
	//resolution
	{
		$("#bit").change(function(){ obj_res.bit = $("#bit").val() ;
		obj_res.init();
		obj_res.updategraph();
		var reloading = function(){
		 $.plot($("#res_graph"), [ obj_res.getinfo() ] , obj_res.options);
			 setTimeout(reloading, 500)
			}
		reloading();
			})
	}
	/*monostable
	{
	
			$("#power").click(function(){
			window.setTimeout(function(){
			document.getElementById("power").src = "on.png";
			},200)
			document.getElementById("power").src = "off.png"
			//call the function which resetes the value
			});
		
		$("#trigger").mouseup(function(){
			document.getElementById("trigger").src = "trigger_on.png";
			document.getElementById("output_img_mon").src = "outputoff.png";
			//call plot function to plot for trigger
				obj_mono.set();
			
			});
		$("#trigger").mousedown(function(){
			document.getElementById("trigger").src = "trigger_off.png";
			
			})
		$(function(){	
		
			//getting the slider values
			$("#r").change(function(){
				obj_mono.r = $("#r").val() ; 
				obj_mono.calculate_ontime();});
			$("#c").change(function(){
				obj_mono.c = $("#c").val() ;
				obj_mono.calculate_ontime();			});
				$("#start_mono").click(function(){
				//	obj_mono.updateTrigger();
				//obj_mono.updateCapacitance();
				//obj_mono.updateoutput();
				})
			
		});
	}*/
	//binary counter
	{
	$("#start_bc").click(function(){
		obj_binarycounter.init();
		obj_binarycounter.startcounter();
		});
	$("#cbc").change(function(){
			obj_binarycounter.cbc = ($("#cbc").val()) ;
			});
	$("#stop_bc").click(function(){
		obj_binarycounter.destruct();
		});
	}
	//bcd counter
	{
	obj_bcdcounter.init();
	$("#start_bcd").click(function(){
		obj_bcdcounter.init();
		obj_bcdcounter.startcounter();
		});
	$("#cbcdc").change(function(){
			obj_bcdcounter.cbcd = ($("#cbcdc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_bcd").click(function(){
		obj_bcdcounter.destruct();
		});
	}
	//johnasen counter
	{
		obj_johncounter.init();
	$("#start_john").click(function(){
		obj_johncounter.init();
		obj_johncounter.startcounter();
		});
	$("#cjohnc").change(function(){
			obj_johncounter.cjohn = ($("#cjohnc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_john").click(function(){
		obj_johncounter.destruct();
		});
	}
	//ring counter
	{
		//obj_ringcounter.init();
	$("#start_ring").click(function(){
		//obj_ringcounter.init();
		obj_ringcounter.startcounter();
		});
	$("#cringc").change(function(){
			obj_ringcounter.cring = ($("#cringc").val()) ;
			//alert(obj_bcdcounter.cbcd)
			})
	$("#stop_ring").click(function(){
		obj_ringcounter.destruct();
		});
	}
	//alu_arithmetic
	{
		obj_alu_arithmetic.initialize();
		$(function(){
		$("#cn_a").click( function(){
		obj_alu_arithmetic.switch_status("cn_a",13)
		})
		$("#a3_a").click( function(){
		obj_alu_arithmetic.switch_status("a3_a",3)
		})
		$("#a2_a").click( function(){
		obj_alu_arithmetic.switch_status("a2_a",2)
		})
		$("#a1_a").click( function(){
		obj_alu_arithmetic.switch_status("a1_a",1)
		})
		$("#a0_a").click( function(){
		obj_alu_arithmetic.switch_status("a0_a",0)
		})
		$("#b3_a").click( function(){
		obj_alu_arithmetic.switch_status("b3_a",7)
		})
		$("#b2_a").click( function(){
		obj_alu_arithmetic.switch_status("b2_a",6)
		})
		$("#b1_a").click( function(){
		obj_alu_arithmetic.switch_status("b1_a",5)
		})
		$("#b0_a").click( function(){
		obj_alu_arithmetic.switch_status("b0_a",4)
		})
		$("#s3_a").click( function(){
		obj_alu_arithmetic.switch_status("s3_a",11)
		})
		$("#s2_a").click( function(){
		obj_alu_arithmetic.switch_status("s2_a",10)
		})
		$("#s1_a").click( function(){
		obj_alu_arithmetic.switch_status("s1_a",9)
		})
		$("#s0_a").click( function(){
		obj_alu_arithmetic.switch_status("s0_a",8)
		})		
		
		});
	}
	//alu_logic
	{
		obj_alu_logic.initialize();
		$(function(){
		$("#cn_l").click( function(){
		obj_alu_logic.switch_status("cn_l",0);
		});
		$("#a3_l").click( function(){;
		obj_alu_logic.switch_status("a3_l",3);
		});
		$("#a2_l").click( function(){
		obj_alu_logic.switch_status("a2_l",2)
		});
		$("#a1_l").click( function(){
		obj_alu_logic.switch_status("a1_l",1)
		});
		$("#a0_l").click( function(){
		obj_alu_logic.switch_status("a0_l",0)
		});
		$("#b3_l").click( function(){
		obj_alu_logic.switch_status("b3_l",7)
		});
		$("#b2_l").click( function(){
		obj_alu_logic.switch_status("b2_l",6)
		});
		$("#b1_l").click( function(){
		obj_alu_logic.switch_status("b1_l",5)
		});
		$("#b0_l").click( function(){
		obj_alu_logic.switch_status("b0_l",4)
		});
		$("#s3_l").click( function(){
		obj_alu_logic.switch_status("s3_l",11)
		});
		$("#s2_l").click( function(){
		obj_alu_logic.switch_status("s2_l",10)
		});
		$("#s1_l").click( function(){
		obj_alu_logic.switch_status("s1_l",9)
		});
		$("#s0_l").click( function(){
		obj_alu_logic.switch_status("s0_l",8)
		});
		});
	}
	//binarytogray
	{
		obj_binarytogray.initialize();
		$(function(){
		$("#b0_btog").click( function(){
		obj_binarytogray.switch_status("b0_btog",0)
		})
		$("#b1_btog").click( function(){
		obj_binarytogray.switch_status("b1_btog",1)
		})
		$("#b2_btog").click( function(){
		obj_binarytogray.switch_status("b2_btog",2)
		})
		$("#b3_btog").click( function(){
		obj_binarytogray.switch_status("b3_btog",3)
		})
		});
	}
	//graytobinary
	{
		obj_graytobinary.initialize();
		$(function(){
		$("#g0_graytobinary").click( function(){
		obj_graytobinary.switch_status("g0_graytobinary",0)
		})
		$("#g1_graytobinary").click( function(){
		obj_graytobinary.switch_status("g1_graytobinary",1)
		})
		$("#g2_graytobinary").click( function(){
		obj_graytobinary.switch_status("g2_graytobinary",2)
		})
		$("#g3_graytobinary").click( function(){
		obj_graytobinary.switch_status("g3_graytobinary",3)
		})
		});
	}
	//bcdtoexcess
	{
	obj_bcdtoexcess.initialize();
	$(function(){
		$("#b0_bcdtoexcess").click( function(){
		obj_bcdtoexcess.switch_status("b0_bcdtoexcess",0)
		})
		$("#b1_bcdtoexcess").click( function(){
		obj_bcdtoexcess.switch_status("b1_bcdtoexcess",1)
		})
		$("#b2_bcdtoexcess").click( function(){
		obj_bcdtoexcess.switch_status("b2_bcdtoexcess",2)
		})
		$("#b3_bcdtoexcess").click( function(){
		obj_bcdtoexcess.switch_status("b3_bcdtoexcess",3)
		})
		});
	}
	//excesstobcd
	{
		obj_excesstobcd.initialize();
		$(function(){
		$("#e0_excesstobcd").click( function(){
		obj_excesstobcd.switch_status("e0_excesstobcd",0)
		})
		$("#e1_excesstobcd").click( function(){
		obj_excesstobcd.switch_status("e1_excesstobcd",1)
		})
		$("#e2_excesstobcd").click( function(){
		obj_excesstobcd.switch_status("e2_excesstobcd",2)
		})
		$("#e3_excesstobcd").click( function(){
		obj_excesstobcd.switch_status("e3_excesstobcd",3)
		})
		});
	}
	//encoder
	{
		obj_encoder.initialize();
		$(function(){
		$("#d1_encoder").click( function(){
		obj_encoder.switch_status("d1_encoder",0)
		})
		$("#d2_encoder").click( function(){
		obj_encoder.switch_status("d2_encoder",1)
		})
		$("#d3_encoder").click( function(){
		obj_encoder.switch_status("d3_encoder",2)
		})
		$("#d4_encoder").click( function(){
		obj_encoder.switch_status("d4_encoder",3)
		})
		$("#d5_encoder").click( function(){
		obj_encoder.switch_status("d5_encoder",4)
		})
		$("#d6_encoder").click( function(){
		obj_encoder.switch_status("d6_encoder",5)
		})
		$("#d7_encoder").click( function(){
		obj_encoder.switch_status("d7_encoder",6)
		})
		$("#d8_encoder").click( function(){
		obj_encoder.switch_status("d8_encoder",7)
		})
		});
	}
	//decoder
	{
		obj_decoder.initialize();
		$(function(){
		$("#s0_decoder").click( function(){
		obj_decoder.switch_status("s0_decoder",0)
		})
		$("#s1_decoder").click( function(){
		obj_decoder.switch_status("s1_decoder",1)
		})
		$("#s2_decoder").click( function(){
		obj_decoder.switch_status("s2_decoder",2)
		})
		
		});
	}
	//multiplexerr
	{
		obj_multiplexer.initialize();
		$(function(){
		$("#i0_mul").click( function(){
		obj_multiplexer.switch_status("i0_mul",0)
		})
		$("#i1_mul").click( function(){
		obj_multiplexer.switch_status("i1_mul",1)
		})
		$("#i2_mul").click( function(){
		obj_multiplexer.switch_status("i2_mul",2)
		})
		$("#i3_mul").click( function(){
		obj_multiplexer.switch_status("i3_mul",3)
		})
		$("#i4_mul").click( function(){
		obj_multiplexer.switch_status("i4_mul",4)
		})
		$("#i5_mul").click( function(){
		obj_multiplexer.switch_status("i5_mul",5)
		})
		$("#i6_mul").click( function(){
		obj_multiplexer.switch_status("i6_mul",6)
		})
		$("#i7_mul").click( function(){
		obj_multiplexer.switch_status("i7_mul",7)
		})
		$("#i8_mul").click( function(){
		obj_multiplexer.switch_status("i8_mul",8)
		})
		$("#i9_mul").click( function(){
		obj_multiplexer.switch_status("i9_mul",9)
		})
		$("#i10_mul").click( function(){
		obj_multiplexer.switch_status("i10_mul",10)
		})
		});
	}
	//demultiplexer
	{
	obj_demultiplexer.initialize();
		$(function(){
		$("#i_demul").click( function(){
		obj_demultiplexer.switch_status("i_demul",0)
		})
		$("#s0_demul").click( function(){
		obj_demultiplexer.switch_status("s0_demul",1)
		})
		$("#s1_demul").click( function(){
		obj_demultiplexer.switch_status("s1_demul",2)
		})
		$("#s2_demul").click( function(){
		obj_demultiplexer.switch_status("s2_demul",3)
		})
		});
	}
});

		