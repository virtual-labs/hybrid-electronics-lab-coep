var logicGatesLang = {	                           //gates json for image,inptut,output....
	languageName: "logicGates",
	modules: [
		{                /* gates...............*/
			"name": "AND",
			"category": "gate",
			"description": "AND Gate with 2 inputs",
			"container" : {
				"xtype":"LogicContainer", 
				"icon": "images/11.png",
				"image": "images/1.png",//"image": "images/gate_and.png",
				
  				"terminals": [
  					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 15, "top": 2},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 15, "top": 42 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 158, "top": 22 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
  				]
			}
		},
		{
		  "name": "OR",	
			"category": "gate",
			"description": "OR Gate with 2 inputs",
			"container": {
		   		"xtype":"LogicContainer", 
		   		"icon": "images/22.png",
		   		"image": "images/2.png",//"image": "images/gate_or.png",
					"terminals": [
						{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 8, "top": 1 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 7, "top": 41 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
						{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 147, "top": 23 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
			}
		},
		{
		  "name": "NOT",	
			"category": "gate",
			"description": "NOT Gate with 1 input",
		  "container": {
				"xtype":"LogicContainer", 
			   "icon": "images/33.png",
			   "image": "images/3.png",
				"terminals": [
					{"name": "_INPUT", "direction": [-1,0], "offsetPosition": {"left": 9, "top": 42 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 160, "top": 44 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
			}
		},
		{
		   "name": "NAND",
			"category": "gate",
			"description": "NAND Gate with 2 inputs",
		   "container": {
			   "xtype":"LogicContainer", 
			   "icon": "images/44.png",
			   "image": "images/4.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 19, "top": 19 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 19, "top": 67 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 160, "top": 42 }, "ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
			}
		},
		{
		   "name": "XOR",
			"category": "gate",
			"description": "XOR Gate with 2 inputs",
		   "container": {
		   	"xtype":"LogicContainer", 
		   	"icon": "images/55.png",
		   	"image": "images/5.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 23 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 68 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 189, "top": 45 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
			}
		},
		{
			"name": "Lightbulb",
			"category": "output",
			"description": "Lamp display",
			"container" : {
				"xtype":"LightbulbContainer", 
				"icon": "images/lightbulb_off.png",
				"image": "images/lightbulb_off.png",
  				"terminals": [ {"name": "_INPUT", "direction": [0,1], "offsetPosition": {"left": -8, "bottom":57 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 } ]
			}
		},
		{
			"name": "Switch",
			"category": "input",
			"description": "Switch",
			"container" : {
				"xtype":"SwitchContainer", 
				"icon": "images/switch_off.png",
				"image": "images/switch_off.png",
  				"terminals": [ {"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 38, "top": 9 },"ddConfig": {"type": "output","allowedTypes": ["input"]}} ]
			}
		},
		{
			"name": "Clock",
			"category": "input",
			"description": "Clock",
			"container" : {
				"xtype":"ClockContainer", 
				"icon": "images/clock_off.png",
				"image": "images/clock_off.png",
  				"terminals": [ {"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"right": 19, "top": 8 },"ddConfig": {"type": "output","allowedTypes": ["input"]}} ]
			}
		},
            {
                  "name":"NOR",
                  "category":"gate",
                  "description":"NOR Gate with 2 inputs",
                  "container": {
				"xtype":"LogicContainer", 
                        "icon": "images/66.png",
                        "image": "images/6.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 13, "top":24 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 13, "top": 68 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 192, "top": 43 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
			}
            },
            {
                  "name":"XNOR",
                  "category":"gate",
                  "description":"XNOR Gate with 2 inputs",
                  "container": {
				"xtype":"LogicContainer", 
                        "icon": "images/77.png",
                        "image": "images/7.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 12, "top": 23 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 10, "top": 69 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT", "direction": [1,0], "offsetPosition": {"left": 188, "top": 44 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
				}
		},
		/*------Adder-----------------*/
		{
                  "name":"halfadd",
                  "category":"addsub",
                  "description":"half Adder with 2 inputs & 1 Carry",
                  "container": {
				"xtype":"FullAdderContainer", 
                        "icon": "images/ha1.png",
                        "image": "images/ha.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 90, "top": -7 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 148, "top": -7},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					//{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -16, "top": 29 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 245, "top": 93 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 114, "top": 195 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
				}
		},
		//halfsubtractor---------
		{
                  "name":"halfsub",
                  "category":"addsub",
                  "description":"half Subtractor with 2 inputs & 1 Carry",
                  "container": {
				"xtype":"FullAdderContainer", 
                        "icon": "images/hs1.png",
                        "image": "images/hs.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 90, "top": -6 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 148, "top": -6 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					//{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -16, "top": 29 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 242, "top": 88 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 114, "top": 196 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
				}
		},
		//fulladder---------------------
		{
                  "name":"fulladd",
                  "category":"addsub",
                  "description":"Full Adder with 2 inputs & 1 Carry",
                  "container": {
				"xtype":"FullAdderContainer", 
                        "icon": "images/fa1.png",
                        "image": "images/fa.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 84, "top": -5},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 143, "top": -3 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 100 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 110, "top": 197 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 244, "top": 102 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
				}
		},
		//fullsubtractor----------------
		{
                  "name":"fullsub",
                  "category":"addsub",
                  "description":"Full Subtracter with 2 inputs & 1 borrow",
                  "container": {
				"xtype":"FullAdderContainer", 
                        "icon": "images/fs1.png",
                        "image": "images/fs.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 87, "top": -10},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 142, "top": -10 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 94 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 115, "top": 193 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 243 , "top": 93 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
				}
		},
		/*------Flip flop-----------------*/
		{
                "name":"D",
                "category":"flipflop",
                "description":"D Flip Flop",
                "container": {
				"xtype":"FlipFlopContainer", 
                        "icon": "images/d.png",
                        "image": "images/d.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 27, "top": 12 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 27, "top": 39},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 141, "top": 21 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 139, "top": 50 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                "name":"jk",
                  "category":"flipflop",
                  "description":"JK Flip Flop",
                  "container": {
				"xtype":"FlipFlopContainer", 
                        "icon": "images/jk.png",
                        "image": "images/jk.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 12, "top": 11 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 13, "top": 38 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 13, "top": 66 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 139, "top": 22 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 139, "top": 50 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                "name":"SR",
                  "category":"flipflop",
                  "description":"SR Flip Flop",
                  "container": {
				"xtype":"FlipFlopContainer", 
                        "icon": "images/sr.png",
                        "image": "images/sr.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 12, "top": 12},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 12, "top": 38 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 12, "top": 67 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 139, "top":22 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 139, "top": 51 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                "name":"T",
                  "category":"flipflop",
                  "description":"T Flip Flop",
                  "container": {
				"xtype":"FlipFlopContainer", 
                        "icon": "images/t.png",
                        "image": "images/t.png",
				"terminals": [
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 13, "top": 11 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 13, "top": 38 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 140, "top": 21 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 139, "top": 51 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		/*------Convertors-----------------*/
		{
                "name":"B2G",
                  "category":"Convertor",
                  "description":"Binary to Gray Convertor",
                  "container": {
				"xtype":"convertorContainer", 
				"icon": "images/b2g.png",
				"image": "images/bg.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 53},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 76 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 99 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 123 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 241, "top": 52 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 241, "top": 77 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 241, "top": 101 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 241, "top": 126 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                 "name":"G2B",
                  "category":"Convertor",
                  "description":"Gray to Binary Convertor",
                  "container": {
				"xtype":"convertorContainer", 
				"icon": "images/g2b1.png",
				"image": "images/gb.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": -8, "top": 52},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": -8, "top": 76 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": -8, "top": 99 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -8, "top": 123 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 241, "top": 52 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 241, "top": 77 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 241, "top": 101 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 241, "top": 125 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                "name":"BCD2Excess3",
                  "category":"Convertor",
                  "description":"BCD to Excess3 Convertor",
                  "container": {
				"xtype":"convertorContainer", 
				"icon": "images/b2e1.png",
				"image": "images/be.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 51},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 76 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 99 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -10, "top": 123 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 242, "top": 52 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 242, "top": 77 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 242, "top": 101 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 242, "top": 125 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		{
                 "name":"Excess32BCD",
                  "category":"Convertor",
                  "description":"Excess3 to BCD Convertor",
                  "container": {
				"xtype":"convertorContainer", 
				"icon": "images/e2b1.png",
				"image": "images/eb.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": -13, "top": 52},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": -13, "top": 75 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": -13, "top": 98 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": -13, "top": 124 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 241, "top": 52 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 241, "top": 77 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 241, "top": 101 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 241, "top": 125 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
					]
				}
		},
		//----------------------mux demux-------------------------------------
		{
			"name": "MUX2",
			"category": "muxdemux",
			"description": "click on the box to selct the typeof multiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/mux2.png",
				"image": "images/mux21.png",
  				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 26,"top": 18 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 26, "top":60 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 26, "top": 101 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						//{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 52, "top": 200 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },					
						{"name": "_OUTPUT0", "direction": [-1,0], "offsetPosition": {"left": 189, "top": 60 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						
						//{"name": "_OUTPUT1", "direction": [-1,0], "offsetPosition": {"left": 160, "top": 145 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						
					]
			
			}
		},
		
		{
			"name": "MUX4",
			"category": "muxdemux",
			"description": "click on the box to selct the typeof multiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/mux4.png",
				"image": "images/mux41.png",
  				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 20,"top": 18 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 53 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 98 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 20, "top": 147 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },				
						//{"name": "_SELECT3", "direction": [1,0], "offsetPosition": {"left": 95, "top": 179 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 184, "top": 77},"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": 85, "top": 203 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": 125, "top": 203 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 }
					]
			
			}
		},
		
		
		
		{
			"name": "MUX8",
			"category": "muxdemux",
			"description": "click on the box to selct the typeof multiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/mux8.png",
				"image": "images/mux81.png",
  				"terminals": [
						{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 14 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 41 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 65 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 93 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT4", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 119 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT5", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 145 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT6", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 174},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_INPUT7", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 204 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },				
						{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 184, "top": 107},"ddConfig":  {"type": "output","allowedTypes": ["input"]}},
						{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": 80, "top": 268 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": 112, "top": 268 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT3", "direction": [-1,0], "offsetPosition": {"left": 141, "top": 268},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 }
					]
			
			}
		},
		
		{
			"name": "DEMUX2",
			"category": "muxdemux",
			"description": "click on the box to select the type Of demultiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/demux2.png",
				"image": "images/DEMUX12.png",
  				"terminals": [
						{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 9, "top": 37 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 191, "top": 36 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 190, "top": 91 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 348, "top": 160 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 348, "top": 219 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT4", "direction": [1,0], "offsetPosition": {"left": 348, "top": 38 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT5", "direction": [1,0], "offsetPosition": {"left": 345, "top": 278 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT6", "direction": [1,0], "offsetPosition": {"left": 344, "top": 338 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						//{"name": "_OUTPUT7", "direction": [1,0], "offsetPosition": {"left": 344, "top": 397 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": 9, "top": 92 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						//{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": 345, "top": 458 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						//{"name": "_SELECT3", "direction": [-1,0], "offsetPosition": {"left": 92, "top": 489 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 }
				]
				}
		},
		{
			"name": "DEMUX4",
			"category": "muxdemux",
			"description": "click on the box to select the type Of demultiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/demux4.png",
				"image": "images/demux14.png",
  				"terminals": [{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 188, "top": 36 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 188, "top": 68 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 189, "top": 106 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 188, "top": 142 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},					
						{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 9, "top": 87 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": 77, "top": 222 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": 117, "top": 222},"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 }
					]
				}
		},
		
		{
			"name": "DEMUX8",
			"category": "muxdemux",
			"description": "click on the box to select the type Of demultiplexer",
			"container" : {
				"xtype":"muxdemuxContainer", 
				"icon": "images/DEMUX8.png",
				"image": "images/DEMUX18.png",
  				"terminals": [
						{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 5, "top": 135 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 187, "top": 42 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 187, "top": 71 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 187, "top": 93 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 187, "top": 118 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT4", "direction": [1,0], "offsetPosition": {"left": 187, "top": 145 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT5", "direction": [1,0], "offsetPosition": {"left": 187, "top": 170 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT6", "direction": [1,0], "offsetPosition": {"left": 187, "top": 196 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_OUTPUT7", "direction": [1,0], "offsetPosition": {"left": 187, "top": 223 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
						{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": 70, "top": 273 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": 94, "top": 273 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
						{"name": "_SELECT3", "direction": [-1,0], "offsetPosition": {"left": 122, "top": 273 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 }
				]
				}
		},
		//------------------encoder & decoder---------------
		{
			"name": "ENCODER24",
			"category": "encode_decode",
			"description": "Priority Encoder 4:2",
			"container" : {
				"xtype":"encode_decodeContainer", 
				"icon": "images/enco4.png",
				"image": "images/enco42.png",
  				"terminals": [
  					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 28, "top": 15 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 28, "top": 42 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 28, "top": 76 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 28, "top": 108 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 189, "top": 42 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 189, "top": 77 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
  				]
			}
		},
		{
			"name": "ENCODER83",
			"category": "encode_decode",
			"description": "Encoder 8:3",
			"container" : {
				"xtype":"encode_decodeContainer", 
				"icon": "images/enco3.png",
				"image": "images/enco38.png",
  				"terminals": [
  					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 15 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 42 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 67 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 94 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT4", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 120 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT5", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 147 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT6", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 175},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT7", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 205 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },				
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 188, "top": 80 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 188, "top": 108 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 188, "top": 137 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
		},
		{
			"name": "DECODER38",
			"category": "encode_decode",
			"description": "Decoder 3:8",
			"container" : {
				"xtype":"encode_decodeContainer", 
				"icon": "images/deco3.png",
				"image": "images/deco38.png",
  				"terminals": [
  					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 10, "top": 107 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 10, "top": 131 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 10, "top": 156 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 188, "top": 43 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 188, "top": 71 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 188, "top": 93},"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 188, "top": 144 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT4", "direction": [1,0], "offsetPosition": {"left": 188, "top": 169 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT5", "direction": [1,0], "offsetPosition": {"left": 188, "top": 195 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT6", "direction": [1,0], "offsetPosition": {"left": 188, "top": 223},"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT7", "direction": [1,0], "offsetPosition": {"left": 188, "top": 118 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
										
  				]
			}
		},
		{
			"name": "DECODER24",
			"category": "encode_decode",
			"description": "Decoder 2:4",
			"container" : {
				"xtype":"encode_decodeContainer", 
				"icon": "images/denco2.png",
				"image": "images/denco24.png",
  				"terminals": [
  					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 8, "top": 69 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 9, "top": 108 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 98, "top": 213 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 191, "top": 36 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 191, "top": 69 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 191, "top": 105 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 191, "top": 142 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
  				]
			}
		},
		//alu------------------------------------
		{
                "name":"ALU",
                  "category":"alu",
                  "description":"Arithmatic Logic Unit",
                  "container": {
				"xtype":"aluContainer", 
				"icon": "images/alu.png",
				"image": "images/alu.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 24, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 49, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 72, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 104, "top": 21},"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT4", "direction": [-1,0], "offsetPosition": {"left": 143, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT5", "direction": [-1,0], "offsetPosition": {"left":  168, "top":21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_INPUT6", "direction": [-1,0], "offsetPosition": {"left": 192, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_INPUT7", "direction": [-1,0], "offsetPosition": {"left": 222, "top": 21 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_SELECT0", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 54 },"ddConfig": {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
  					{"name": "_SELECT1", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 71 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
  					{"name": "_SELECT2", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 88 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_SELECT3", "direction": [-1,0], "offsetPosition": {"left": -11, "top": 106},"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_MODE", "direction": [-1,0], "offsetPosition": {"left": 245, "top": 94 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_CIN", "direction": [-1,0], "offsetPosition": {"left": 245, "top": 70 },"ddConfig": {"type": "input","allowedTypes": ["output"]}},
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 89, "top": 169 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 121, "top": 169 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 168, "top": 169 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 140, "top": 169 },"ddConfig": {"type": "output","allowedTypes": ["input"]}}
				]
			}
			
		},
		//comparator & multiplier---------------------
		{
                "name":"Comparator_1",
                  "category":"cm",
                  "description":"Comparator 1 bit",
                  "container": {
				"xtype":"ComparatorContainer", 
				"icon": "images/1bitcomp.png",
				"image": "images/comp2.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 20, "top": 133 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 20, "top": 74 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 185, "top": 74 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 185, "top": 112 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 185, "top": 149 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
			
		},
		{
                "name":"Comparator_2",
                  "category":"cm",
                  "description":"Comparator 2 bit",
                  "container": {
				"xtype":"ComparatorContainer", 
				"icon": "images/camp22.png",
				"image": "images/camp2.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 59 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 168},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left":21, "top": 94 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 21, "top": 131 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 182, "top": 72 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 182, "top": 149 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 182, "top": 112 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
			
		},
		{
                "name":"Comparator_4",
                  "category":"cm",
                  "description":"Comparator 4 bit",
                  "container": {
				"xtype":"ComparatorContainer", 
				"icon": "images/comp44.png",
				"image": "images/Comp4.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 16 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 42 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 66 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 93 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT4", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 120 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT5", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 147},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT6", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 175},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT7", "direction": [-1,0], "offsetPosition": {"left": 14, "top": 205},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },				
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 181, "top": 80 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 181, "top": 107},"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 181, "top": 136 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
			
		},
		//multiplier----------------------------------------
		{
                "name":"multiplier_2",
                  "category":"m",
                  "description":"multiplier 2 bit",
                  "container": {
				"xtype":"multiplierContainer", 
				"icon": "images/mult22.png",
				"image": "images/mult2.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 11, "top": 58 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left":11, "top": 93 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 11, "top": 130},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 11, "top": 167 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 185, "top": 59 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 185, "top": 94 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 185, "top": 130 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 185, "top": 167},"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
			
		},
		{
                "name":"multiplier_3",
                  "category":"m",
                  "description":"multiplier 3 bit",
                  "container": {
				"xtype":"multiplierContainer", 
				"icon": "images/m31.png",
				"image": "images/m3.png",
				"terminals": [
					{"name": "_INPUT0", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 31 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT1", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 63 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT2", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 96 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT3", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 124 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT4", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 152},"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_INPUT5", "direction": [-1,0], "offsetPosition": {"left": 16, "top": 180 },"ddConfig":  {"type": "input","allowedTypes": ["output"]}, "nMaxWires": 1 },
					{"name": "_OUTPUT0", "direction": [1,0], "offsetPosition": {"left": 187, "top": 31 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT1", "direction": [1,0], "offsetPosition": {"left": 187, "top": 61 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT2", "direction": [1,0], "offsetPosition": {"left": 187, "top": 94 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT3", "direction": [1,0], "offsetPosition": {"left": 187, "top": 123 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT4", "direction": [1,0], "offsetPosition": {"left": 187, "top": 152 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					{"name": "_OUTPUT5", "direction": [1,0], "offsetPosition": {"left": 187, "top": 180 },"ddConfig": {"type": "output","allowedTypes": ["input"]}},
					]
			}
			
		},
	]
};


/********
 * CODE/Functionality
 ********/

// General logic container
LogicContainer = function(opts, layer) {
	LogicContainer.superclass.constructor.call(this, opts, layer);
	this.logicInputValues = [];
	//var qdash = false
};

YAHOO.lang.extend(LogicContainer, WireIt.ImageContainer, {

	/** 
    * @property xtype
    * @description String representing this class for exporting as JSON
    * @default "WireIt.LogicContainer"
    * @type String
    */
   xtype: "LogicContainer",
	
	setInput: function(bStatus,term) {
	
		
		this.logicInputValues[term.name] = bStatus;
		
		if(this.title == "AND") {
			this.setLogic( this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] );
		}
		else if (this.title == "OR") {
			this.setLogic( this.logicInputValues["_INPUT1"] || this.logicInputValues["_INPUT2"]);
		}
		else if (this.title == "NOT") {
			this.setLogic(!this.logicInputValues["_INPUT"], 0);
		}
		else if (this.title == "NAND") {
			this.setLogic( !(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]) );
		}
		else if (this.title == "XOR") {
			this.setLogic( (!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]) ||
			  					(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"]));
		}
		else if (this.title == "NOR") {
			this.setLogic( !(this.logicInputValues["_INPUT1"] || this.logicInputValues["_INPUT2"])) 
		}
		else if (this.title == "XNOR") {
			this.setLogic( (this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]) || 
			(	!(this.logicInputValues["_INPUT1"]) && !(this.logicInputValues["_INPUT2"])	)) 
	
		}
		
	},
	
	setLogic: function(bStatus) {
		this.status = bStatus;
	
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		
		// trigger the output wires !
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			//wiring logic------------------
			if(term.name == "_OUTPUT") {                                     
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					//wire.color = bStatus ? "rgb(173,216,230)" : "rgb(255,255,255)";
					wire.color = bStatus ? "rgb(0,0,0)" : "rgb(0,0,0)";					
					wire.redraw();
				}
			}
			
			
		}
	},
	switchStatus: function() {
		this.setLogic(!this.status);
	}
	
	
});


ClockContainer = function(opts, layer) {   //create new container for clock-------------------
	ClockContainer.superclass.constructor.call(this, opts, layer);
	this.imageName = "clock";	
	var that = this;
	setInterval(function() { that.switchStatus(); }, 800);
	
};
YAHOO.lang.extend(ClockContainer, LogicContainer, { 
	xtype: "ClockContainer",
	
	
});

SwitchContainer = function(opts, layer) {   //create new container for switch------------------
	SwitchContainer.superclass.constructor.call(this, opts, layer);
	this.imageName = "switch";
	YAHOO.util.Event.addListener(this.bodyEl, "click", this.switchStatus, this, true);
};
YAHOO.lang.extend(SwitchContainer, LogicContainer, {
	xtype: "SwitchContainer"
});

LightbulbContainer = function(opts, layer) { //for bulb----------------
	LightbulbContainer.superclass.constructor.call(this, opts, layer);
	this.imageName = "lightbulb";
};
YAHOO.lang.extend(LightbulbContainer, LogicContainer, {
	xtype: "LightbulbContainer",
	
	setInput: function(bStatus,term) {
		this.setLogic(bStatus);
	}
	
});
//------------------------Logic for adders and subtractor------------------------
FullAdderContainer = function(opts,layer){
	FullAdderContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = []
	//this.sum ; this.carry;
}
YAHOO.lang.extend(FullAdderContainer, LogicContainer, {
	xtype: "FullAdderContainer",
	setInput : function(bStatus,term)
	{
		//alert(bStatus+" "+term.name+" "+this.title)
		this.logicInputValues[term.name] = bStatus;
		
		if (this.title == "fulladd"){
		var sum = ((!this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT3"])  ||
				(!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] && !this.logicInputValues["_INPUT3"])  ||
				(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"] && !this.logicInputValues["_INPUT3"])  ||
				(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT3"]))
		//alert(sum);
		var carry = ((this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] ) ||
							(this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT3"] ) ||
							(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT3"] ))
				
		this.setLogicadd(sum ,"_OUTPUT1" );
		this.setLogicadd(carry ,"_OUTPUT2" );
			
		}
		if (this.title == "fullsub"){
		var sum = ((!this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT3"])  ||
				(!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] && !this.logicInputValues["_INPUT3"])  ||
				(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"] && !this.logicInputValues["_INPUT3"])  ||
				(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT3"]))
		//alert(sum);
		var borrow = ((this.logicInputValues["_INPUT3"] &&  !((!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]) ||
			  					(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"]))) ||
							(!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"] ))
				
		this.setLogicadd(sum ,"_OUTPUT1" );
		this.setLogicadd(borrow ,"_OUTPUT2" );
			
		}
		if(this.title=="halfadd"){
		var sum=((!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]) || (this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"]))	
		var carry=(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"])	
			
		this.setLogicadd(sum ,"_OUTPUT2" );
		this.setLogicadd(carry ,"_OUTPUT1" );
			
		}
		if(this.title=="halfsub"){
			
		var D=((this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT2"]) ||  (!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]))	
		var B=((!this.logicInputValues["_INPUT1"])  &&   (this.logicInputValues["_INPUT2"]) )	
			
		this.setLogicadd(D ,"_OUTPUT2" );
		this.setLogicadd(B,"_OUTPUT1" );
			
		}
		
		
		
	},
	setLogicadd: function(bStatus, output)
	{
		//alert(bStatus+" "+term.name);
		this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			//alert(this.terminals[i].name)
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
	
});
//CONTAINER FOR FILP FLOPS AND FUNCTIONALITY---------------------------------
FlipFlopContainer = function(opts,layer){
	FlipFlopContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = []
}
YAHOO.lang.extend(FlipFlopContainer, LogicContainer, {
	xtype: "FlipFlopContainer",
	setInput : function(bStatus,term)
	{
		this.logicInputValues[term.name] = bStatus;
		if (this.title == "jk") {
			//console.log("INPUT3 : "+this.logicInputValues["_INPUT3"])
			//console.log("INPUT2 : "+this.logicInputValues["_INPUT2"])
			//console.log("_OUTPUT1 : "+this.logicInputValues["_OUTPUT1"])
			//console.log("_OUTPUT2 : "+this.logicInputValues["_OUTPUT2"])
			var a = (this.logicInputValues["_INPUT3"] && this.logicInputValues["_OUTPUT1"] && this.logicInputValues["_INPUT2"] )
			var b = (this.logicInputValues["_INPUT3"] && !this.logicInputValues["_OUTPUT1"] && this.logicInputValues["_INPUT2"] )
			var q = !(a || !this.logicInputValues["_OUTPUT1"])
			this.setLogicff(q ,"_OUTPUT1" );
			var qdash= !q
			qdash = !(b || q)
			this.setLogicff(qdash ,"_OUTPUT2" );
			
			
			//Q
			//var q = ((this.logicInputValues["_INPUT1"] && !this.logicInputValues["_OUTPUT"] )||
				//(!this.logicInputValues["_INPUT2"] && this.logicInputValues["_OUTPUT"] ))
			
			//Q'
			
		}
		else if (this.title == "D") {
			var f = !this.logicInputValues["_INPUT1"]
			var a = !(this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"])
			var b = !(f  &&  this.logicInputValues["_INPUT2"])
			
			var q = !(a || qdash)
			this.setLogicff(q ,"_OUTPUT1" );
			var qdash = !q
			qdash = !(b || q)
			this.setLogicff(qdash ,"_OUTPUT2" );
			
			//Q
			//this.setLogicff((this.logicInputValues["_INPUT1"]&& this.logicInputValues["_INPUT2"]),"_OUTPUT1"); //with clock
			 //Q'
			//this.setLogicff((!this.logicInputValues["_INPUT1"]&& this.logicInputValues["_INPUT2"]),"_OUTPUT2")
		}
		else if (this.title == "T") {
			
			var a = (this.logicInputValues["_INPUT1"] && this.logicInputValues["_OUTPUT1"]  && this.logicInputValues["_INPUT2"]) 
			var b = (this.logicInputValues["_INPUT1"] && !this.logicInputValues["_OUTPUT1"]  && this.logicInputValues["_INPUT2"]) 
			var q = !(a || !this.logicInputValues["_OUTPUT1"])
			this.setLogicff(q , "_OUTPUT1")
			var qdash = !q;
			var qdash = !(b || q)
			this.setLogicff(qdash, "_OUTPUT2")
			
			//q = t xor qp      tq'+ t'q
			//Q
			//var q = ((this.logicInputValues["_INPUT1"] && !this.logicInputValues["_OUTPUT"] )||
			//	(!this.logicInputValues["_INPUT2"] && this.logicInputValues["_OUTPUT"] )) && this.logicInputValues["_INPUT2"] //with clock
			//Q'
			
		}
		else if (this.title == "SR") {
			
			var a =  this.logicInputValues["_INPUT3"] && this.logicInputValues["_INPUT2"]
			var b =  this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT2"]
			var q = !(a || qdash)
			this.setLogicff(q , "_OUTPUT1")
			var qdash = !q;
			var qdash = !(b || q)
			this.setLogicff(qdash , "_OUTPUT2")
			
			//q = r'qp + s
			//Q
			//var q = (((!this.logicInputValues["_INPUT1"] && this.logicInputValues["_OUTPUT"] )||
			//!this.logicInputValues["_INPUT1"]) && this.logicInputValues["_INPUT2"])
			//Q'
		}
	},
	setLogicff: function(bStatus, output)
	{
		this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
				
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
	
});
//Container for Convertor AND LOGIC------------------------------------
convertorContainer= function(opts,layer){
	convertorContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = []
} 
YAHOO.lang.extend(convertorContainer, LogicContainer, {
	xtype: "convertorContainer",
	setInput : function(bStatus,term)
	{
		this.logicInputValues[term.name] = bStatus;
		
		if (this.title == "B2G"){ 
			var g0 = ((!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT0"]) ||
			  					(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT0"]))
			this.setLogicconvertor(g0, "_OUTPUT0");
			var g1 = ((!this.logicInputValues["_INPUT2"] && this.logicInputValues["_INPUT1"]) ||
			  					(this.logicInputValues["_INPUT2"] && !this.logicInputValues["_INPUT1"]))
			this.setLogicconvertor(g1, "_OUTPUT1");
			var g2 = ((!this.logicInputValues["_INPUT3"] && this.logicInputValues["_INPUT2"]) ||
			  					(this.logicInputValues["_INPUT3"] && !this.logicInputValues["_INPUT2"]))
			this.setLogicconvertor(g2, "_OUTPUT2");
			var g3 = this.logicInputValues["_INPUT3"]
			this.setLogicconvertor(g3, "_OUTPUT3");	
		}
		else if (this.title == "G2B"){
			var g3xorg4 = ((!this.logicInputValues["_INPUT3"] && this.logicInputValues["_INPUT2"]) ||
					(this.logicInputValues["_INPUT3"] && !this.logicInputValues["_INPUT2"])) 
			var g2xorg1 = ((!this.logicInputValues["_INPUT1"] && this.logicInputValues["_INPUT0"]) ||
			  		(this.logicInputValues["_INPUT1"] && !this.logicInputValues["_INPUT0"]))
			var a = (!g3xorg4 && g2xorg1)|| (g3xorg4 && !g2xorg1)					
			this.setLogicconvertor(a, "_OUTPUT0");
			var b = (!g3xorg4 && this.logicInputValues["_INPUT1"] )||(g3xorg4 && !this.logicInputValues["_INPUT1"])
			this.setLogicconvertor(b, "_OUTPUT1");
			var c = g3xorg4;
			this.setLogicconvertor(c, "_OUTPUT2");
			var d = this.logicInputValues["_INPUT3"]
			this.setLogicconvertor(d, "_OUTPUT3");	
		}
		else if (this.title == "BCD2Excess3"){  
			var A = this.logicInputValues["_INPUT0"]
			var B = this.logicInputValues["_INPUT1"] 
			var C = this.logicInputValues["_INPUT2"]
			var D = this.logicInputValues["_INPUT3"] 
			
			var w = A || B && (C || D)
			this.setLogicconvertor(w, "_OUTPUT0");
			var x = !B && (C || D) || B && !(C || D)
			this.setLogicconvertor(x, "_OUTPUT1");
			//var y = (!C && !D) || !(C || D)
			var y = (C && D) || (!C && !D)
			this.setLogicconvertor(y, "_OUTPUT2");
			var z = !D
			this.setLogicconvertor(z, "_OUTPUT3");	
		}
		else if (this.title == "Excess32BCD"){
			var w = this.logicInputValues["_INPUT0"]
			var x = this.logicInputValues["_INPUT1"] 
			var y = this.logicInputValues["_INPUT2"]
			var z = this.logicInputValues["_INPUT3"] 
			
			var A = (w && x && !y && !z)|| (w && !x && y && z )
			this.setLogicconvertor(A, "_OUTPUT0");
			var B = (w && !x && !z) || (w && !x  && !y) || (!w && x && y && z) 
			this.setLogicconvertor(B, "_OUTPUT1");
			var C = (!w && x && !y && z) || (!w && x && y && !z) || (w && !x && !y && z) || (w && !x && y && !z)
			this.setLogicconvertor(C, "_OUTPUT2");
			var D = (x && !y && !z) || ( w && !y  && !z) || (w && !x && !z) || (!w && x && y && !z)
			this.setLogicconvertor(D, "_OUTPUT3");	
		}
		
	},
	setLogicconvertor: function(bStatus, output)
	{
		this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
	
});
//MUX AND DEMUX CONTAINER AND LOGIC-------------------------------
muxdemuxContainer = function(opts,layer){
	muxdemuxContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = [];
} 
YAHOO.lang.extend(muxdemuxContainer, LogicContainer, {
	xtype: "muxdemuxContainer",
	
	setInput : function(bStatus,term)
	{
		this.logicInputValues[term.name] = bStatus;
		if (this.title == "MUX4"){ 
		/** I3 S1 S0 + I2 S1 S0' + I1 S1' S0 + I0 S1' S0'*/
			var i0 = this.logicInputValues["_INPUT0"]
			var i1 = this.logicInputValues["_INPUT1"]
			var i2 = this.logicInputValues["_INPUT2"]
			var i3 = this.logicInputValues["_INPUT3"]
			var s0 = this.logicInputValues["_SELECT1"]
			var s1 = this.logicInputValues["_SELECT2"]
			//var y = (i0 && !s1 && !s0) || (i1 && !s1 && s0) || (i2 && s1 && !s0) || (i3 && s1 && s0)
			var y= (!s1 && !s0 && i0) || (!s1 && s0 && i1) || (s1 && !s0 && i2) || (s1 && s0 && i3) 
			
			this.setmuxdemuxconvertor(y, "_OUTPUT0");
		}
		else if (this.title == "MUX2"){ 
		
			var i0 = this.logicInputValues["_INPUT0"]
			var i1 = this.logicInputValues["_INPUT1"]
			var s = this.logicInputValues["_INPUT2"]
			var y= (i0 && !s) || (i1 && s) 
			this.setmuxdemuxconvertor(y, "_OUTPUT0");
		}
		else if (this.title == "MUX8"){
			var i0 = this.logicInputValues["_INPUT0"]
			var i1 = this.logicInputValues["_INPUT1"]
			var i2 = this.logicInputValues["_INPUT2"]
			var i3 = this.logicInputValues["_INPUT3"]
			var i4 = this.logicInputValues["_INPUT4"]
			var i5 = this.logicInputValues["_INPUT5"]
			var i6 = this.logicInputValues["_INPUT6"]
			var i7 = this.logicInputValues["_INPUT7"]
			var s0 = this.logicInputValues["_SELECT1"]
			var s1 = this.logicInputValues["_SELECT2"]
			var s2 = this.logicInputValues["_SELECT3"]
			
			var y = (i0 && !s1 && !s0 && !s2) || (i1 && !s1 && s0 && !s2) || (i2 && s1 && !s0 && !s2) || (i3 && s1 && s0 && !s2) ||
					(i4 && !s1 && !s0 && s2)|| (i5 && !s1 && s0 && s2) || (i6 && s1 && !s0 && s2) || (i7 && s1 && s0 && s2)
			this.setmuxdemuxconvertor(y, "_OUTPUT0");
		}
		else if (this.title == "DEMUX4"){
			var i = this.logicInputValues["_INPUT0"];
			var s0 = this.logicInputValues["_SELECT1"]
			var s1 = this.logicInputValues["_SELECT2"]
			
			var q0 = (i && !s1 && !s0)
			this.setmuxdemuxconvertor(q0, "_OUTPUT0");
			var q1 = (i && !s1 && s0)
			this.setmuxdemuxconvertor(q1, "_OUTPUT1");
			var q2 = (i && s1 && !s0)
			this.setmuxdemuxconvertor(q2, "_OUTPUT2");
			var q3 = (i && s1 && s0) 
			this.setmuxdemuxconvertor(q3, "_OUTPUT3");
		}
		else if (this.title == "DEMUX2"){
			var i = this.logicInputValues["_INPUT0"];
			var s = this.logicInputValues["_SELECT1"]
			
			
		    var q0= (i && !s)
		    this.setmuxdemuxconvertor(q0, "_OUTPUT1");
		    var q1= (i && s)
		    this.setmuxdemuxconvertor(q1, "_OUTPUT0");
		}
		
		
		else if (this.title == "DEMUX8"){ 
			var i = this.logicInputValues["_INPUT0"];
			var s0 = this.logicInputValues["_SELECT1"]
			var s1 = this.logicInputValues["_SELECT2"]
			var s2 = this.logicInputValues["_SELECT3"]
			
			var q0 = (i && !s1 && !s0 && !s2)
			this.setmuxdemuxconvertor(q0, "_OUTPUT0");
			var q1 = (i && !s1 && s0 && !s2 )
			this.setmuxdemuxconvertor(q1, "_OUTPUT1");
			var q2 = (i && s1 && !s0 && !s2 )
			this.setmuxdemuxconvertor(q2, "_OUTPUT2");
			var q3 = (i && s1 && s0 && !s2) 
			this.setmuxdemuxconvertor(q3, "_OUTPUT3");
			var q4 = (i && !s1 && !s0 && s2)
			this.setmuxdemuxconvertor(q4, "_OUTPUT4");
			var q5 = (i && !s1 && s0 && s2 )
			this.setmuxdemuxconvertor(q5, "_OUTPUT5");
			var q6 = (i && s1 && !s0 && s2 )
			this.setmuxdemuxconvertor(q6, "_OUTPUT6");
			var q7 = (i && s1 && s0 && s2) 
			this.setmuxdemuxconvertor(q7, "_OUTPUT7");
		}
	},
	setmuxdemuxconvertor : function(bStatus,output)
	{
		this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					//wire.color = bStatus ? "rgb(173,216,230)" : "rgb(0,0,0)";
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
});

//encoder and decoder container
encode_decodeContainer = function(opts,layer){
	encode_decodeContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = [];
		
} 
YAHOO.lang.extend(encode_decodeContainer, LogicContainer, {
	xtype: "encode_decodeContainer",
	
	setInput : function(bStatus,term)
	{
		this.logicInputValues[term.name] = bStatus;
		
		if (this.title == "ENCODER24"){ /**A1 = D2 + D3   A0 = (D1 * !D2) + D3*/
			var d0  = this.logicInputValues["_INPUT0"]
			var d1  = this.logicInputValues["_INPUT1"]
			var d2  = this.logicInputValues["_INPUT2"]
			var d3  = this.logicInputValues["_INPUT3"]
			//alert(d0+" "+d1+" "+d2+" "+d3)
			var x= d2 || d3
			this.setencode_decodeconvertor(x, "_OUTPUT1");
			
			var y= d1 || d3
			this.setencode_decodeconvertor(y, "_OUTPUT0");
			
		}
		else if (this.title == "DECODER24"){ 
		/**Q0 = S1� S0�  Q1 = S1� S0  Q2 = S1 S0�  Q3 = S1 S0,*/
		
				var s0 = this.logicInputValues["_INPUT0"]
				var s1 = this.logicInputValues["_INPUT1"]
				var e=  this.logicInputValues["_INPUT2"]
				
				var q0 = !s0 && !s1 && e;
				this.setencode_decodeconvertor(q0, "_OUTPUT0");
				var q1 = s0 && !s1 && e ;
				this.setencode_decodeconvertor(q1, "_OUTPUT1");
				var q2 = !s0 && s1 && e  ;
				this.setencode_decodeconvertor(q2, "_OUTPUT2");
				var q3 = s0 && s1 && e;
				this.setencode_decodeconvertor(q3, "_OUTPUT3");
		}
		else if (this.title == "ENCODER83"){
		/**Y0 = I1 + I3 + I5 + I7  	Y1= I2 + I3 + I6 + I7   Y2 = I4 + I5 + I6 +I7   */
			var i0 = this.logicInputValues["_INPUT0"]
			var i1 = this.logicInputValues["_INPUT1"]
			var i2 = this.logicInputValues["_INPUT2"]
			var i3 = this.logicInputValues["_INPUT3"]
			var i4 = this.logicInputValues["_INPUT4"]
			var i5 = this.logicInputValues["_INPUT5"]
			var i6 = this.logicInputValues["_INPUT6"]
			var i7 = this.logicInputValues["_INPUT7"]
			
			var y0 = i1 || i3 || i5 || i7
			this.setencode_decodeconvertor(y0, "_OUTPUT0");
			var y1 = i2 || i3 || i6 || i7
			this.setencode_decodeconvertor(y1, "_OUTPUT1");
			var y2 =i4 || i5 || i6 || i7
			this.setencode_decodeconvertor(y2, "_OUTPUT2");
		}
		else if (this.title == "DECODER38"){ 
		/**Q0 = S2� S1� S0� Q1 = S2� S1� S0 Q2 = S2� S1 S0�  Q3 = S2� S1 S0 Q4 = S2 S1� S0� Q5 = S2 S1� S0  Q6 = S2 S1 S0� Q7 = S2 S1 S0*/
			var s0 = this.logicInputValues["_INPUT0"]
			var s1 = this.logicInputValues["_INPUT1"]
			var s2 = this.logicInputValues["_INPUT2"]
			//alert(s0+" "+s1+""+s2);
			var q0 = !s2 && !s1 && !s0
			this.setencode_decodeconvertor(q0, "_OUTPUT0");
			var q1 = !s2 && !s1 && s0
			this.setencode_decodeconvertor(q1, "_OUTPUT1");
			var q2 = !s2 && s1 && !s0
			this.setencode_decodeconvertor(q2, "_OUTPUT2");
			var q3 = !s2 && s1 && s0
			this.setencode_decodeconvertor(q3, "_OUTPUT7");
			var q4 = s2 && !s1 && !s0
			this.setencode_decodeconvertor(q4, "_OUTPUT3");
			var q5 = s2 && !s1 && s0
			this.setencode_decodeconvertor(q5, "_OUTPUT4");
			var q6 = s2 && s1 && !s0
			this.setencode_decodeconvertor(q6, "_OUTPUT5");
			var q7 = s2 && s1 && s0
			this.setencode_decodeconvertor(q7, "_OUTPUT6");
		}
	},
	setencode_decodeconvertor : function(bStatus,output)
	{
		this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
});

//ALU CONTAINER------------------------------
aluContainer  = function(opts,layer){
	aluContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = [];
	this.o = []
} 
YAHOO.lang.extend(aluContainer, LogicContainer, {
	xtype: "aluContainer",
	
	toggleBits:   function( dec ){
    var mask = 0xFFFFFFF;
    return ( dec ^ mask ).toString(2).match( RegExp( "[01]{"+(dec.toString(2).length)+"}$" ) )[0];
	},
	setInput : function(bStatus,term)
	{
	this.logicInputValues[term.name] = bStatus;
		if (this.title == "ALU")
		{//for input A
			var a0 = this.logicInputValues["_INPUT0"]
			var a1 = this.logicInputValues["_INPUT1"]
			var a2 = this.logicInputValues["_INPUT2"]
			var a3 = this.logicInputValues["_INPUT3"]
			var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
			var b0 = this.logicInputValues["_INPUT4"]
			var b1 = this.logicInputValues["_INPUT5"]
			var b2 = this.logicInputValues["_INPUT6"]
			var b3 = this.logicInputValues["_INPUT7"]
			var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		//for select lines
			var s0 = this.logicInputValues["_SELECT0"]
			var s1 = this.logicInputValues["_SELECT1"]
			var s2 = this.logicInputValues["_SELECT2"]
			var s3 = this.logicInputValues["_SELECT3"]
		//for mode in cin
			var mode = this.logicInputValues["_MODE"]
			var cin = this.logicInputValues["_CIN"];
		//binary conversion
			var a_bin = a.toString(2);
			var b_bin = b.toString(2);
		//1's compliment
			var a_bar = this.toggleBits(a_bin);
			var b_bar = this.toggleBits(b_bin);
		//abar to decimal
			var a_bar_deci = (parseInt(a_bar,2)).toString(10);;
			var b_bar_deci = (parseInt(b_bar,2)).toString(10);;
			
			if(mode == true )
			{/** logic operations*/
				
				if(!s3 && !s2 && !s1 && !s0)
					y = a_bar_deci
				else if(!s3 && !s2 && !s1 && s0)
					y = (this.toggleBits((a+b).toString(2))).toString(2) 
				else if(!s3 && !s2 && s1 && !s0)
					y = a_bar_deci * b
				else if(!s3 && !s2 && s1 && s0)
					y = 0;
				else if(!s3 && s2 && !s1 && !s0)
					y = (this.toggleBits((a*b).toString(2))).toString(2) 
				else if(!s3 && s2 && !s1 && s0)
					y = b_bar_deci
				else if(s3 && s2 && s1 && !s0)
					y =( a_bar_deci * b)+(b_bar_deci * a) 
				else if(!s3 && s2 && s1 && s0)
					y = a * b_bar_deci
				else if(s3 &&  !s2 && !s1 && !s0)
					y = a_bar_deci + b
				else if(s3 &&  !s2 && !s1 && s0)
					y = ( a * b_bar_deci) +( b * a_bar_deci)
				else if(s3 &&  !s2 && s1 && !s0)
					y =  b;
				else if( s3 &&  !s2 && !s1 && !s0)
					y = a *b
				else if(s3 &&  s2 && !s1 && !s0)
					y  = 1;
				else if(s3 &&  s2 && !s1 && s0)
					y = a + b_bar_deci;
				else if(s3 &&  s2 && s1 && !s0)
					y = a+b;
				else if(s3 &&  s2 && s1 && s0)
					y = a;
				
				
			}
			else {/** Arithmetic operations*/
				if(cin == true)
				{
					/*No carry*/
				if(!s3 && !s2 && !s1 && !s0)
					y = a
				else if(!s3 && !s2 && !s1 && s0)
					y = (a+b)
				else if(!s3 && !s2 && s1 && !s0)
					y = a + b_bar_deci
				else if(!s3 && !s2 && s1 && s0)
					y = a_bar_decimal + 1;
				else if(!s3 && s2 && !s1 && !s0)
					y = a+(a * b_bar_deci)
				else if(!s3 && s2 && !s1 && s0)
					y = (a+ b)+ ( a * b_bar_deci)
				else if(s3 && s2 && s1 && !s0)
					y = a - b -1;
				else if(!s3 && s2 && s1 && s0)
					y = (a * b_bar_deci) - 1
				else if(s3 &&  !s2 && !s1 && !s0)
					y = a + (a*b)
				else if(s3 &&  !s2 && !s1 && s0)
					y = a+b;
				else if(s3 &&  !s2 && s1 && !s0)
					y = a + b_bar_deci + (a*b)
				else if( s3 &&  !s2 && !s1 && !s0)
				y =  a * b -1;
				else if(s3 &&  s2 && !s1 && !s0)
				y = a + a_bar_deci
				else if(s3 &&  s2 && !s1 && s0)
				y  =(a + b) +a;
				else if(s3 &&  s2 && s1 && !s0)
				y = (a + b_bar_deci) + a;
				else if(s3 &&  s2 && s1 && s0)
					y = a-1;
				
					
				}
				else
				{
					/*with carry*/
				if(!s3 && !s2 && !s1 && !s0)
					y = a +1
				else if(!s3 && !s2 && !s1 && s0)
					y = (a+b)+1
				else if(!s3 && !s2 && s1 && !s0)
					y = a + b_bar_deci+1
				else if(!s3 && !s2 && s1 && s0)
					y = b_bar_decimal + 1
				else if(!s3 && s2 && !s1 && !s0)
					y = a+(a * b_bar_deci)+1
				else if(!s3 && s2 && !s1 && s0)
					y = (a+ b)+ ( a * b_bar_deci)+1
				else if(s3 && s2 && s1 && !s0)
					y = a - b 
				else if(!s3 && s2 && s1 && s0)
					y = (a * b_bar_deci) 
				else if(s3 &&  !s2 && !s1 && !s0)
					y = a + (a*b)+1
				else if(s3 &&  !s2 && !s1 && s0)
					y = a+b+1;
				else if(s3 &&  !s2 && s1 && !s0)
					y = a + b_bar_deci + (a*b)+1
				else if( s3 &&  !s2 && !s1 && !s0)
				y =  a * b ;
				else if(s3 &&  s2 && !s1 && !s0)
				y = a + a_bar_deci+1
				else if(s3 &&  s2 && !s1 && s0)
				y  =(a + b) +a+1;
				else if(s3 &&  s2 && s1 && !s0)
				y = (a + b_bar_deci) + a+1;
				else if(s3 &&  s2 && s1 && s0)
					y = a;
				
			
				}
			}
		}
	
		var temp = y.toString(2);
		for(var i =0 ;i<4;i++)
		{
			this.o[i] = parseInt(temp % 10) 
			temp = temp/10;
		}
		for(var i=0;i<this.o.length ; i++) 
			this.setalu(this.o[i], "_OUTPUT"+i); 
	},
	setalu : function(bStatus,output)
	{
	this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
});

//Comparator container an logic----------
ComparatorContainer = function(opts,layer){
	ComparatorContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = [];
	this.o = []
} 
YAHOO.lang.extend(ComparatorContainer, LogicContainer, {
	xtype: "ComparatorContainer",
	setInput: function(bStatus,term)
	{//alert(this.title);
		var y0 ,y1,y2;
		this.logicInputValues[term.name] = bStatus;
		if (this.title == "Comparator_1")
		{ 
			var a= this.logicInputValues["_INPUT0"]
			var b = this.logicInputValues["_INPUT1"]
			if(a>b){
			y0 = 1; y1 = 0 ;  y2 = 0;}
		
			if(a==b){
			y0 = 0; y1 = 1 ;  y2 = 0;}
			
			if(a<b){
			y0 = 0; y1 = 0 ;  y2 = 1;}
			
			this.setcomparator(y0, "_OUTPUT0");
			this.setcomparator(y1, "_OUTPUT1");
			this.setcomparator(y2, "_OUTPUT2");
		
		}
		else if (this.title == "Comparator_2"){ 
			var a0= this.logicInputValues["_INPUT0"]
			var a1 = this.logicInputValues["_INPUT2"]
			var b0= this.logicInputValues["_INPUT3"]
			var b1 = this.logicInputValues["_INPUT1"]
			var aGb = (a1 && !b1) || ( a0 * !b1 * !b0) || (a1 * a0 * !b0)
			this.setcomparator(aGb, "_OUTPUT0");
			var bGa = (!a1 && b1) || ( !a0 * b1 * b0) || (!a1 * !a0 * b0)
			this.setcomparator(bGa, "_OUTPUT1");
			var aEb = !(aGb || bGa);
			
			this.setcomparator(aEb, "_OUTPUT2");
			
			}
		else if (this.title == "Comparator_4"){ 
			var a0 = this.logicInputValues["_INPUT0"]
			var b0 = this.logicInputValues["_INPUT4"]
			var a1 = this.logicInputValues["_INPUT1"]
			var b1 = this.logicInputValues["_INPUT5"]
			var a2 = this.logicInputValues["_INPUT2"]
			var b2 = this.logicInputValues["_INPUT6"]
			var a3 = this.logicInputValues["_INPUT3"]
			var b3 = this.logicInputValues["_INPUT7"]
			  //for y1
			  var y1=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * !(a0 * !b0 || !a0 * b0)
			 this.setcomparator(y1, "_OUTPUT1");
			  var y2=(a3 * !b3)
			  var y3=!(a3 * !b3 || !a3 * b3) * (a2 * !b2)
			  var y4=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * (a1 * !b1)
			  var y5=!(a3 * !b3 || !a3 * b3) * !(a2 * !b2 || !a2 * b2) * !(a1 * !b1 || !a1 * b1) * (a0 * !b0)
			  var y6=y2 + y3 + y4 + y5
			  this.setcomparator(y6, "_OUTPUT0");
			  var y7=!(y1 || y6)
			  this.setcomparator(y7, "_OUTPUT2");
			  
			}
		
		
	},
	setcomparator : function(bStatus,output)
	{
	this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					
					wire.color = bStatus ? "rgb(0,0,128)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}
	
});
multiplierContainer = function(opts,layer){
	multiplierContainer.superclass.constructor.call(this,opts,layer);
	this.logicInputValues = [];

} 
YAHOO.lang.extend(multiplierContainer, LogicContainer, {
	xtype: "multiplierContainer",
	setInput: function(bStatus,term) {
		//alert(this.title)
		this.logicInputValues[term.name] = bStatus;
		if (this.title == "multiplier_2"){
			
		var a0 = this.logicInputValues["_INPUT0"] 
		var a1 = this.logicInputValues["_INPUT1"] 
		var b0 = this.logicInputValues["_INPUT2"] 
		var b1 = this.logicInputValues["_INPUT3"] 
		
		var p0 = a0 * b0;
		this.setmultiplier(p0, "_OUTPUT0");
	
		var p1 = (a0 * b1) * !(a1 * b0) || !(a0 * b1) * ( a1 * b0)
		this.setmultiplier(p1, "_OUTPUT1");
	
		var p2 =(a1 * b1 * !b0 )|| (a1 * !a0 * b1);
		this.setmultiplier(p2, "_OUTPUT2");
	
		var p3 =(a1 * a0 *b1 * b0)
		this.setmultiplier(p3, "_OUTPUT3");
		}
		
	
	
	
	
 else if (this.title == "multiplier_3"){
 	
		a0 =  this.logicInputValues["_INPUT0"] 
		a1 =  this.logicInputValues["_INPUT1"] 
		a2 =  this.logicInputValues["_INPUT2"] 
		b0 =  this.logicInputValues["_INPUT3"] 
		b1 =  this.logicInputValues["_INPUT4"] 
		b2 =  this.logicInputValues["_INPUT5"] 
	
		
		var m1=a2 * b2
		var m2=a2 * b1
		var m3=a1 * b2
		var m4=a2 * b0
		var m5=a1 * b1
		var m6=a0 * b2
		var m7=a0 * b1
		var m8=a1 * b0
		var m9=a0 * b0
		
		var m11=m2 * !m3 || !m2 * m3
		//alert("m11 :"+m11)
		var m13=m5 * m9
		var m12=m5 * !m13 || !m5 * m13
		var m10=m1 * m12
		var m14=m7 * !m8 || !m7 * m8
		var m15=m1 * !m10 || !m1 * m10
		var m16=m12 * !m6 || !m12 * m6
		var m17=m4 * !m12 || !m4 * m12
		var m20=m16 * m17
		var m19=m5 * !m20 || !m5 * m20
		
		var m18=m11 * m19
		var m21=m18 || m5
		var m22=m11 * !m19 || !m11 * m19
		
		var m23=m4 * !m16 || !m4 * m16
		
		
		
		var P1=m14
		this.setmultiplier(P1, "_OUTPUT1");
		
		var P0=m9
		this.setmultiplier(P0, "_OUTPUT0");
		
		var P2=m23
		this.setmultiplier(P2, "_OUTPUT2");
		var P3=m22
		this.setmultiplier(P3, "_OUTPUT3");
		var P4=m15 * !m18 || !m15 * m18
		this.setmultiplier(P4, "_OUTPUT4");
		var P5=m1 * m21
		this.setmultiplier(P5, "_OUTPUT5");
		}
		
	},	
		
		
	setmultiplier : function(bStatus,output){
	this.status = bStatus;
		
		// Set the image
		if(this.imageName) {
			var image = this.imageName+"_"+(bStatus ? "on" : "off")+".png";
			YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(images/"+image+")");
		}
		for(var i = 0 ; i < this.terminals.length ; i++) {
			var term = this.terminals[i];
			if(term.name == output ) {
				for(var j = 0 ; j < term.wires.length ; j++) {
					var wire = term.wires[j];
					var otherTerm = wire.getOtherTerminal(term);
					if(otherTerm.container) {
						otherTerm.container.setInput(bStatus, otherTerm);
					}
					wire.color = bStatus ? "rgb(173,216,230)" : "rgb(0,0,0)";
					wire.redraw();
				}
			}
		}
	}

});
	
YAHOO.util.Event.onDOMReady( function() { 
	if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
    else
    {
	try {
		logicGates = new WireIt.WiringEditor(logicGatesLang); 
				
	}catch(ex) {
		
	}
	}
});


