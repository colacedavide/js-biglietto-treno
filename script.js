// costo biglietto=(0,21 * 100) prezzo per 100km
// calcolo sconto 20% = (costo biglietto * 20) / 100
// costo biglietto scontato = costo biglietto - calcolo sconto

const eta = prompt( " inserisci eta");
const kilometri = prompt(" inserisci kilometri che devi fare");
const biglietto = (0.21);
console.log(eta, kilometri);
console.log(biglietto);



if(eta > 18 && eta < 65){
    const costoBiglietto = kilometri * biglietto;
console.log(costoBiglietto);

}else if(eta < 18){
    const costoBiglietto = kilometri * biglietto;
    const sconto = (costoBiglietto * 20) / 100;
    const costoTot = costoBiglietto - sconto;
    console.log(costoTot);


} else if ( eta > 65){
    const costoBiglietto = kilometri * biglietto;
    const sconto = (costoBiglietto * 40) / 100;
    const costoTot = costoBiglietto - sconto;
    console.log(costoTot);
}