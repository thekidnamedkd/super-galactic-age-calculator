import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './galactic-age.js'


$(document).ready(function() {
  $("#intake").click(function(event){
    event.preventDefault();
    let newUser;
    newUser = new User($("#age").val(), $("#lifeEx").val());
    console.log(newUser);
  });
});