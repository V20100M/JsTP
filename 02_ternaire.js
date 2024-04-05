
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    let maxvalue = a > b ? a : 
            a === b ? "même valeur" 
            : b;
            return maxvalue;
}

console.log(ternaire(1, 2));

module.exports = ternaire;