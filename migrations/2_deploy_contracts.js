var PXLToken = artifacts.require("./PXLToken.sol");

module.exports = function(deployer, network, accounts) {
  var start = 10;
  var middle = 15;
  var end = 20;
 deployer.deploy(PXLToken, start, end, middle, accounts[0], accounts[1]);
};
