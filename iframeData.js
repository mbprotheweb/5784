// iframeData.js
var yes = new Date();
yes.setDate(yes.getDate() - 1)
var iframeArray = [
  { src: "https://spinkablast.wixsite.com/5784/day", milliseconds: 25000 },
  { src: "https://spinkablast.wixsite.com/5784/day?date=" + yes.toLocaleDateString(), milliseconds: 25000 },
  { src: "https://spinkablast.wixsite.com/5784/prices", milliseconds: 15000 },
];
