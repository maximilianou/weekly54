
# Weekly54 - environment


----

```tsx
mkdir step3-hardhat
cd step3-hardhat
npm -y init
npm install -D hardhat
npx hardhat
npx hardhat --verbose
npx hardhat compile --verbose

```



----

----
- hardhat steps
```tsx
mkdir step2-hardhat
cd step2-hardhat
npm -y init
npm install -D hardhat
npx hardhat
```
<https://hardhat.org/tutorial/creating-a-new-hardhat-project>

<https://hardhat.org/nodejs-versions>

<https://hardhat.org/reference/solidity-support>

ok..

```
npx hardhat test __tests__/Token.js
You are using a version of Node.js that is not supported by Hardhat, and it may work incorrectly, or not work at all.

Please, make sure you are using a supported version of Node.js.

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions


  SHT Token contract
    1) Deployment should apply total ammount to the owner


  0 passing (732ms)
  1 failing

  1) SHT Token contract
       Deployment should apply total ammount to the owner:
     Error: error:0308010C:digital envelope routines::unsupported
      at new Hash (node:internal/crypto/hash:67:19)
      at Object.createHash (node:crypto:133:10)
      at hash160 (node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:249:21)
      at HDKey.set (node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:50:24)
      at Function.HDKey.fromMasterSeed (node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:194:20)
      at deriveKeyFromMnemonicAndPath (node_modules/hardhat/src/internal/util/keys-derivation.ts:22:27)
      at derivePrivateKeys (node_modules/hardhat/src/internal/core/providers/util.ts:30:52)
      at normalizeHardhatNetworkAccountsConfig (node_modules/hardhat/src/internal/core/providers/util.ts:58:10)
      at createProvider (node_modules/hardhat/src/internal/core/providers/construction.ts:80:59)
      at /home/debian/projects/weekly54/step2-hardhat/node_modules/hardhat/src/internal/core/runtime-environment.ts:82:28
```

- solidity 0.8.12 ( changed to environment now: ) -> 0.8.9

- nodejs   18.3 ( changed to environment now: ) -> nvm install 16 

```
 npx hardhat test __tests__/Token.js

  SHT Token contract
    ✔ Deployment should apply total ammount to the owner (1098ms)

  1 passing (1s)
```

```tsx
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

```
----
- https://tailwindcss.com/docs/guides/nextjs
```tsx  
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
----


----
- typescript nextjs react 

```tsx
npx create-next-app step1 --typescript
```
----

----
- nodejs, npm, nvm, 
  
<https://github.com/nvm-sh/nvm>

```tsx
nvm install 18.3
nvm use 18.3
```
----


----
- github remote repo

<https://github.com/git-guides/git-init>

```tsx
git remote add origin https://github.com/maximilianou/weekly54
git push --set-upstream origin main --force
```
----


----
- git variables user.email, user.name, core.editor

<https://git-scm.com/docs/git-config>

```tsx
git config --global --add user.email maximilianou@gmail.com
git config --global --add core.editor vi
```

----