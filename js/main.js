$(document).ready(function() {
	$(".sidebar-nav .nav-toggle").click(function(){
	   $(".sidebar-nav ul").slideToggle();
	})
    
    $("input, textarea").keydown(function(){
        $(this).removeClass('error');
    })
    $("#frmContacto .boton").click(function(){
        var err=0;
        $("#frmContacto input.required").each(function(){
            if( $(this).val() == "" ){
                $(this).addClass('error');
                err++;
            }
        })
        if( err == 0 ){
            $.ajax({
    			type: "POST",
    			url: "ajax/ajax.contacto.php",
    			data: $("#frmContacto").serialize(),
                dataType: 'html',
                beforeSend: function(){
                },
    			success: function () {
    			     alert("Gracias por su mensaje\nNos contactaremos a la brevedad");
                     location.reload();
                }
    		})
        }
    })
    
});