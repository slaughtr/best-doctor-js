const getDoctors = require('./../js/search.js').getDoctors
const getSpecialties = require('./../js/search.js').getSpecialties

$(function () {
  // $('*').popover({container: "body"})
  getSpecialties().done((result) => {
    result.data.forEach(function (specialty) {
      $('#specialtyList').append('<option value=' + specialty.uid + '>' + specialty.name + '</option>')
    })
  })

  $('#searchCondition').click(function () {



    let specialty = $('#specialtyList').val()
    let medicalIssue = $('#inputCondition').val()

    $('#showResults').text('')
    getDoctors(medicalIssue).done((result) => {
      let doctor = result.data
      console.log(specialty);
      console.log(result.data[0].specialties[0].uid);

      if (doctor.length == 0) { //if search returns no results, tell that to the the user
        $('#showResults').append('<tr><td> No results! </tr></td>')
      }

      doctor.forEach(function(specialty, i) {
        if (specialty.specialties[i]) {
          if (specialty == specialty.specialties[i].uid) {
          console.log('found a match');
        } else {
          console.log('idk');
        }
      }
      })

      doctor.forEach(function (doctor) {
        $('#showResults').append('<tr>')
        //most of the image properties below are for the popover
        $('#showResults').append('<td> <img id="imageId" data-container="body" data-trigger="manual" data-toggle="popover" title="' + doctor.profile.first_name + '" data-content="' + doctor.profile.bio + '"  data-options=\'{ "image" : "' + doctor.profile.image_url + '"}\' src="' + doctor.profile.image_url + '"> </td>')
        $('#showResults').append('<td>' + doctor.profile.first_name + ' ' + doctor.profile.last_name + ', ' + doctor.profile.title + '</td>')

        doctor.practices.forEach(function (practice, i) {
          $('#showResults').append('<strong>' + practice.name + '</strong>' + '<br>' + practice.visit_address.street + '<br>' + practice.visit_address.city + ', ' + practice.visit_address.state + ' ' + practice.visit_address.zip + '<br>')
          if (practice.phones[i]) {
            $('#showResults').append(practice.phones[i].number + '<br><br>')
          } else {
            $('#showResults').append('<br>')
          }
        })

        if (doctor.practices[0].accepts_new_patients === true)
        {
          $('#showResults').append('<td> Yes </td>')
        } else {
          $('#showResults').append('<td> No </td>')
        }
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
