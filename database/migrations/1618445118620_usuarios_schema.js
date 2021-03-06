'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('email', 80).notNullable().unique()
      table.string('nome', 254).notNullable().unique()
      table.string('senha', 60).notNullable()
    })

  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
