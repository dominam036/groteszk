/**
 * a fejléc legenerálása
 */
function fejlecGeneralas(){ // A fejléc generálása
    const fejlec = { //letrehozzuk a fejlec objetumat
        nemzet: "Nemzetiség", //létrehozzuk a fejlec nemzet tulajdonságát
        szerzo: "Szerző", //létrehozzuk a fejlec szerzo tulajdonságát
        mu: "Mű" //létrehozzuk a fejlec mu tulajdonságát
    }

    const thead = document.createElement('thead'); // Thead elem létrehozása
    table.appendChild(thead); // Thead hozzáadása a táblázathoz
    
    const theadr = document.createElement('tr'); // Tr elem létrehozása
    thead.appendChild(theadr); // Tr hozzáadása a thead-hez
    
    for(const i in fejlec){ // Iterálás a fejlec objektumon
        const theadc = document.createElement('th'); // Th elem létrehozása
        theadc.innerHTML = fejlec[i]; // A th elem szövegének beállítása
        theadr.appendChild(theadc); // Th hozzáadása a tr-hez
    }
}

/**
 * a table legenerálása
 * @param {Array} tomb 
 */
function RenderTable(tomb){ // Függvény a táblázat megjelenítésére
    fejlecGeneralas() // A fejlecGeneralas függvény meghívása

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

/**
 * egy elem validálása
 * @param {HTMLElement} elem 
 * @param {string} errorsz 
 * @returns 
 */
function validacio(elem, errorsz){ // Létrehozzuk a validációs függvényt
    let valid = true // A valid változó alapértelmezett értéke igaz (true)
    if(elem.value === ""){ // Ha az elem értéke üres, akkor belépünk
        const parent = elem.parentElement // Az elem szülő elemét eltároljuk
        const error = parent.querySelector(".error") // Az első 'error' osztályú elemet kiválasztjuk a szülőből
        if(error != ""){ // Ha az error elem létezik
            error.innerHTML = errorsz // Beállítjuk az error szövegét az errorsz paraméter alapján
        }
        valid = false // A validáció sikertelen lesz
    }
    return valid // Visszatérünk a valid változó értékével
}

/**
 * két elem kereszt validálása
 * @param {HTMLElement} elsoelem 
 * @param {HTMLElement} masodikelem 
 * @param {string} errorsz 
 * @returns 
 */
function kettovalidacio(elsoelem, masodikelem, errorsz){  // Létrehozzuk a kettovalidacio nevű függvényt, amely két elem validálására szolgál
    let valid = true; // A valid változó alapértelmezett értéke true, azaz először érvényesnek tekintjük az adatokat
    if(elsoelem.value != "" && !validacio(masodikelem, errorsz)){ // Ellenőrizzük, hogy az elsoelem nem üres, és ha nem, akkor a masodikelem validációját ellenőrizzük
        valid = false; // Ha a masodikelem validációja hibás, akkor a valid változót false-ra állítjuk
    }
    if(masodikelem.value != "" && !validacio(elsoelem, errorsz)){ // Ellenőrizzük, hogy a masodikelem nem üres, és ha nem, akkor az elsoelem validációját ellenőrizzük
        valid = false; // Ha az elsoelem validációja hibás, akkor a valid változót false-ra állítjuk
    }
    return valid; // A függvény visszaadja a valid értékét, ami true, ha minden validáció sikeres, és false, ha van hiba
}

/**
 * legenerálja a form-ot
 * @returns visszaadja a form-ot
 */
function formGeneralas(){ // Létrehozzuk a formGeneralas függvényt, amely létrehozza és hozzáadja a formot az oldalhoz
    const formtomb = [ // Létrehozzuk a formtomb tömböt, amely a form mezőit tartalmazza
        {
            label: "Származás:", // Az első objektumban beállítjuk a "label" tulajdonságot, ami a mező címét adja meg
            id: "szarmazas", // Az első objektumban beállítjuk a "id" tulajdonságot, ami a mező azonosítója
        },
        {
            label: "1. szerző:", // A második objektumban beállítjuk a "label" tulajdonságot, ami a második mező címét adja meg
            id: "szerzo1", // A második objektumban beállítjuk a "id" tulajdonságot, ami a második mező azonosítója
        },
        {
            label: "1. szerző műve:", // A harmadik objektumban beállítjuk a "label" tulajdonságot, ami a harmadik mező címét adja meg
            id: "szerzo1mu", // A harmadik objektumban beállítjuk a "id" tulajdonságot, ami a harmadik mező azonosítója
        },
        {
            label: "2. szerző:", // A negyedik objektumban beállítjuk a "label" tulajdonságot, ami a negyedik mező címét adja meg
            id: "szerzo2", // A negyedik objektumban beállítjuk a "id" tulajdonságot, ami a negyedik mező azonosítója
        },
        {
            label: "2. szerző műve:", // Az ötödik objektumban beállítjuk a "label" tulajdonságot, ami az ötödik mező címét adja meg
            id: "szerzo2mu", // Az ötödik objektumban beállítjuk a "id" tulajdonságot, ami az ötödik mező azonosítója
        }
    ]

    const form = document.createElement('form') // Létrehozunk egy form elemet
    document.body.appendChild(form) // Hozzáadjuk a formot a body-hoz
    form.id = "form" // A form elem id-ját beállítjuk "form"-ra
    form.action = "#" // A form action-jét "#" értékre állítjuk (nem történik semmi, ha elküldjük)
    
    for(let i = 0; i < formtomb.length; i++ ){ // Végigiterálunk a formtomb tömbön, amely a mezők adatokat tartalmazza
        const div = document.createElement('div') // Létrehozunk egy div elemet
        form.appendChild(div) // A div elemet hozzáadjuk a formhoz
        
        const label = document.createElement('label') // Létrehozunk egy label elemet
        div.appendChild(label) // A label-t hozzáadjuk a divhez
        label.innerHTML = formtomb[i].label // A label szövege a formtomb tömb aktuális objektumának "label" tulajdonsága
        
        const br = document.createElement('br') // Létrehozunk egy sortörést (br) a label és az input között
        div.appendChild(br) // A sortörést hozzáadjuk a divhez
        
        const input = document.createElement('input') // Létrehozunk egy input mezőt
        div.appendChild(input) // Az inputot hozzáadjuk a divhez
        input.type = "text" // Az input típusa "text" (szöveges mező)
        input.id = formtomb[i].id // Az input id-ja a formtomb aktuális objektumának "id" tulajdonsága
        input.name = formtomb[i].id // Az input name-je a formtomb aktuális objektumának "id" tulajdonsága
        
        const br2 = document.createElement('br') // Létrehozunk egy másik sortörést (br)
        div.appendChild(br2) // A második sortörést hozzáadjuk a divhez
        
        const span = document.createElement('span') // Létrehozunk egy span elemet az esetleges hibaüzenetek számára
        div.appendChild(span) // A span-t hozzáadjuk a divhez
        span.className = "error" // A span osztályát "error"-ra állítjuk (ez az osztály fogja tartalmazni a hibát)
        
        const br3 = document.createElement('br') // Létrehozunk egy újabb sortörést (br)
        div.appendChild(br3) // Az újabb sortörést hozzáadjuk a divhez
    }
    
    const button = document.createElement('button') // Létrehozunk egy gombot
    button.innerHTML = "Hozzáadás" // A gomb szövege "Hozzáadás"
    form.appendChild(button) // A gombot hozzáadjuk a formhoz
    return form // A form visszaadása
}