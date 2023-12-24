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
STAGE=dev node ./dist/index.js
STAGE=prod
