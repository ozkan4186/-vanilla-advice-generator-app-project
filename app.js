const span = document.querySelector("#span");

const par = document.querySelector("p");

const dice = document.querySelector(".dice");
const body = document.querySelector("body");
let color;





dice.addEventListener("click", () => {
    myAdvice();
    randomColor();

});


const myAdvice = async () => {

    const url = "https://api.adviceslip.com/advice";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            hata()
            throw new Error("ikaz")

        }

        const data = await response.json();
        span.innerHTML = `ADVICE # ${data.slip.id}`
        par.innerHTML = `${data.slip.advice}`;
        body.style.backgroundColor = `${color}`



    } catch (error) {
        console.log(error)

    }


}

myAdvice();

const hata = () => {
    document.querySelector(".container").innerHTML = `hatali giris`
};


const randomColor = () => {
    let letters = "0123456789ABCDEF".split("");
    color = `#`;
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]

    }
    return color;

}