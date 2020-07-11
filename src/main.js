import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './galactic-age.js'

function outputs () {
  let newUser = new User($("#age").val(), $("#lifeEx").val());
  for (let i=0; i<newUser.agesReturned.length; i++) {
    $("#ageList").append(`<li>Your age in ${newUser.planetName[i]} years is: ${newUser.agesReturned[i]}</li>`)
  }
  for (let i=0; i<newUser.exesReturned.length; i++) {
    if (newUser.exesReturned[i] < 0 ) {
    $("#exesList").html(`<li>On ${newUser.planetName[i]} have outlived your life expectancy on Earth by: ${(-1 * newUser.exesReturned[i])}</li>`)
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