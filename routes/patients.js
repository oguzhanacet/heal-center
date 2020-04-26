const { patientDatabase, doctorDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const patients = await patientDatabase.load()

  res.render('patients', { patients })
})

router.post('/', async (req, res) => {
  const patient = await patientDatabase.insert(req.body)

  res.send(patient)
})

router.delete('/:patientId', async (req, res) => {
  await patientDatabase.removeBy('id', req.params.patientId)

  res.send('OK')
})

router.get('/:patientId', async (req, res) => {
  const patient = await patientDatabase.find(req.params.patientId)
  if (!patient) return res.status(404).send('Cannot find patient')
  res.render('patient', { patient})
})

router.post('/:patientId/sessions', async (req, res) => {
  const { patientId } = req.params
  const { doctorId } = req.body

  const patient = await patientDatabase.find(patientId)
  const doctor = await doctorDatabase.find(doctorId)

  patient.session(doctor)

  await patientDatabase.update(patient)
  console.log(doctor)
  res.send('OK')
})

module.exports = router
