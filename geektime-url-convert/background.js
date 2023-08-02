chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: tab.url.replace("1/object-browser", "0")
  });
});