
/**
 * Created by mwafi on 24/07/2017.
 */
function fizzBuzzer() {

    var resultat = [];
    for (var i = 0; i < 100; i++) {
        if (i % 15 == 0) {
            //return fizzbuzz si devisible  par 5 et 3
            resultat[i] = "fizzbuzz";
        } else if (i % 3 == 0) {
            //return fizz si devisible  par 3
            resultat[i] = "fizz";
        } else if (i % 5 == 0) {
            //return buzz si devisible  par 5
            resultat[i] = "buzz";
        } else {
            //return i dans les autres cas
            resultat[i] = i;
        }
    }
    return resultat;


}