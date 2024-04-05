
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    let symbole = a > b ? ">" : 
    a === b ? "=" 
    : "<";
    return symbole;
}

console.log(ternaryChain(8,8))

module.exports = ternaryChain;