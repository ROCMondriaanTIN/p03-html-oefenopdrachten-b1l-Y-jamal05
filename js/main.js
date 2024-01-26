const cars = [
    { title: "audi", description: "audi is goede auto" },
    { title: "ferrari", description: "ferrari's zijn snel" },
    { title: "rolls-royce", description: "rolls-royce zijn luxe auto's" },
    { title: "bmw", description: "bmw's zijn agressieve auto's" },
    { title: "jeep", description: "jeep's zijn goed voor in de natuur" },
    { title: "mercedes", description: "mercedes is een mooie auto" },
    { title: "ford", description: "ford heeft goede pickup trucks" },
    { title: "smart", description: "smart heeft kleine auto's" },
    { title: "fiat", description: "fiat heeft een rare auto vorm (het is denk ik maar 1 auto)" }
]

function createCard(title, description) {
    let cardHTML = `
    <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <button>klik hier</button>
</div>
    `;
    return cardHTML;
}

const cardContainer = document.querySelector(".cards-container");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    cardContainer.innerHTML += createCard(car.title, car.description);
}
