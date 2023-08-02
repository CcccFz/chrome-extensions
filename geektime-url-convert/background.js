chrome.action.onClicked.addListener(function (tab) {
  // 获取当前tab的url
  let url = tab.url;

  // 在url中修改一些字符
  let newUrl = url.replace("1/object-browser", "0");

  // 在一个新tab中打开修改后的url
  chrome.tabs.create({
    url: newUrl
  });

});