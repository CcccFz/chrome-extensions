const mo = new MutationObserver(onMutation);
const reg = /^https?:\/\/.*\/object-browser\/geek-time\/.*?\/[^\/\.]*$/;

observe();

function onMutation() {
  if (reg.test(window.location.href)) {
    mo.disconnect();
    addOpenLink();
    observe();
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

function addOpenLink() {
  const header = document.querySelectorAll('.ReactVirtualized__Table__headerColumn')[2];
  if (!header) {
    return;
  }
  header.innerText = 'Open';

  const root = document.querySelector('#root');
  root.addEventListener('click', e => e.stopImmediatePropagation(), true);

  const url = window.location.href.replace("1/object-browser", "0");

  document.querySelectorAll('.ReactVirtualized__Table__row').forEach((row) => {
    const filename = row.querySelector('div[aria-colindex="2"]').textContent;
    const targetCol = row.querySelector('div[aria-colindex="3"]');

    const openLink = document.createElement('a');
    openLink.innerText = 'Open';
    openLink.target = '_blank';
    openLink.href = `${url}/${filename}`;

    targetCol.innerHTML = '';
    targetCol.appendChild(openLink);
  });
}