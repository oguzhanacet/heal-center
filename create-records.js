const Patient = require('./models/patient')
const Doctor = require('./models/doctor')
const patientDatabase = require('./database/patient-database')
const doctorDatabase = require('./database/doctor-database')

const printSessionsHistory = require('./lib/print-session-history')

const oguzhan = Patient.create({name: 'Oguzhan'})
const fatih = Patient.create({name: 'Fatih'})
const pinar = Doctor.create({name: 'Pinar'})
console.log(pinar);

oguzhan.session(pinar, '30 March 2020')
oguzhan.session(pinar, '29 March 2019')
fatih.session(pinar, '31 March 2021')

async function main() {
  try {
    await patientDatabase.save([oguzhan, fatih])
    await doctorDatabase.save([pinar])
    
    const ferhat = Patient.create({name: 'Ferhat'})
    await patientDatabase.insert(ferhat)

    const patients = await patientDatabase.load()
    patients.forEach(printSessionsHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()
