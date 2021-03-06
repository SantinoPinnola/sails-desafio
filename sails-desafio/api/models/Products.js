/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'string', columnName: '_id' },
    nombre : {type : 'string', columnName: 'nombre',  required : true},
    descripcion : {type : 'string', columnName: 'descripcion',  required : true},
    precio : {type : 'number', columnName: 'precio',  required : true},
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
  },

};

