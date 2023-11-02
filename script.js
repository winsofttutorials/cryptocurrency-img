var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

var navbar = document.getElementById("navbar");
var nclose = document.getElementById("close");
var nopen = document.getElementById("open");

function opentab() {
  navbar.classList.toggle("active");
  // nclose.style.display = "block";
  // nopen.style.display = "none";
}
