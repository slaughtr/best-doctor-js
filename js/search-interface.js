const getDoctors = require('./../js/search.js').getDoctors

$(function () {
  $('#searchCondition').click(function () {
    let medicalIssue = $('#inputCondition').val()
    console.log(getDoctors(medicalIssue))
})
})
