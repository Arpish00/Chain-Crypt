require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//https://eth-goerli.g.alchemy.com/v2/LGczkvIvGChd5i03P349DmJe7NoV757o

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    Goerlie: {
      url: "https://eth-goerli.g.alchemy.com/v2/LGczkvIvGChd5i03P349DmJe7NoV757o",
      accounts: ["248b8e5815bc34228fbd0f4fb2639a146c799255e4d5af2fa53c660c94791edd"],
    } 
  }
};
