var vitrina_timer = 7000;

$(document).ready(function(){
    
    $("#fullslider .item:first").show();    
    
    var i=1;
    $("#fullslider .item").each(function(){
        if(i==1){var active = ' class="active" ';}
        else { var active = ''; }
        
        $(this).addClass('item' + i);
        
        $(".fullslidercontrols div.numerales").append('<a href="#" '+active+' rel="'+$(this).attr('id')+'">'+i+'</a>');
        i++;
    });
    
    
    $(document).on('click','.fullslidercontrols a:not(.next, .prev)',function(e){
        e.preventDefault();
        var id = $(this).attr('rel');
        $("#fullslider .item").fadeOut(800);
        $("#fullslider .item").eq((parseInt($(this).text())-1)).fadeIn(800);
        $(".fullslidercontrols a").removeClass('active');
        $(this).addClass('active');
        cont = (parseInt($(this).text())-1);
    });
    
    var cont = 0;
    
    if( $("#fullslider.interior").length > 0 )
    var cont = 1;
    
    $(document).on('click','.fullslidercontrols a.next',function(e){
        e.preventDefault();
        $("#fullslider .item").eq(cont).fadeOut(500);
        cont++;
        if(cont == $("#fullslider .item").length){
            cont = 0;
        }
        $("#fullslider .item").eq(cont).fadeIn(500);
        
        $(".fullslidercontrols div.numerales a").removeClass('active');
        $(".fullslidercontrols div.numerales a").eq(cont).addClass('active');
        
    });
    

    $(document).on('click','.fullslidercontrols a.prev',function(e){
        e.preventDefault();
        $("#fullslider .item").eq(cont).fadeOut(500);
        cont--;
        if(cont < 0){
            cont = ($("#fullslider .item").length - 1);
        }
        $("#fullslider .item").eq(cont).fadeIn(500);
        
        $(".fullslidercontrols div.numerales a").removeClass('active');
        $(".fullslidercontrols div.numerales a").eq(cont).addClass('active');
        
    });
    
    /*
    $("#fullslider").hover(function(){
        var inter2 = self.clearInterval(inter);
    },function(){
        inter = self.setInterval("goVitrina()",vitrina_timer);
    });
    */
    
});


var inter = self.setInterval("goVitrina()",vitrina_timer);

function goVitrina() {
  $(".fullslidercontrols.interior a.next, .fullslidercontrols.home a.next").click();
}