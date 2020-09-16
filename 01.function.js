
let nb1=10;
let nb2=20;

function additionner(nb1,nb2) {
return nb2+nb1;
}
let resultat1 =additionner(nb1,nb2)
console.log("resultat1=" + resultat1);



var somme = function additionner(nb1,nb2){
    return nb2+nb1;
}
let resultat2=somme(nb1,nb2);
console.log("resultat2=" + resultat2);



 function multiplication(nb1,nb2){
    return nb1*nb2;
}

let resultat3 =multiplication(nb2,nb1);
console.log("resultat3=" + resultat3);



function afficherOperation(nomOperation,operation,nb1,nb2) {
console.log(nomOperation,'(',nb1,',',nb2,')=',operation(nb1,nb2));
}
afficherOperation("Somme",additionner,20,40);
afficherOperation("Multiplication",multiplication,10,20);
afficherOperation("Soustraction",function (nb1,nb2) { return nb1-nb2;},15,5);
    

