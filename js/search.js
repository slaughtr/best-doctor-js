const apiKey = require('./../.env').apiKey

exports.getDoctors = function (medicalIssue) {
  return $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function (result) {
    return result
  })
  .fail(function (error) {
    console.log('fail, : ' + error)
  })
}

exports.getSpecialties = function () {
  return $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
.then(function (result) {
  return result
})
.fail(function (error) {
  console.log('fail, : ' + error)
})
}

exports.getDoctorsByName = function (name) { //this does nothing, as searching by name works in the first query, which I found out by clicking the wrong button
  return $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function (result) {
    return result
  })
  .fail(function (error) {
    console.log('fail, : ' + error)
  })
}
