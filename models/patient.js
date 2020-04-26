// const Session = require('./session')
// const uuid = require('uuid')

const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  name: String,
})

module.exports = mongoose.model('Patient', PatientSchema)

// class Patient {
//   constructor(id = uuid.v4(), name, sessions = []) {
//     this.id = id
    
//     this.name = name
//     this.sessions = sessions
//   }

//   session(doctor, time) {
//     const session = new Session(doctor, this, time)

//     this.sessions.push(session)

//     return session
//   }

//   static create({id, name, sessions}) {
//     return new Patient(id, name, sessions)
//   }
// }

// module.exports = Patient
