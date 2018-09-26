const model = require('../models/records')
// const resourceName = 'record'

// Currently active getAll, getOne, Search.
// Need to add edit, delete functions

async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({
    data
  })
}


async function getOne(req, res, next) {
  try {
    const data = await model.getOne(req.params.recordId)
    res.status(200).json({
      data: data[0]
    })
  } catch (err) {
    next({
      status: 404,
      message: err.message
    })
  }
}

async function search(req, res, next) {
  try {
    const searchString = unescape(req.query.grantor)
    const fullText = searchString.replace(/\s/g, "\%")
    const data = await model.search(fullText)
    res.status(200).json(
      data
    )
  } catch (e) {
    next({
      status: 400,
      error: `No results`
    })
  }
}

async function createRecord(req, res, next) {
  try {
      // console.log(req.body)
      const response = await model.createRecord(req.body)
      // console.log('RESPONSE:', response)
      res.status(201)
  } catch (e) {
      next({
          status: 400,
          error: `Record could not be added`
      })
  }

}

async function editRecord(req, res, next) {

}

async function deleteRecord(req, res, next) {

}

module.exports = {
  getAll,
  getOne,
  search,
  createRecord,
  editRecord,
  deleteRecord
}
