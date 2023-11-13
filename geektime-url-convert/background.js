chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: 'http://localhost:9001'
  });
});

// 指定特定域名才能使用插件
// const ALLOW_HOSTS = ['www.baidu.com', 'google.com'];

// chrome.tabs.onActivated.addListener(async () => {
//   const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//   switchAction(tab);
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   switchAction(tab);
// });

// function switchAction(tab) {
//   if (!tab.url) {
//     return;
//   }

//   if (ALLOW_HOSTS.includes(new URL(tab.url).host)) {
//     chrome.action.enable();
//   } else {
//     chrome.action.disable();
//   }
// }