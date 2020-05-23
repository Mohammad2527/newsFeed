var database = [
  {
    username: "MD",
    password: "secret"
  }
];

var newsFeed = [
  {
    username:"Bobby",
    timeline: "Tired of learning"
  },
  {
    username: "Sally",
    timeline: "JS is cool"
  }
];

var userNamePrompt = prompt("enter your user name: ");
var passwordPrompt = prompt ("Enter your password: ");

function signIn(user, pass){
  if (user === database[0].username &&
    pass === database[0].password){
      console.log(newsFeed);
    }else {
      alert("Sorry, wrong username and password!");
    }
  }
  signIn(userNamePrompt, passwordPrompt);
