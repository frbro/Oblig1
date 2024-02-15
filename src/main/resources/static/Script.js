const filmer = ["film1", "film2", "film3"];

let bestillinger = [];

const bestillingskjema = document.getElementById("bestillingskjema");
const alleBilletterElement = document.getElementById("alle-billetter");
const slettAlleBilletterBtn = document.getElementById("slett-alle-billetter");

bestillingskjema.addEventListener("send", (event) => {
    event.preventDefault();

    const film = document.getElementById("film").value;
    const antall = parseInt(document.getElementById("antall").value);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const epost = document.getElementById("epost").value;