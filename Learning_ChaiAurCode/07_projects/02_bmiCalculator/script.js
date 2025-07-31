const form = document.querySelector('form')


form.addEventListener('submit', (evnt) => {
    evnt.preventDefault();   //it prevents default action for minute

    const height = parseInt(document.querySelector('#height').value) 
    /* .value gives the value and parseInt is due to give only integer value */
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const bmiGuide = document.querySelector('#bmiGuide')


    if( height == '' || height < 0 || isNaN(height)){ 
        //insted of doing "height != NaN" use isNaN() function 
        alert("Please give a valid Height!");
    }else if( weight == '' || weight < 0 || isNaN(weight) ){
        alert("Please give a valid Weight!");
    }else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);  //.toFixed() is used get only specific number
        //show results 
        results.innerHTML = `<span>${bmi}</span>`;

        //show weight guide

        if (bmi <= 18.6) {
        bmiGuide.innerHTML = "<span>Underweight</span>";
        } else if (bmi > 18.6 && bmi <= 24.9) {
        bmiGuide.innerHTML = "<span>Normal weight</span>";
        } else if (bmi > 24.9) {
        bmiGuide.innerHTML = "<span>Overweight</span>";
        }

    }
    

    


})