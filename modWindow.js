
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#pedalboard-info h1');
  setTimeout(function(){ if (element) element.innerText += '!' }, 5000);
})