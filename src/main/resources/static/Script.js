const filmer = ["film1", "film2", "film3"];

let bestillinger = [];

const bestillingskjema = document.getElementById("bestillingskjema");
const alleBilletterElement = document.getElementById("alle-billetter");
const slettAlleBilletterBtn = document.getElementById("slett-alle-billetter");

bestillingskjema.addEventListener("submit", (event) => {
    event.preventDefault();

    const film = document.getElementById("film").value;
    const antall = parseInt(document.getElementById("antall").value);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const epost = document.getElementById("epost").value;

    // Validering av inputfeltene
    if (!validerFilm(film)) {
        alert("Ugyldig film valgt!");
        return;
    }

    if (!validerAntall(antall)) {
        alert("Ugyldig antall billetter!");
        return;
    }

    if (!validerNavn(fornavn)) {
        alert("Ugyldig fornavn!");
        return;
    }

    if (!validerEtternavn(etternavn)) {
        alert("Ugyldig etternavn!");
        return;
    }

    if (!validerTelefonnummer(telefonnummer)) {
        alert("Ugyldig telefonnummer!");
        return;
    }

    if (!validerEpost(epost)) {
        alert("Ugyldig e-postadresse!");
        return;
    }

    // Legg til bestillingen til arrayet og oppdater brukergrensesnittet
    bestillinger.push({
        film,
        antall,
        fornavn,
        etternavn,
        telefonnummer,
        epost,
    });

    oppdaterAlleBilletter();

    // Tøm inputfeltene
    bestillingskjema.reset();
});

slettAlleBilletterBtn.addEventListener("click", () => {
    bestillinger = [];
    oppdaterAlleBilletter();
});

function validerFilm(film) {
    return filmer.includes(film);
}

function validerAntall(antall) {
    return antall > 0 && antall <= 10;
}

function validerNavn(navn) {
    const regex = /^[a-zA-ZæøåÆØÅ]+(?: [a-zA-ZæøåÆØÅ]+)*$/;
    return regex.test(navn);
}

function validerEtternavn(navn) {
    const regex = /^[a-zA-ZæøåÆØÅ]+$/;
    return regex.test(navn);
}

function validerTelefonnummer(telefonnummer) {
    const regex = /^\d{8}$/;
    return regex.test(telefonnummer);
}

function validerEpost(epost) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(epost);
}

function oppdaterAlleBilletter() {
    alleBilletterElement.innerHTML = "";

    for (const bestilling of bestillinger) {
        const liElement = document.createElement("li");
        liElement.innerHTML = `
      <p>Film: ${bestilling.film}</p>
      <p>Antall billetter: ${bestilling.antall}</p>
      <p>Navn: ${bestilling.fornavn} ${bestilling.etternavn}</p>
      <p>Telefonnummer: ${bestilling.telefonnummer}</p>
      <p>E-postadresse: ${bestilling.epost}</p>
    `;

        alleBilletterElement.appendChild(liElement);
    }
}
