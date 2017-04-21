const getDoctors = require('./../js/search.js').getDoctors

$(function () {
  // $('*').popover({container: "body"})


  $('#searchCondition').click(function () {
    let medicalIssue = $('#inputCondition').val()
    $('#showResults').text('')
    getDoctors(medicalIssue).done((result) => {
      let doctor = result.data
      doctor.forEach(function (doctor) {
        $('#showResults').append('<tr>')

        $('#showResults').append('<td> <img id="imageId" data-container="body" data-trigger="manual" data-toggle="popover" title="' + doctor.profile.first_name + '" data-content="' + doctor.profile.bio + '"  data-options=\'{ "image" : "' + doctor.profile.image_url + '"}\' src="' + doctor.profile.image_url + '"> </td>')
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


$('body').on('click' , 'img' , function () {
  // let test = $(event.target)
  // console.log(test.data('options').image)
  // console.log('click')
  $(this).popover('toggle')

})

})
