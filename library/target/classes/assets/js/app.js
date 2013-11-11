
$(":button").click(function() {
	var isbn = this.id;   
    alert('About to report lost on ISBN ' + isbn); 
	$.ajax({
            type:"PUT",
            url: "v1/books/"+isbn+"?status=lost",
            async:false,
            complete: updateStatus(isbn)                
            });   	
});

function updateStatus(isbn){        
       // var bookStatus = "#"+isbn+"_status";
        var bookStatus = "#"+isbn+"bstatus";
        //var bookStatus = "#"+"bstatus";
        var lostButton = "#"+isbn;
        $(bookStatus).html("lost");
        $(lostButton).attr("disabled", "disabled");
    }


    