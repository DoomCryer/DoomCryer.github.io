/* Load the YouTube API */

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// Replace the 'ytplayer_*' element(s) with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    $('[id^=ytplayer_]').each(function() {
    
        var varray= this.id.split('_');
        // ignore varray[0] (ytplayer) we don't need it anymore
        var vwidth = varray[1];
        var vheight = varray[2];
        // since "_" is a valid yt video id character and javascript split's limit doesn't combine the leftovers we need to combine manually...
        var vidid = varray[3];
        for (var i=4; i<varray.length; i++) {
            vidid += "_"+varray[i];
        }
        player = new YT.Player(this.id, {
        width: vwidth,
        height: vheight,
        videoId: vidid,
        playerVars: {
            autohide: 1,
            showinfo: 0,
            rel: 0,
            wmode: "transparent"
        },
        events: {
                    //'onReady': onPlayerReady
                  }
        });
       
    });
  }       


/*function onPlayerReady(event) {
     event.target.setPlaybackQuality('hd720');
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality('hd720');
    }
}*/