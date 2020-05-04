document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("button").addEventListener("click", onClick, false);
    function onClick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { welcome: "hello" }, setCount);
      });
    }

    function setCount(response, e) {
      const div = document.createElement("div");
      div.textContent = `${response.count} world`;
      document.body.appendChild(div);
    }
  },
  false,
);
