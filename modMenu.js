const { Menu, MenuItem } = require('electron')

const getMainMenu = (app, mainWindow) => Menu.buildFromTemplate([
    {
        label: app.name,
        submenu: [
        {label: 'About MOD Desktop'},
        {type: 'separator'},
        {label: 'Preferences...', accelerator: 'CommandOrControl+,'},
        {type: 'separator'},
        {label: 'Quit', accelerator: 'CommandOrControl+Q', click: () => { app.quit() }}
        ]
    },
    {
        label: 'Pedalboards',
        submenu: [
        {label: 'New', accelerator: 'CommandOrControl+N'},
        {label: 'Open...', accelerator: 'CommandOrControl+O'},
        {type: 'separator'},
        {label: 'Recent', enabled:false},
        {label: 'Pedalboard 1'},
        {label: 'Pedalboard 2'},
        {label: 'Pedalboard 3'},
        {label: 'More', 
            submenu: [ {label: 'Pedalboard 4'}, {label: 'Pedalboard 5'}, {label: 'Pedalboard 6'}]
        },
        {type: 'separator'},
        {label: 'Save', accelerator: 'CommandOrControl+S'},
        {label: 'Save As...',  accelerator: 'CommandOrControl+Shift+S'},
        {type:'separator'},
        {label: 'Share'}
        ]
    },
    {
        label: 'CV Ports',
        submenu: [
        {label: 'Ctrl2CV -> Big Muff'},
        {label: 'Ctrl2CV -> DS-1'},
        {label: 'Ctrl2CV -> X-Fade'},
        {type: 'separator'},
        {label: 'Enable Management', type: 'checkbox', checked: true}
        ]
    },
    {
        label: 'Snapshots',
        submenu: [
        {label: 'New'},
        {label: 'Open'},
        {type: 'separator'},
        {label: 'Recent', enabled:false},
        {label: 'Snapshot 1'},
        {label: 'Snapshot 2'},
        {label: 'Snapshot 3'},
        {label: 'More', 
            submenu: [ {label: 'Snapshot 4'}, {label: 'Snapshot 5'}, {label: 'Snapshot 6'}]
        },
        {type: 'separator'},
        {label: 'Save', accelerator: 'CommandOrControl+S'},
        {label: 'Save As...',  accelerator: 'CommandOrControl+Shift+S'},
        {type:'separator'},
        {label: 'Enable Snapshots', type: 'checkbox', checked: true}         
        ]
    },
    {
        label: 'Banks',
        submenu: [
        {label: 'New'},
        {type: 'separator'},
        {label: 'CHAINS: Guitar'},
        {label: 'CHAINS: Bass'},
        {label: 'CHAINS: Synths'},
        {label: 'CHAINS: Effects'},
        {label: 'CHAINS: Mastering'},
        {label: 'CHAINS: Utilities'},
        {type: 'separator'},
        {label: 'All Banks'},
        ]
    },
    {
        label: 'View',
        submenu: [
        {label: 'Full Screen'},
        {type: 'separator'},
        {label: 'File Manager',
            click: async () => {
            mainWindow.webContents.executeJavaScript(`window.document.querySelector('#mod-file-manager').click()`)
            }
        },
        {label: 'Plugin Store'},
        {type: 'separator'},
        {label: 'Zoom In'},
        {label: 'Zoom Out'},
        ]
    },
    {
        label: 'Help',
        submenu: [
        {label: 'Read the MOD Dekstop Manual'},
        {type: 'separator'},
        {label: 'Visit moddevices.com...'},
        {label: 'Join the User Forum...'},
        {type: 'separator'},
        {label: 'Check for Updates...'},
        ]
    }
])

const getTrayMenu = () => Menu.buildFromTemplate([
    { label: 'Manage CV Ports', type: 'checkbox'},
    { label: 'Enable Snapshots', type: 'checkbox'},
    {type: 'separator'},
    { label: 'MIDI Ports'},
    { label: 'Settings'},
])

module.exports = { getMainMenu, getTrayMenu }