$(document).ready(function(e) {
    
    $("form[ajax=true]").submit(function(e) {
        
        e.preventDefault();
        
        var form_data = $(this).serialize();
        var form_url = $(this).attr("action");
        var form_method = $(this).attr("method").toUpperCase();
        
        //$("#loadingimg").show();
        
         $.ajax({
            url: form_url, 
            type: form_method,      
            data: form_data,     
            cache: false,
            success: function(returnhtml){                          
                $("#result").html(returnhtml); 
                //$("#loadingimg").hide();                    
            }           
        });    
        


        
    });
});

    function read(){
        setTimeout("read()",1000);
        console.log("GET")
        $.get("/node/barcode", function (data) {
            $("#code").val(data)
            })
    }

    read();
    
    function Reset(){
        location.reload();
      }