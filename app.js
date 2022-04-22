//jquery to initalize variables containing the search input and 
//all gifs returned from API
const $gifContainer = $("#gif-container");
const $input = $("#search");

function addGif(res){
let numResults = res.data.length;
    if(numResults){
        let randomIndex = Math.floor(Math.random()*numResults);
        let $newDiv = $("<div>");
        let $newGif = $("<img>", {src: res.data[randomIndex].images.original.url});

        $newDiv.append($newGif);
        $gifContainer.append($newDiv);
    }
}

//uses searchTerm to store $input value, and calls addgif function on the response from the 
//Giphy API retrieved using searchTerms value  
$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = $input.val();
    $input.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    addGif(response.data); 
    console.log("Submitted");
});

//removes all GIFs from page
$("#remove").on("click", function(){
    $gifContainer.empty();
});

