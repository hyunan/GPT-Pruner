chrome.storage.sync.get("messageLimit", (data) => {
    if (data.messageLimit !== undefined) {
        document.getElementById("msgCount").value = data.messageLimit;
    }
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("msgCount").value);
    chrome.storage.sync.set({ messageLimit: value }, () => {
        chrome.runtime.sendMessage({ action: "updateLimit", value });
        console.log(`msgCount is: ${value}`);
    });
});
