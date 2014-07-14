window.onload = initPage;

function initPage() {
  $("table").find("td").each(function(){
  	$(this).click(tileClick);
  });
}

function tileClick(){
	var currDiv=$(this).find("div");
	var currColor=$( "input:radio[name=tilecolor]:checked" ).val();
	if(currColor==null){
		alert("Please select a color before clicking on boxes.");
	}
	else if(!currDiv.hasClass("default")){
		alert("Already applied "+currDiv.attr("class")+" color");
	}
	else{
		currDiv.css('background-color', currColor);
		currDiv.addClass(currColor).removeClass("default");
	}
	
}

function resetColor(){
	alert("reset");

  	var cells = $('table').find("td");
  	cells.each(function(i) {
    		var currDiv = $(this).find("div");
    		currDiv.css('background-color', "#ccc");
		currDiv.removeClass();
		currDiv.addClass("default");
		currDiv.html(i+1);
  	})
}

function randomize(){
   	
   	var colors = ["","","","","","","","",""];
   	var numbers = ["","","","","","","","",""];
   	
   	
   
   	var cells = $('table').find("td")
   	cells.each(function(i){
   		var currDiv = $(this).find("div");
   		colors[i] = $(currDiv).css("background-color");
   		numbers[i] = $(currDiv).html();
   	})
   	
   	
   	var i = 9, j, temp1,temp2;
   	while ( --i !=0 ) {
      		j = Math.floor( Math.random() * ( i + 1 ) );
     		temp1 = numbers[i];
     		temp2 = colors[i];
      		numbers[i] = numbers[j];
      		colors[i] = colors[j]; 
      		numbers[j] = temp1;
      		colors[j] = temp2;
   	}
  
  

	var cells = $('table').find("td");
	cells.each(function(i){
	var currDiv = $(this).find("div");
	currDiv.css('background-color',colors[i]);
	if(colors[i] == "#ff0000")
	{
		currDiv.removeClass();
		currDiv.addClass("red");
	}
	else if(colors[i] == "#0000ff")
	{
		currDiv.removeClass();
    		currDiv.addClass("blue");
    	}
    	else
    	{	
    		currDiv.removeClass();
    		currDiv.addClass("green");
    	}
    	currDiv.html(numbers[i]);
    	})
    		
}
