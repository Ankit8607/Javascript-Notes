const numbers = document.querySelectorAll('.number');

numbers.forEach((element) => {
    element.innerHTML = 0;
    const updateCounter = () =>{
        const targetCount = +element.getAttribute('data-target');
        const startingCount = Number(element.innerHTML);
        const incr = targetCount/100;
        if(startingCount < targetCount){
            element.innerHTML = `${startingCount + incr}`;
            setTimeout(updateCounter,10);
        }else{
            element.innerHTML = targetCount;
        }
    }
    updateCounter();
});