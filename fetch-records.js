const { patientDatabase, doctorDatabase } = require('./database')
const printSessionHistory = require('./lib/print-session-history')

async function main() {
  const rabia = await doctorDatabase.findBy('name', 'Rabia')
  const osman = await patientDatabase.findByName('Osman')

  osman.book(rabia, '39 Nisan 12839')
  patientDatabase.update(osman)

  printSessionHistory(osman)
}

main()
