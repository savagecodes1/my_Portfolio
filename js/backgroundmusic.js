let next = document.querySelector('#next');
let play = document.querySelector('#player-btn');
let previous = document.querySelector("#previous");

let play_song = false;
let autoplay = 0;
let index_no = 0;

let track = document.createElement('audio');

let All_song = [
    {
      music: './music/Juice_WRLD_-_Fast.mp3'
    },
    {
        music: './music/Juice_WRLD_-_Lean_Wit_Me_(Lyrics)(240p).mp3'
    },
    {
        music: './music/Benny_Blanco_ft_Juice_WRLD_-_Graduation.mp3'
    },
    {
        music: './music/[Waploaded]_Juice_WRLD_-_Ring_Ring_(feat._Clever)-1551998732.mp3'
    }
]

console.log(All_song)

function load_track(index_no)
{
   track.src = All_song[index_no].music
   track.load();
}

load_track(index_no)

function playing()
{
    if(play_song === false)
    {
        playsong()
    }else
    {
        pausesong()
    }
}

function playsong()
{
    track.play();
    play_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>'
}

function pausesong()
{
    track.pause();
    play_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'
}


function next_Song()
{
    if(index_no < All_song.length - 1)
    {
        index_no += 1;
        load_track(index_no)
        playsong()
    }else
    {
        index_no = All_song.length
        load_track(index_no)
        playsong();
    }
}

function previous_song()
{
    if(index_no > 0)
    {
        index_no -= 1
        load_track(index_no);
        playsong()
    }else
    {
        index_no = 0
        load_track(index_no)
        playsong()
    }
}


next.addEventListener('click', next_Song)
previous.addEventListener('click', previous_song)
play.addEventListener('click', playing)
