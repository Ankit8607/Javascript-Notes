const jokes = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');
const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json",
    },
};

// const generatejoke = () => {
//     fetch('https://icanhazdadjoke.com/',options)
//     .then((res) => res.json())
//     .then((data) => jokes.innerHTML = data.joke)
//     .catch((err) => {
//         console.log(err);
//     })
// }
// jokebtn.addEventListener("click",generatejoke);
// generatejoke();

const generatejoke = async () => {
    try{
        const res  = await fetch('https://icanhazdadjoke.com/',options);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }
    catch(err){
        console.log(err)
    }
}
jokebtn.addEventListener("click",generatejoke);
generatejoke();