chrome.tabs.onCreated.addListener(function () {
  chrome.tabs.update(undefined, { url: `https://jacktra.com/` });
});
