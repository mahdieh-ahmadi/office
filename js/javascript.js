new WOW().init();
$(document).ready(
     function(){
          $("#button").click(
               function(){
                    $("#container").hide();
                    $("#window").show();
               }
          );

          $("#close").click(
               function(){
                    $("#container").show();
                    $("#window").hide();
               }
          );
          $('[data-toggle="popover"]').popover();  
     }
);
 var i = document.querySelector('#spacecounter').offsetTop;
//var i = 680
console.log(i);
window.onscroll = function() {
if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
     document.getElementById("navbar").style.backgroundColor = "blue";
}
else{
     
     document.getElementById("navbar").style.backgroundColor = " rgba(10, 10, 10, 0)";
}
};

