//target id and classes
//add event listener --> Submit
//engine function
//test the system

/*repetition of get element by id ==>  arrow function*/
/*let id = (id) => {
  return document.getElementById(id)
}*/

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);



let username = id('username'),
  email = id('email'),
  password = id('password'),
  form = id('form'),
  errorMsg = classes('error'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon');

  
/*
let a;
let b;
let c;
let a,b,c;
*/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //throw an error msg
  /*
  if (username.value === ''){
    errorMsg[0].innerHTML = 'Usename cannot be blank';
    failureIcon[0].style.opacity = '1';
    successIcon[0].style.opacity = '0';
  } else {
    errorMsg[0].innerHTML = '';
    failureIcon[0].style.opacity = '0';
    successIcon[0].style.opacity = '1';
  }*/
  engine(username, 0, 'Username cannot be blank');
  engine(email, 1, 'Email cannot be blank');
  engine(password, 2, 'Password cannot be blank');
});

//.trim() used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string)
let engine = (id, serial, message) => {
  if (id.value.trim() === ''){
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};