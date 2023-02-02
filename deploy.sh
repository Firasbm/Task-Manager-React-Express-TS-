cd client
rm -rf dist
npm i
npm run build
cd ../server
rm -rf dist
npm i
npm run build
mkdir dist/public
cp ../client/dist/* dist/public
NODE_ENV=production node ./dist/index.js
