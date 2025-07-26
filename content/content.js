function pruneMessages(limit) {
    if (limit === -1 || limit === 0) return;
    
    // ChatGPT responses
    const gptResponses = Array.from(
        document.getElementsByClassName("text-token-text-primary w-full focus:outline-none scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]")
    );
    // User inputs
    const userInputs = Array.from(
        document.getElementsByClassName("text-token-text-primary w-full focus:outline-none scroll-mt-(--header-height)")
    );

    if (limit > gptResponses.length) return;

    const toRemoveGpt = gptResponses.slice(0, gptResponses.length - limit);
    const toRemoveUser = userInputs.slice(0, userInputs.length - limit);

    toRemoveGpt.forEach(element => {
        element.remove();
    });
    toRemoveUser.forEach(element => {
        element.remove();
    });
}

let currLimit = 10;
chrome.storage.sync.get("messageLimit", (data) => {
    if (data.messageLimit !== undefined) {
        currLimit = data.messageLimit;
        pruneMessages(currLimit);
    }
});

pruneMessages(currLimit);

const chatContainer = document.querySelector(".flex.basis-auto.flex-col.grow.overflow-hidden");
if (chatContainer) {
    const observer = new MutationObserver(() => {
        pruneMessages(currLimit);
    });
    observer.observe(chatContainer, { childList: true, subtree: true });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateLimit") {
        currLimit = request.value;
        console.log("Received updated limit:", currLimit);
        pruneMessages(currLimit);
    }
});