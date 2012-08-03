$(document).ready(function(){
   $("#more-work").click(function(event){
   		$("#more-work").fadeOut("fast", function(){

   			 $("#work").fadeIn("slow");

   		});
   });
   $("#more-edu").click(function(event){
   		$("#more-edu").fadeOut("fast", function(){

   			 $("#education").fadeIn("slow");

   		});
   });
   $("#more-awards").click(function(event){
   		$("#more-awards").fadeOut("fast", function(){

   			 $("#awards").fadeIn("slow");

   		});
   });
 });