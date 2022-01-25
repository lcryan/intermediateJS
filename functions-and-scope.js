// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen.
// Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op
// EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.


/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger).
// Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet,
// ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// Plan :
//1. CumLaude funktion schreiben mit einem for loop : alle werte vom array muessen hier gecheckt werden also ist der
// erwartete wert : arraynumbers. Der forloop kan in die Funktion geschrieben werden.
//i = 0 usw. wird das durch iteriert.
//2. Dan : if else : bei 8 >= wird diese dann eingespeichert.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function cumLaude(arrayGrades) {
    let cumLaudeStudents = 0

    for (let i = 0; i < arrayGrades.length; i++) {
        if (arrayGrades[i] >= 8) {
            cumLaudeStudents = cumLaudeStudents + 1;
        }
    }
    return cumLaudeStudents;
}

const getCumLaudeCertYear1 = cumLaude(grades);

//Antwoord 1b.
const getCumLaudeCertYear2 = cumLaude([6, 4, 5]);
const getCumLaudeCertYear3 = cumLaude([8, 9, 4, 6, 10]);

console.log(getCumLaudeCertYear1);
console.log(getCumLaudeCertYear2);
console.log(getCumLaudeCertYear3);

// ---- Verwachte uitkomst: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal
// Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met
// eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//ZIE BOVEN!

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is,
// maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.


const grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sum = 0;

for (let i = 0; i < grades2.length; i++) {
    sum = sum + grades2[i];
}

console.log(sum / grades2.length);

// ---- Verwachte uitkomst: 6.642857142857143

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en
// het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken,
// zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrade(numbersInArray) {
    let sum = 0;
    for (let i = 0; i < numbersInArray.length; i++) {
        sum = sum + numbersInArray[i];
    }
    return sum / numbersInArray.length;
}

const averageGradeYear1 = averageGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])
const averageGradeYear2 = averageGrade([6, 4, 5]);
const averageGradeYear3 = averageGrade([8, 9, 4, 6, 10]);

console.log(averageGradeYear1);
console.log(averageGradeYear2);
console.log(averageGradeYear3);


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes
// wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


const averageGradeYear12 = averageGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])
const averageGradeYear22 = averageGrade([6, 4, 5]);
const averageGradeYear32 = averageGrade([8, 9, 4, 6, 10]);

console.log(Math.round(averageGradeYear12 * 100) / 100);
console.log(Math.round(averageGradeYear22 * 100) / 100);
console.log(Math.round(averageGradeYear32 * 100) / 100);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is.
// Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag
// jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet,
// ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//1. Wir bauen einen forloop.
//2. In die condition kommt die hoechste Zahl ist ??? Was brauchen wir hierfuer ?
//3. if / else kleiner als
//4. loggen


let largestNumber = 0;
const grades3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]

for (i = 0; i < grades3.length; i++) {

    if (grades3[i] > largestNumber) {
        largestNumber = grades3[i];
    }
}
console.log(largestNumber);

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht
// zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken,
// zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade(numbersInArray) {
    let largestNumber = 0;
    for (i = 0; i < numbersInArray.length; i++) {

        if (numbersInArray[i] > largestNumber) {
            largestNumber = numbersInArray[i];
        }
    }
    return largestNumber
}

const gradesYear1 = highestGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
const gradesYear2 = highestGrade([6, 4, 5]);
const gradesYear3 = highestGrade([8, 9, 4, 6, 10]);

console.log(gradesYear1);
console.log(gradesYear2);
console.log(gradesYear3);

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
