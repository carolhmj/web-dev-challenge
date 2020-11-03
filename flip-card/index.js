var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yee', {
        videoId: "q6EoRBvdVPQ",
        playerVars: {
            origin: window.location.href
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    const card = document.getElementsByClassName("card")[0];
    card.addEventListener('mouseenter', () => {
        player.playVideo();
    });
    card.addEventListener('mouseleave', () => {
        player.stopVideo();
    });
}

window.addEventListener("unload", () => {
    if (player) {
        player.destroy();
    }
})