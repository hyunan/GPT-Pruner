chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateLimit") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;
            chrome.tabs.sendMessage(tabs[0].id, request);
        });
    }
});