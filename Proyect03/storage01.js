localStorage.setItem('nombre', 'Movil de Raul');

localStorage.setItem('nombre', 'Album de Brito');

//alert{localStorage.getItem('nombre')};

let aFrutas = ['kiwi', 'movil_de_Raul', 'fruta del dragon'];

localStorage.setItem('arrayfrutas', aFrutas);

let otrasfrutas = localStorage.getItem('arrayfrutas');

console.log(otrasfrutas);