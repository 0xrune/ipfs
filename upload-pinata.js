import process from 'process';
import minimist from 'minimist';
const pinataSDK = require('@pinata/sdk');

pinata.testAuthentication().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

async function main () {
    const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);
    const args = minimist(process.argv.slice(2));
    
    if (args._.length < 1) {
        return console.error('Please supply the path to a file or directory');
    }
    
    const sourcePath = args._;
    const options = {
        pinataOptions: {
            cidVersion: 1
        }
    };

    pinata.pinFromFS(sourcePath, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
}

main();