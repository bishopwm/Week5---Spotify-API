

var displayInfo = function(infoReceived) {
   	$('.artist-list').append("<img src="+infoReceived.artists.items[0].images[0].url+">");
   	infoReceived.artists.items.forEach(function(singer) { 
   		$('.artist-list').append("<li>"+singer.name+"</li>")
   		})

    }

  	$('#submit').on('click', function(event){
      event.preventDefault();

      var searchArtist = $('form').serialize();

      var requestArtist = $.get('https://api.spotify.com/v1/search?type=artist&' + searchArtist);
      requestArtist.done(displayInfo);
  
	 });