
const listaDePrecios = [
  {porducto: "Arroz", precio: 50},
  {producto: "CocaCola", precio: 200 },
  {producto: "Fideos" , precio: 80},
  {producto: "Lentejas" , precio: 70 },
  {producto: "Milanesas" , precio: 150 },
  {producto: "Atún" , precio: 300 },
  {producto: "Galletas" , precio: 90 }
];


const carrito = [];

let cantidad = prompt("¿Cuantos Productos desea comprar?");


do{
  let entrada = prompt("ingresar el producto que quieras comprar: \nArroz\nCocaCola\nFideos\nLentejas\nMilanesas\nAtún\nGalletas");
  carrito.push(entrada.toUpperCase());
  console.log(carrito.lenght);
}while(carrito.length != cantidad);


const carritoCompleto = carrito.concat(["Precio de la lista"]);
alert(carritoCompleto.join("\n"));


//Hasta aca funciona como quiero, de aca en adelante tengo invonvenientes


const resultado = listaDePrecios.find((elem) => elem.producto === entrada);

console.log(resultado);

const total = precioCarrito.reduce((acum, el) => acum + el.precio, 0);

console.log(total);

