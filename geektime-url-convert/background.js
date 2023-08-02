chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: 'http://localhost:9001/object-browser'
  });
});