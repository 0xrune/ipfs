import process from 'process';
import minimist from 'minimist';
import pinataSDK from '@pinata/sdk';
import dotenv from 'dotenv'
dotenv.config()

async function main () {
    const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
    const args = minimist(process.argv.slice(2));
    pinata.testAuthentication().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    
    if (args._.length < 1) {
        return console.error('Please supply the path to a file or directory');
    }
    
    const options = {
        pinataOptions: {
            cidVersion: 0
        }
    };
    
    for (const path of args._) {
        pinata.pinFromFS(path, options).then((result) => {
            //handle results here
            console.log(result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });
    }
}

main();