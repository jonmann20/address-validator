import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse';
import validateAddress from './validateAddress.js';

export default async filename => {
    // Parse CSV.
    const csv = path.resolve(filename);
    const parser = fs.createReadStream(csv).pipe(parse({
        fromLine: 2 // Skip headers
    }));

    for await (const address of parser) {
        // Check if address is valid.
        const formattedAddress = await validateAddress(address);

        // Output validated address to screen.
        process.stdout.write(`${formattedAddress}\n`);
    }
};
