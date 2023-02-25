
let validName = false;
let validEmail = false;
$('#failure').hide();
$('#success').hide();


const name = document.getElementById('name');
const email = document.getElementById('email');
const ta = document.getElementById('textarea');



name.addEventListener('blur', () => {
    console.log('Name is blured');
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,15}$/;
    let str = name.value;
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validName = true;
    }
    else {
        console.log('Your name is valid');
        name.classList.add('is-invalid')
        validName = false;
    }

})
email.addEventListener('blur', () => {

    //validate Email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    console.log(validName);


    // Submit your form here
    if (validName && validEmail) {
        console.log('User, email and phone is valid. Submitting the form');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#success').css({ 'display': 'block' });
        $('#failure').css({ 'display': 'none' });
    }
    else {
        console.log('one of User, email and phone is not valid. hence not submitting the form. Please correct the error and try again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').css({ 'display': 'none' });
        $('#failure').css({ 'display': 'block' });
        e.preventDefault();

    }
})


// alery hide and show
$(document).on('click', '.btn-close', function () {
    $(this).parents('.alert').hide();
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.50, lng: 0.28 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;