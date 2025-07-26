# GPT Pruner
A lightweight Chrome extension that limits visible ChatGPT messages to improve performance.

## Why?
ChatGPT can lag or slow down when the conversations get too long since it loads the whole conversation. One fix is to create a new chat, but it won't have the same information as the original chat.

This extension aims to fix this issue by reducing the amount of visible messages in the webpage and not having the entire conversation loaded.

## Installation
1. Clone or download this repo
2. Go to `chrome://extensions` in your browser
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder
5. Navigate to a ChatGPT conversation and click the extension icon to set your limit

## Limitations
- Increasing the message limit requires a page reload to fully re-render messages.
- Re-pruning is needed when the conversation is switched.

## Future Ideas
- Add a toggle for enabling/disabling pruning.