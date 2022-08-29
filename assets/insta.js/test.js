$('#emoticons a').click(function(){

  var smiley = $(this).attr('title');
  $('#description').val($('#description').val()+" "+smiley+" ");

});