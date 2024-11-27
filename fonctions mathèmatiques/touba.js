// fonction pour calculer la factorielle d'un nombre donné
function facto(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * facto( n - 1);
    }
}
console.log(facto());

// fonction pour vérifier si un nombre est premier ou non
function isprime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes
function genererFibonacci(nbTermes) {
    if (nbTermes <= 0) {
        return [];
    }
    if (nbTermes === 1) {
        return [0];
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < nbTermes; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}