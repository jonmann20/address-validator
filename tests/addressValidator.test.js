//import validateCsv from '../validateCsv.js';
import validateAddress from '../validateAddress.js';

// TODO: mock fetch request for testing

// TODO: test stdout
// test('should validate a CSV', () => {
//     expect(validateCsv('tests/fixtures/example.csv')).toBe('123 e Maine Street, Columbus, 43215 -> 123 E Main St,Columbus OH 43215-5207\n1 Empora St, Title, 11111 -> Invalid Address');
// });

test('should validate an address and format the output string', async () => {
    const res1 = await validateAddress(['123 e Maine Street', 'Columbus', '43215']);
    expect(res1).toBe('123 e Maine Street,Columbus,43215 -> 123 E Main St,Columbus OH 43215-5207');

    const res2 = await validateAddress(['1 Empora St', 'Title', '11111']);
    expect(res2).toBe('1 Empora St,Title,11111 -> Invalid Address');
});
