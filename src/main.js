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
}


$(document).ready(function() {
  $("#intake").submit(function(event){
    event.preventDefault();
    outputs();
    $("#output").show();
  });
});