const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000, categoria: 'tecnologia', stock: 3 },
    { id: 2, nombre: 'Mouse', precio: 50, categoria: 'tecnologia', stock: 10 },
    { id: 3, nombre: 'Silla', precio: 150, categoria: 'hogar', stock: 0 },
    { id: 4, nombre: 'Teclado', precio: 80, categoria: 'tecnologia', stock: 5 },
    { id: 5, nombre: 'Lampara', precio: 40, categoria: 'hogar', stock: 7 }
];

// Ejercicio 1
// Obtener solo los productos que:
// - tengan stock
// - y sean de categoría 'tecnologia'

// Ejercicio 2
// A partir del resultado anterior:
// devolver un nuevo array con solo los nombres

// Ejercicio 3
// Generar un nuevo array de objetos con este formato:
// [
//  { nombre: 'Laptop', precioConIVA: 1220 },
//  ...
// ]

// Ejercicio 4
// Buscar un producto específico por id: 4

//ejercicio 1

const pTecno_disponible=productos.filter(p => p.stock > 0 &&  p.categoria === 'tecnologia');
console.log(pTecno_disponible);

//Ejercicio 2

const nombres_tecno=pTecno_disponible.map(p => p.nombre);
console.log('Nombres de los productos en tecno:',nombres_tecno);

//Ejercicio 3

const precio_prod_IVA=pTecno_disponible.map(productos => productos.nombre
);



