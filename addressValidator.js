import validateCsv from './validateCsv.js';

// Check for input CSV
if(process.argv.length !== 3) {
    console.error('Missing input CSV file argument.');
    process.exit(1);
}

validateCsv(process.argv[2])
