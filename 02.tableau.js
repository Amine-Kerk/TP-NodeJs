var villes = new Array('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans');

villes.forEach(function (ville, i) {
    console.log('ville ' + (i + 1) + ' : ' + ville);
});

var lettreADansToutesLesVilles = (data) => data.includes("a");
console.log("lettreADansToutesLesVilles:"+villes.every(function (ville){return ville.includes("a");}));

var auMoinsUneVilleAvecUnTiret =  (data) => data.includes("-");
console.log("auMoinsUneVilleAvecUnTiret:"+villes.some(function (ville){return ville.includes("-");}));

var villesSansTiretSansEspace = villes.filter(function(ville){
    return !ville.includes("-");})
                                      .filter(function(ville){
    return !ville.includes(" ");});
console.log("villesSansTiretSansEspace:  "+ villesSansTiretSansEspace);




    console.table(villes.filter(function (ville) {
                return ville.endsWith('s');})
                        .map(function (ville)    {
                return ville.toUpperCase(); }));
    
