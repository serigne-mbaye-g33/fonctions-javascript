//fonction qui inverse une chaine donnèe
function stringManipulation(str){
    str = Array.from(str);
    str = str.reverse();
    str = str.join("")
    
    console.log(str);
    return str;
    }
    
    stringManipulation("message");
    
// fonction qui compte le nombre de caractères dans une chaîne 
    let message = "you write in javascript"
    console.log('la variable message contient ' + message.length + ' caractères.');
    
//fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
    function capitalizeWords(sentence) {
        return sentence
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    const phrase = "bonjour tout le monde";
    const resultat = capitalizeWords(phrase);
    console.log(resultat);