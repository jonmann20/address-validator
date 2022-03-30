
import fetch from 'node-fetch';
import SECRETS from './.secrets.js';

export default async address => {
    if(address.length !== 3) {
        return `${address} -> Invalid Address`;
    }

    const streetAddress = address[0].trim();
    const city = address[1].trim();
    const zip = address[2].trim();

    const params = new URLSearchParams({
        CountryCode: 'us', // assuming US address
        StreetAddress: streetAddress,
        City: city,
        PostalCode: zip,
        APIKey: SECRETS.addressValidatorApiKey
    });

    const res = await fetch(`https://api.address-validator.net/api/verify?${params.toString()}`, {
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json());

    if(res.status === 'INVALID') {
        return `${address} -> Invalid Address`;
    }

    return `${address} -> ${res.formattedaddress}`;
};
