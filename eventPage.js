const menuItem = {
  id: "speakIt",
  title: "Speak the text",
  contexts: ["selection"],
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId === "speakIt" && clickData.selectionText) {
    chrome.tts.speak(clickData.selectionText, { rate: 2.0 }, function () {
      if (chrome.runtime.lastError) {
        console.log("Error: " + chrome.runtime.lastError.message);
      }
    });
  }
});
