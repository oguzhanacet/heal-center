const uuid = require('uuid')

class Doctor {
  constructor(id = uuid.v4(), name) {
    this.id = id
    this.name = name
  }

  static create({id, name}) {
    return new Doctor(id, name)
  }
}

module.exports = Doctor
