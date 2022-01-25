// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(emailadres) {
    const getIndexNumber = emailadres.indexOf("@");
    return emailadres.substring(getIndexNumber + 1);
}

const domain1 = getEmailDomain("n.eeken@novi-education.nl");
const domain2 = getEmailDomain("t.mellink@novi.nl");
const domain3 = getEmailDomain("a.wiersma@outlook.com");

console.log(domain1);
console.log(domain2);
console.log(domain3);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


function typeOfEmail(emailadres) {
    const getIndexNumber = emailadres.indexOf("@");
    const domain = emailadres.substring(getIndexNumber + 1);

    if (domain === "novi-education.nl") {
        return "Student"
    } else if (domain === "novi.nl") {
        return "Medewerker"
    } else {
        return "Extern"
    }
}

const mail1 = typeOfEmail("n.eeken@novi-education.nl");
const mail2 = typeOfEmail("t.mellink@novi.nl");
const mail3 = typeOfEmail("a.wiersma@outlook.com");
const mail4 = typeOfEmail("novi.nlaapjesk@outlook.com");


console.log(mail1);
console.log(mail2);
console.log(mail3);
console.log(mail4);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(emailadres) {
    const at = emailadres.includes("@");
    const comma = emailadres.includes(",");
    const fullstop = emailadres.endsWith(".");


    if (emailadres && at && !comma && !fullstop) {
        return "true";
    } else {
        return "false";
    }
}

const toValidate1 = checkEmailValidity("n.eeken@novi-education.nl");
const toValidate2 = checkEmailValidity("t.mellink@novi.nl");
const toValidate3 = checkEmailValidity("tessmellink@novi,nl");
const toValidate4 = checkEmailValidity("n.eekenanovi.nl");
const toValidate5 = checkEmailValidity("n.eeken@novinl.");


console.log(toValidate1);
console.log(toValidate2);
console.log(toValidate3);
console.log(toValidate4);
console.log(toValidate5);
