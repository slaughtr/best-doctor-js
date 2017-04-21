const getDoctors = require('./../js/search.js').getDoctors

$(function () {
  $('#searchCondition').click(function () {
    let medicalIssue = $('#inputCondition').val()

    getDoctors(medicalIssue).done((result) => {
      let doctor = result.data
      doctor.forEach(function (doctor) {
        $('#showResults').append('<tr>')

        $('#showResults').append('<td> <img src="' + doctor.profile.image_url + '"> </td>')
        $('#showResults').append('<td>' + doctor.profile.first_name + ' ' + doctor.profile.last_name + ', ' + doctor.profile.title + '</td>')
        // $('#showResults').append('<td>')
        doctor.practices.forEach(function (practice) {
          $('#showResults').append(practice.name + '<br>')
        })

        if (doctor.practices[0].accepts_new_patients === true)
        {
          $('#showResults').append('<td> Yes </td>')
        } else {
          $('#showResults').append('<td> No </td>')
        }
        // $('#showResults').append('</td>')
        $('#showResults').append('</tr>')

      })

    })

  })
})
