$(document).ready(function() {
	//Function to filter each text box
	$('input').each(function(){
		$(this).change(function() {
			totalChange($(this));
			
		});//end of change
	});// end of each
});

	//Function to calculate cost
	function totalChange(){

		//Declare money currency variables

		var dollar = $("#dollar").val();
		dollar = parseInt(dollar);
		var quarter = $("#quarter").val();
		quarter = parseInt(quarter);
		var dime = $("#dime").val();
		dime = parseInt(dime);
		var nickel = $("#nickel").val();
		nickel = parseInt(nickel);
		var penny = $("#penny").val();
		penny = parseInt(penny);

		//Declare variable for input 
		var cost = $("#cost").val();
		cost = parseFloat(cost);
		var pay = $("#payment").val();
		pay = parseFloat(pay);


		//Calculate Total Change
		var total = (pay - cost).toFixed(2);
		total = parseFloat(total);
		console.log(total);

		//Condition to validate if customer payment is less than the cost amount or if it's not a number
		if(pay < cost){
			$('.output').text('Please provide remaining balance');
		}
		else if(isNaN(pay) && isNaN(cost)){
			$('.output').text('Invalid entry');
		}
		
		//Declares and separate the dollar variable from total change
		dollar = parseInt(total); // equates to total
		var x = (total - dollar).toFixed(2);
		x = parseFloat(x * 100).toFixed(2);	

		//Conditional statement to verify the change amount of coin currency		
		for (var i=0; i < 4; i++) {
			switch (i) {
				case 0:
					quarter = parseInt(x / 25);
					x = x % 25;
					break;
				case 1:					
					dime = parseInt(x / 10);
					x = x % 10;
					break;
				case 2:					
					nickel = parseInt(x / 5);
					x = x % 5;					
					break;
				case 3:					
					penny = parseInt(x);
					console.log(x);					
					break;
				default:
					alert("Thank you!");
					break;
			}
		}
		
		//Output results here
		$('#dollar').html(dollar);
		$('#quarter').html(quarter);
		$('#dime').html(dime);
		$('#nickel').html(nickel);
		$('#penny').html(penny);
		
}//end of function
	
	
