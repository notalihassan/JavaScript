const accessKey = 'sjKwO9k-puOwM3onQxn0azn6lVyHKkmT7dhSinM2Fvw'
const searchForm = document.querySelector('form')
const serachInput = document.querySelector('.search-input')
const imageContainter = document.querySelector('.image-container')


// Funtion to fetch api
const fetchImages = async (query) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    /*Ab jo hmare pas data a rha ha voh array me ha to uske liay hum loop ka use krein ge */
    
    
}

//eventlistner for search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();  //prevent auto submission
    
    const inputText = serachInput.value.trim(); //trim() is used for starting&leading spaces will be removed
    if( inputText !== ''){
        fetchImages(inputText);
    }else{
        imageContainter.innerHTML = `<h2>Please enter a search querry!</h2>`
    }
    
    
})