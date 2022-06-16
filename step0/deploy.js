async function main(msg){
  console.log(`Compiling smart contracts.. `);
  return `Compiled`;
}
main(`[..] Deploying`)
.then( (m) => {
  console.log(`[Ok] Deployed! (- ${m} -)`);
  process.exit(0); 

})
.catch( (err) =>   {
  console.error(`[Er] Deploy Crash!`, err);
  process.exit(-1); 
});
