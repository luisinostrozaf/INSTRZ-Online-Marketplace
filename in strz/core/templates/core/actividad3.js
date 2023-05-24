use combustibles;
// Ejercicio 1
db.estaciones.aggregate([{$group:{_id:'$distribuidor', nombre_comuna: {$addToSet:'$nombre_comuna'}}}]);

//Ejercicio 2
db.estaciones.aggregate([
    {
      $match: {"precios.gasolina 93": {$lt:1140}}
    },
    {
      $project: {_id:0, razon_social: 1, nombre_comuna: 1, "precios.gasolina 93": 1 }
    }]);

//Ejercicio 3
db.estaciones.aggregate([{$group:{_id:'id',promedio:{$avg:'$precios.gasolina 95'}}}]);