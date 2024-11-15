// Fonction pour calculer le taux de change en utilisant les données pré-définies
function calculerTauxDeChange(deviseDe, deviseVers) {
    const tauxDeChange = {
        USD: { EUR: 0.85, MAD: 8.93, GBP: 0.72, JPY: 110.61, CAD: 1.21, CHF: 0.91, AUD: 1.30 },
        EUR: { USD: 1.18, MAD: 10.51, GBP: 0.90, JPY: 129.53, CAD: 1.48, CHF: 1.08, AUD: 1.53 },
        MAD: { USD: 0.11, EUR: 0.095, GBP: 0.081, JPY: 12.33, CAD: 0.14, CHF: 0.10, AUD: 0.15 },
        GBP: { USD: 1.39, EUR: 1.12, MAD: 12.38, JPY: 143.56, CAD: 1.64, CHF: 1.20, AUD: 1.70 },
        JPY: { USD: 0.0090, EUR: 0.0077, MAD: 0.081, GBP: 0.0070, CAD: 0.011, CHF: 0.0084, AUD: 0.012 },
        CAD: { USD: 0.82, EUR: 0.68, MAD: 7.48, GBP: 0.61, JPY: 90.56, CHF: 0.74, AUD: 1.04 },
        CHF: { USD: 1.10, EUR: 0.93, MAD: 9.86, GBP: 0.83, JPY: 107.85, CAD: 1.36, AUD: 1.40 },
        AUD: { USD: 0.77, EUR: 0.65, MAD: 7.18, GBP: 0.59, JPY: 83.95, CAD: 0.96, CHF: 0.71 }
    };

    if (!(deviseDe in tauxDeChange) || !(deviseVers in tauxDeChange[deviseDe])) {
        return "Veuillez sélectionner des devises valides.";
    }

    return tauxDeChange[deviseDe][deviseVers];
}

// Fonction pour convertir un montant d'une devise à une autre
function convertirMontant(montant, deviseDe, deviseVers) {
    const tauxDeChange = calculerTauxDeChange(deviseDe, deviseVers);

    if (typeof tauxDeChange === 'string') {
        return tauxDeChange; // Retourner un message d'erreur
    }

    const montantConverti = (montant * tauxDeChange).toFixed(2);
    return montantConverti;
}

// Événement de clic pour calculer le taux de change
document.getElementById("calculerTaux").addEventListener("click", function() {
    const deviseDe = document.getElementById("devise1").value;
    const deviseVers = document.getElementById("devise2").value;
    const taux = calculerTauxDeChange(deviseDe, deviseVers);
    document.getElementById("resultatTaux").textContent = "Le taux de change entre " + deviseDe + " et " + deviseVers + " est de " + taux.toFixed(2);
});

// Événement de clic pour convertir le montant
document.getElementById("convertirMontant").addEventListener("click", function() {
    const montant = parseFloat(document.getElementById("montant").value);
    const deviseDe = document.getElementById("devise3").value;
    const deviseVers = document.getElementById("devise4").value;
    const resultat = convertirMontant(montant, deviseDe, deviseVers);
    document.getElementById("resultatConversion").textContent = "Le montant converti de " + montant + " " + deviseDe + " à " + deviseVers + " est de " + resultat;
});
