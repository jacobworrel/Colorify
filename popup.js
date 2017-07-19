// CHANGE COLOR FUNCTIONS
function blue() {
  chrome.tabs.executeScript({
    code:  `document.body.style.backgroundColor = "#558C89";
          document.body.style.color = '#ECECEA';
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
