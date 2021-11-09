
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

  // Remve file manager menu item
  document.getElementById('mod-file-manager').style.display = 'none'

  // Remove plugin-store menu item
  document.getElementById('mod-cloud-plugins').style.display = 'none'

  // Remove MIDI settings menu item
  document.getElementById('mod-show-midi-port').style.display = 'none'
  
  // Remove MOD settings menu item
  document.getElementById('mod-settings').style.display = 'none'

})