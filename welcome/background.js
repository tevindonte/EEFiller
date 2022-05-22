chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL('welcome/hellow.html')
    let tab = await chrome.tabs.create({url})
    console.log('Created Tab $(tab.id)')

})