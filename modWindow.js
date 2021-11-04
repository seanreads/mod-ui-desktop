
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  
  // Remove default background image
  document.getElementById('pedalboard-dashboard').style.background = 'none'
  
  // Initialize window title using pedalboard name
  document.title = document.getElementById('pedalboard-info').getElementsByTagName('h1')[0].innerText

  // Remove web gui top menu
  document.getElementById('pedalboard-actions').remove()
  const dashboardContainer = document.querySelectorAll('#pedalboard > div')[3]
  dashboardContainer.style.top = '0px'
  
})