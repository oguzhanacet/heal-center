const colors = require('colors')

function printSessions(session) {
  console.log(`${colors.blue(session.patient.name)} call with ${colors.red(session.doctor.name)} at ${colors.yellow(session.time)}`)
}

function printSessionsHistory(patient) {
  if (patient.sessions.length == 0)
    return console.log(`${colors.blue(patient.name)} has no sessions yet.`)

  patient.sessions.forEach(printSessions)
}

module.exports = printSessionsHistory
