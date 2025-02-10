const fejlec = { // A táblázat fejlécének objektuma
    nemzet: "Nemzetiség", // A fejléc első oszlopának címe
    szerzo: "Szerző", // A fejléc második oszlopának címe
    mu: "Mű" // A fejléc harmadik oszlopának címe
}
const tomb = [ // Az adatok tárolására szolgáló tömb
    {
        nemzet: "Orosz", // Az első objektum nemzetisége
        szerzo: "Gogol", // Az első szerző neve
        mu: "A köpönyeg", // Az első mű címe
        szerzo2: "Csehov", // A második szerző neve (ha van)
        mu2: "A csinovnyik halála" // A második mű címe (ha van)
    },
    { 
        nemzet: "Cseh", // A második objektum nemzetisége
        szerzo: "Franz Kafka", // A második szerző neve
        mu: "Az átváltozás" // A második mű címe
    },
    { 
        nemzet: "Magyar", // A harmadik objektum nemzetisége
        szerzo: "Örkény István", // A harmadik szerző neve
        mu: "Egyperces Novellák", // A harmadik mű címe
        szerzo2: "József Attila", // A negyedik szerző neve (ha van)
        mu2: "Klárisok" // A negyedik mű címe (ha van)
    },
    { 
        nemzet: "Svájc", // A negyedik objektum nemzetisége
        szerzo: "Friedrich Dürrenmatt", // A negyedik szerző neve
        mu: "A fizikusok" // A negyedik mű címe
    }
]
const table = document.createElement('table') // Létrehozunk egy táblázat elemet
document.body.appendChild(table) // Hozzáadjuk a táblázatot a dokumentum törzséhez
function RenderTable(){ // Függvény a táblázat megjelenítésére
    const thead = document.createElement('thead') // Létrehozzuk a táblázat fejlécelemét
    table.appendChild(thead) // A fejlécet hozzáadjuk a táblázathoz
    const tr_h = document.createElement('tr') // Létrehozunk egy sort a fejlécben
    thead.appendChild(tr_h) // A sort hozzáadjuk a fejléchez
    const th1 = document.createElement('th') // Létrehozzuk az első oszlop fejlécét
    th1.innerHTML = fejlec.nemzet // Beállítjuk a fejléc szövegét
    tr_h.appendChild(th1) // Hozzáadjuk a fejléc sort az oszlophoz
 
    const th2 = document.createElement('th') // Létrehozzuk a második oszlop fejlécét
    th2.innerHTML = fejlec.szerzo // Beállítjuk a fejléc szövegét
    tr_h.appendChild(th2) // Hozzáadjuk a fejléc sort az oszlophoz
    const th3 = document.createElement('th') // Létrehozzuk a harmadik oszlop fejlécét
    th3.innerHTML = fejlec.mu // Beállítjuk a fejléc szövegét
    tr_h.appendChild(th3) // Hozzáadjuk a fejléc sort az oszlophoz
    const tbody = document.createElement('tbody') // Létrehozzuk a táblázat törzsét
    table.appendChild(tbody) // A táblázat törzsét hozzáadjuk a táblázathoz
    for(let i = 0; i < tomb.length; i++){ // Végigiterálunk az adatokon
        const tr_body1 = document.createElement('tr') // Első sort létrehozzuk
        tbody.appendChild(tr_body1) // Első sort hozzáadjuk a táblázathoz
        const tr_body2 = document.createElement('tr') // Második sort létrehozzuk
        tbody.appendChild(tr_body2) // Második sort hozzáadjuk a táblázathoz
        const td1 = document.createElement('td') // Első oszlop cellájának létrehozása
        td1.rowSpan = 2 // Cellát két sorra kiterjesztjük
        td1.innerHTML = tomb[i].nemzet // A cella értékének beállítása
        tr_body1.appendChild(td1) // Hozzáadjuk a cellát az első sorhoz
        const td2 = document.createElement('td') // Második oszlop első cellájának létrehozása
        td2.innerHTML = tomb[i].szerzo // Érték beállítása
        tr_body1.appendChild(td2) // Hozzáadás az első sorhoz
        const td3 = document.createElement('td') // Harmadik oszlop első cellájának létrehozása
        td3.innerHTML = tomb[i].mu // Érték beállítása
        tr_body1.appendChild(td3) // Hozzáadás az első sorhoz
        if(tomb[i].szerzo2 && tomb[i].mu2){ // Ha van második szerző és mű, új sort hozunk létre
            const td4 = document.createElement('td') // Új cella létrehozása
            td4.innerHTML = tomb[i].szerzo2 // Érték beállítása
            tr_body2.appendChild(td4) // Cellát a második sorhoz adjuk
            const td5 = document.createElement('td') // Új cella létrehozása
            td5.innerHTML = tomb[i].mu2 // Érték beállítása
            tr_body2.appendChild(td5) // Cellát a második sorhoz adjuk
        }
    } 
}
RenderTable() // Meghívjuk a táblázat megjelenítésére szolgáló függvényt
const form = document.getElementById('form') // Form elem kiválasztása az oldalról
form.addEventListener('submit', function(e){ // Űrlap elküldésére figyelő eseménykezelő
    e.preventDefault() // Megakadályozzuk az alapértelmezett űrlapküldést
    const nemzetHTML = document.getElementById('szarmazas') // Nemzetiség mező kiválasztása
    const szerzo1HTML = document.getElementById('szerzo1') // Első szerző mező kiválasztása
    const mu1HTML = document.getElementById('szerzo1mu') // Első mű mező kiválasztása
    const szerzo2HTML = document.getElementById('szerzo2') // Második szerző mező kiválasztása
    const mu2HTML = document.getElementById('szerzo2mu') // Második mű mező kiválasztása
    const ujObj = { // Új objektum létrehozása
        nemzet: nemzetHTML.value, 
        szerzo: szerzo1HTML.value,
        mu: mu1HTML.value,
        szerzo2: szerzo2HTML.value,
        mu2: mu2HTML.value
    }
    tomb.push(ujObj) // Az új objektum hozzáadása a tömbhöz
    table.innerHTML = "" // Táblázat törlése
    RenderTable() // Táblázat újragenerálása
})