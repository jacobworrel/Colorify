// CHANGE COLOR FUNCTIONS

function blue() {
  chrome.tabs.executeScript({
    code:  `document.body.style.backgroundColor = "#558C89";
          document.body.style.color = '#ECECEA';
          //let inputs = document.getElementsByTagName("input");
          //for (i = 0; i < inputs.length; i += 1){
            //inputs[i].style.backgroundColor = '#ECECEA';
          //}
          let links = document.getElementsByTagName("a");
          for (i = 0; i < links.length; i += 1){
            links[i].style.color = '#D9853B';
          }`
  });
}

function green() {
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = "#005A31";
          document.body.style.color = '#A8CD1B';
          //let inputs1 = document.getElementsByTagName("input");
          //for (i = 0; i < inputs1.length; i += 1){
            //inputs1[i].style.backgroundColor = '#A8CD1B';
          //}
          let links1 = document.getElementsByTagName("a");
          for (i = 0; i < links1.length; i += 1){
            links1[i].style.color = '#CBE32D';
          }`
  });
}

function pink() {
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = "#DF3D82";
          document.body.style.color = '#191919';
          //let inputs2 = document.getElementsByTagName("input");
          //for (i = 0; i < inputs2.length; i += 1){
            //inputs2[i].style.backgroundColor = '#FFFFFF';
          //}
          let links2 = document.getElementsByTagName("a");
          for (i = 0; i < links2.length; i += 1){
            links2[i].style.color = '#FFFFFF';
          }`
  });
}

function yellow() {
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = "#FFF056";
          document.body.style.color = '#191919';
          //let inputs3 = document.getElementsByTagName("input");
          //for (i = 0; i < inputs3.length; i += 1){
            //inputs3[i].style.backgroundColor = '#DFE2DB';
          //}
          let links3 = document.getElementsByTagName("a");
          for (i = 0; i < links3.length; i += 1){
            links3[i].style.color = '#191919';
          }`
  });
}

// RESET BUTTON

function reset() {
  chrome.tabs.executeScript({
    code: 'location.reload()'
  });
}

// EVENT LISTENERS

document.getElementById('blue').addEventListener('click', blue);
document.getElementById('green').addEventListener('click', green);
document.getElementById('pink').addEventListener('click', pink);
document.getElementById('yellow').addEventListener('click', yellow);
document.getElementById('reset').addEventListener('click', reset);

// ADDITIONAL COLORS TO ADD

// function grey() {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "#7E8F7C"'
//   });
// }

// function red() {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "#C63D0F"'
//   });
// }

// function orange() {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "#D9853B"'
//   });
// }

// function purple()
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "#7D1935"'
//   });
// }

// document.getElementById('purple').addEventListener('click', purple);
// document.getElementById('red').addEventListener('click', red);
// document.getElementById('orange').addEventListener('click', orange);
// document.getElementById('grey').addEventListener('click', grey);


//TRASH CODE

// function takeBreak() {
//   chrome.tabs.executeScript({
//     file: 'break.js'
//   });
// }

// document.getElementById('break').addEventListener('click', takeBreak);
