$(document).ready(function(){

$('.fa-refresh').hover(function(){
    $(this).addClass('fa-spin')
},
function(){    
        $('.fa-refresh').removeClass('fa-spin');     
    });

});


