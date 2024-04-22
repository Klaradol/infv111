// Definování množin
const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7, 8]);
const C = new Set([3, 4, 5]);

// Funkce pro nalezení průniku
function prunik(mnozina1, mnozina2) {
    const prunikMnoziny = new Set();
    for (const prvek of mnozina1) {
        if (mnozina2.has(prvek)) {
            prunikMnoziny.add(prvek);
        }
    }
    return prunikMnoziny;
}

// Funkce pro spočítání sjednocení
function sjednoceni(mnozina1, mnozina2) {
    const sjednocenaMnozina = new Set(mnozina1);
    for (const prvek of mnozina2) {
        sjednocenaMnozina.add(prvek);
    }
    return sjednocenaMnozina;
}

// Funkce pro určení doplňku
function doplnek(mnozina1, mnozina2) {
    const doplnkovaMnozina = new Set(mnozina2);
    for (const prvek of mnozina1) {
        doplnkovaMnozina.delete(prvek);
    }
    return doplnkovaMnozina;
}

// Výpočet výsledků
const prunikAC = prunik(A, C);
const sjednoceniAB = sjednoceni(A, B);
const doplnekA_B = doplnek(A, B);

// Zobrazení výsledků v HTML
const vysledky = document.getElementById('vysledky');
vysledky.innerHTML += `<li>Průnik A a C: ${Array.from(prunikAC)}</li>`;
vysledky.innerHTML += `<li>Sjednocení A a B: ${Array.from(sjednoceniAB)}</li>`;
vysledky.innerHTML += `<li>Doplněk A vzhledem k B: ${Array.from(doplnekA_B)}</li>`;

