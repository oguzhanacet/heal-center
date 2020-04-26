const BaseDatabase = require('./base-database')
const Doctor = require('../models/doctor')

class DoctorDatabase extends BaseDatabase {
  findByDoctorName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new DoctorDatabase(Doctor)
