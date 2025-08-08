const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';  //hex color = #79E2A6
    for(i=0; i<6; i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;

const start = document.querySelector('#start').addEventListener('click', function(){
    function changeBgcolor(){
        document.querySelector('body').style.backgroundColor = randomColor();
    }
    if(!intervalId){      //doing due to more efficient
        intervalId = setInterval(changeBgcolor, 1000)
    }
})

const stop = document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
})
