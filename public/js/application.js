$(document).ready(function() {
	getSurfReport();
});
	
function getSurfReport() {
	$('#beach-info-form').on('submit', function(event){
		event.preventDefault();
		var formData = $('#beach').serialize()

	$.ajax({
	url: '/',
	method: 'POST',
	data: formData
	})		
	.done(function(serverData){

	$('.append-area').append(serverData);		
	})
  
  });
}
