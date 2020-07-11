import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './galactic-age.js'

function outputs () {
  let newUser = new User($("#age").val(), $("#lifeEx").val());
  for (let i=0; i<newUser.agesReturned.length; i++) {
    $("#ageList").append(`<li> . . . Your age in <u>${newUser.planetName[i]}</u> years is <u>${newUser.agesReturned[i]}</u>.</li>`)
  }
  for (let i=0; i<newUser.exesReturned.length; i++) {
    if (newUser.exesReturned[i] < 0) {
    $("#exesList").append(`<li> . . . On <u>${newUser.planetName[i]}</u> have outlived your life expectancy on Earth by <u>${(-1 * newUser.exesReturned[i])}</u> years.</li>`)
    } else if (newUser.exesReturned[i] > 0) {
      $("#exesList").append(`<li> . . . You have <u>${newUser.exesReturned[i]}</u> Earth years left to live on ${newUser.planetName[i]}.</li>`)
    }
  }
}

$(document).ready(function() {
  $("#intake").submit(function(event){
    event.preventDefault();
    outputs();
    $("#output").show();
  });
});