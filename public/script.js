
const contentBox = document.querySelector("#content");

// Denne funktion er stykket sammen af fetch og forEach dokumentation fra MDN, og min hukommelse
async function logMovies() {
    const response = await fetch("videos");
    const movies = await response.json();
    console.log(movies);
    movies.forEach((element) => contentBox.innerHTML += element.titel + '<br>');
}

logMovies()

// Meningsløs kode:

// function updateURL() {
//     // Get the user's input from the search field
//     const searchString = document.getElementById("searchField").value;

//     // Encode the user's input to make it URL-safe
//     const encodedSearchString = encodeURIComponent(searchString);

//     // Construct the new URL with the search parameter
//     const newURL = window.location.origin + '/search?q=' + encodedSearchString;

//     // Redirect to the new URL
//     window.location.href = newURL;
// }
