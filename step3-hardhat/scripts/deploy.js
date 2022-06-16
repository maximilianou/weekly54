const { ethers } = require('hardhat');

const main = async () => {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log(`Deploying..`);
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // private keys, about hardhat...
  // json-rpc, about hardhat...
  console.log(`Deployed! success! to: ${simpleStorage.address}`);
  return `main::success!`;
}

main()
.then( m => {
  console.log(m);
  process.exit(0);
})
.catch( e => {
  console.error(e);
  process.exit(-1);
});