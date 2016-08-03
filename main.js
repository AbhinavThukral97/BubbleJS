$(document).ready(function(){

	//Parameters
	var n = 100; //No. to be generated 
	var tslow = 40000; //Time in milliseconds - Threshold 10s 
	var ni = 40 //Initial No.
	var widthpercent = 96 //Width Percent of generation

	//Defaults - fixed elements
	var tfast = 0.75*tslow;
	var tmed = 0.9*tslow;
	var genr = tslow/n;
	var widran1 = (100 - widthpercent)/2;
	var widran2 = widthpercent - widran1; 

	var string1="<svg height='50' width='60' class='";
	var string2=" posn' style='top: ";
	var string3="; left: ";
	var string4="'><polygon class='triangle' points='5,45 30,5 55,45'/></svg>";

	var arrsize=["size-sm","size-md","size-lg"];
	var arrspeed=["speed-slow","speed-med","speed-fast"];

	var sheight=$('section.main').outerHeight();
	$('.svg-wrapper').css('height',sheight);

	var rspeed,rsize,posx,posy;
	var topval,leftval,classvar,timevar,classname, cvar;
	var s=0;
	var e=ni;

	//Remove Range Function
	function remove(start, end)
	{
		for(var i=start;i<end;i++){
			cvar = ".c"+i;
			$(cvar).remove();
		}
	}

	//Initiallization Function
	for(var i=0;i<ni;i++)
	{
		rspeed=Math.floor(Math.random()*3);
		rsize=Math.floor(Math.random()*3);
		posy=Math.floor(Math.random()*sheight);
		posx=Math.floor(Math.random()*widran2);
		posx+=widran1;
		topval=posy+"px";
		leftval=posx+"%";
		classvar= "c"+(i+1);
		classname= ".c"+(i+1);
		$( ".svg-wrapper" ).append(string1 + arrsize[rsize] + " " + arrspeed[rspeed] + " " + classvar + string2 + topval + string3 + leftval + string4);


		if(rspeed==0){		
			timevar=tslow;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}
		if(rspeed==1){			
			timevar=tmed;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}
		if(rspeed==2){			
			timevar=tfast;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}
	}

	//Generation Function
	setInterval(function(){

		rspeed=Math.floor(Math.random()*3);
		rsize=Math.floor(Math.random()*3);
		posy=Math.floor(Math.random()*sheight);
		posx=Math.floor(Math.random()*94);
		posx+=2;
		topval=posy+"px";
		leftval=posx+"%";
		classvar= "c"+i;
		classname= ".c"+i;

		i++;

		$( ".svg-wrapper" ).append(string1 + arrsize[rsize] + " " + arrspeed[rspeed] + " " + classvar + string2 + topval + string3 + leftval + string4);

		if(rspeed==0){		
			timevar=tslow;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}
		if(rspeed==1){			
			timevar=tmed;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}
		if(rspeed==2){			
			timevar=tfast;
			$(classname).animate({top: (posy-sheight)+'px', opacity: 0},timevar);
		}

	},genr);

	//Deletion Function
	setInterval(function(){
		remove(s,e);
		s=e;
		e=e+n;
	},tslow);

});