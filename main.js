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

RenderTable(tomb) // Meghívjuk a táblázat megjelenítésére szolgáló függvényt

const form = formGeneralas() // A form elem lekérése

form.addEventListener('submit', function(e){ // Űrlap elküldésére figyelő eseménykezelő
    e.preventDefault() // Megakadályozzuk az alapértelmezett űrlapküldést
    const nemzetHTML = document.getElementById('szarmazas') // Nemzetiség mező kiválasztása
    const szerzo1HTML = document.getElementById('szerzo1') // Első szerző mező kiválasztása
    const mu1HTML = document.getElementById('szerzo1mu') // Első mű mező kiválasztása
    const szerzo2HTML = document.getElementById('szerzo2') // Második szerző mező kiválasztása
    const mu2HTML = document.getElementById('szerzo2mu') // Második mű mező kiválasztása
    
    const errorszoveg = "A mező kitöltése kötelező!" // Az error szöveg változó, amely az üres mezőkre figyelmeztet
    const aktualis = e.currentTarget // Az aktuális űrlapot eltároljuk egy változóban
    const errorok = aktualis.querySelectorAll('.error') // Az összes 'error' osztályú elemet lekérdezzük
    let valid = true // A validálás alapértelmezett értéke igaz (true)

    const nemzetV = nemzetHTML.value // A nemzHTML mező értékét eltároljuk a nemzetV változóban
    const szerzo1V = szerzo1HTML.value // A szerzo1HTML mező értékét eltároljuk a szerzo1V változóban
    const mu1V = mu1HTML.value // A mu1HTML mező értékét eltároljuk a mu1V változóban
    const szerzo2V = szerzo2HTML.value // A szerzo2HTML mező értékét eltároljuk a szerzo2V változóban
    const mu2V = mu2HTML.value // A mu2HTML mező értékét eltároljuk a mu2V változóban

    for(const i of errorok){ // Végigmegyünk az összes hibaüzeneten
        i.innerHTML = "" // Az összes hibaüzenet tartalmát töröljük
    }

    if(!validacio(nemzetHTML, errorszoveg)){ // Ha a validáció false-sal tér vissza:
        valid = false // A validálás sikertelen lesz
    }
    if(!validacio(szerzo1HTML, errorszoveg)){ // Ha a validáció false-sal tér vissza:
        valid = false // A validálás sikertelen lesz
    }
    if(!validacio(mu1HTML, errorszoveg)){ // Ha a validáció false-sal tér vissza:
        valid = false // A validálás sikertelen lesz
    }
    if(!kettovalidacio(szerzo2HTML, mu2HTML, errorszoveg)){ // Meghívjuk a kettovalidacio függvényt a szerzo2HTML és mu2HTML elemekre. Ha a visszatérési érték false, akkor belépünk a feltételbe
        valid = false; // A valid változót false-ra állítjuk, jelezve, hogy a validáció nem sikerült
    }
    
    if(valid){ // Ha az összes kötelező mező megfelelően ki van töltve
        if(szerzo2V == "" && mu2V == ""){ // Ha a második szerző és mű mezők üresek, akkor az objektumot csak az első szerző és mű adataival hozzuk létre
            const ujObj = { 
                nemzet: nemzetV, // A nemzetiség tulajdonság értéke
                szerzo: szerzo1V, // Az első szerző neve
                mu: mu1V // Az első mű címe
            };
            tomb.push(ujObj); // Az objektumot hozzáadjuk a tömbhöz
        }
        else { 
            const ujObj = { // Ha a második szerző és mű is ki van töltve, akkor ezekkel együtt mentjük az adatokat
                nemzet: nemzetV, // A nemzetiség tulajdonság értéke
                szerzo: szerzo1V, // Az első szerző neve
                mu: mu1V, // Az első mű címe
                szerzo2: szerzo2V, // A második szerző neve
                mu2: mu2V // A második mű címe
            };
            tomb.push(ujObj); // Az objektumot hozzáadjuk a tömbhöz
        }
    }
    
    table.innerHTML = "" // Táblázat törlése
    RenderTable(tomb) // Táblázat újragenerálása
})