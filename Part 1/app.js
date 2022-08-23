let FavNumber = 13; 
let base_url = "http://numbersapi.com/"; 


// 1 
async function part1() {
    let data = await $.getJSON(`$${base_url}/${FavNumber}?json`);
    console.log(data)
}


// 2 
let = Fav_Numbers = [13, 22, 45];
async function part2() {
    let data = await $.getJSON(`${base_url}/${Fav_Numbers}?json`)
    console.log(data);
}


// 3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${base_url}/${FavNumber}?json`))

    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`)
    });
};
part3();