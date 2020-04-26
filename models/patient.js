const Session = require('./session')
const uuid = require('uuid')

class Patient {
  constructor(id = uuid.v4(), name, sessions = []) {
    this.id = id
    
    this.name = name
    this.sessions = sessions
  }

  session(doctor, time) {
    const session = new Session(doctor, this, time)

    this.sessions.push(session)

    return session
  }

  static create({id, name, sessions}) {
    return new Patient(id, name, sessions)
  }
}

module.exports = Patient
