const { expect } = require('chai');
const { ethers } = require('hardhat');

describe(`SHT Token contract`, () => {
  it(`Deployment should apply total ammount to the owner`, async () => {
    const [owner] = await ethers.getSigners();
    const token = await ethers.getContractFactory('Token');
    const hardhatToken = await token.deploy();
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  })
});