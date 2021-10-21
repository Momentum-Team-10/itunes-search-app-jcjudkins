/*
This project is to learn to use apple Itunes API in order to pull data.
Overview: Will allow user to pull and display song titles
and then allow the user to select and play song previews.

1. Must have an <input> form to allow you to enter a band name/artist
    -Need to create a FORM that includes an input for search.
    -Needs to not reset
    -Needs to return a result list
2. Submit button that will trigger (click or hit enter) a search in the Apple API
    -Button needs an event listener that triggers the API search
3. When the API returns a response, this should show a response list of songs related to your search.
    -Result from the listner should be a LIST of songs related to search (OL,UL,LI). 
4. When a user clicks on a song it will play in an <audio> tag.
    -Need to include a button that allows the song to be played in the audio box.
    -(can you make the song title the button? do I need to put thesong results into a clickable button?)

REQUIREMENTS!!!!

[] A user can search by artist or band name.
[] Validate the search (require) request so nothing is sent that is empty.
[] Display results without refreshing page (preventDefault)
[] Results should include song details. TITLE is required. 
    -Consider Artist name, album title, album image, and release date 
[] Restrict the number of results? Is there a way to find top 10? Needs a NULL response if nothing.
[] Should handle if error comes back (not in 200 range) needs to show the user if there is an error.
[] Allow user to click on song to play preview.
[] Should be nicely sytled. User experience needs to be considered. (Easy to interact) 
*/
const url = `https://itunes.apple.com/search?term=`;
const searchLimit = '&limit=25';
const input = document.querySelector('#input')
const result = document.querySelector('#result');
const form = document.querySelector('#control')
const searchButton = document.getElementById('button')

// input.addEventListener('input', function(){
//     result.textContent = 
//     this.value;
    
// })

//this should bring input text to artistInput but (FORM????)
document.getElementById('button')('click', (e) => {
    e.preventDefault();
    const artistInput = document.getElementById('input').value;
addArtist(artistInput);
console.log(e.target.value)
form.reset();
});



//this function is to actually do the search on itunes
function songSearch() {
fetch(url + `${songObj}` + searchLimit)
    .then((response) => response.json())
    .then((data) => {
        for (let item of data) {
            renderArtistSong(item);
        }
    });
}

//sets 
function renderArtistSong(songObj) {
    const li = document.createElement('li');
    li.artistName = songObj.artistName;
    li.trackName = songObj.trackName;
    li.collectionName = songObj.collectionName
    renderInputText(li, songObj);
    songlist.appendChild(li);
}

// function renderInputText(li, songObj) {
//     li.innerHTML = 
//     <h2>${songObj.collectionName}`</h2>
//     <input

// }

// fetch('https://itunes.apple.com/search?term=`${artistInput}`&limit=25')
//     .then(response => response.json())
//     .then(data => console.log(data));