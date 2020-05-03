const menuItem = {
  id: "searchWiki",
  title: "Search in Wikipedia",
  contexts: ["selection"],
};

chrome.contextMenus.create(menuItem);

function fixCodeUri(string) {
  return encodeURI(string).replace(/%5B/g, "[").replace(/%5D/g, "]");
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId === "searchWiki" && clickData.selectionText) {
    var wikiUrl = `https://en.wikipedia.org/wiki/${fixCodeUri(
      clickData.selectionText,
    )}`;
    const createData = {
      url: wikiUrl,
      type: "popup",
      top: 5,
      left: 5,
      width: screen.availWidth / 2,
      height: screen.availHeight / 2,
    };
    chrome.windows.create(createData, function () {});
  }
});
