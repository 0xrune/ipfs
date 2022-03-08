import process from 'process';
import minimist from 'minimist';
import replace from 'replace-in-file';

async function main () {
    const args = minimist(process.argv.slice(2));
    const cid = args.cid;

    if (!cid) {
        return console.error('Please provide --cid=CID.')
    }

    if (args._.length < 1) {
        return console.error('Please provide the path to a directory')
    }

    const path = args._[0].concat("*.", "json");

    const options = {
        files: path,
        from: /<CID>/g,
        to: cid,
    };

    replace(options)
    .then(console.log('Successfully completed.'))
    .catch(error => {
        console.error('Error occurred:', error);
    });
}

main();