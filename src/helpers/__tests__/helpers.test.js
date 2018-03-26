//Core
import { getFullApiUrl, getRandomColor, getUniqueID } from '../';

const GROUP_ID = 'test';
const api = 'https://lab.lectrum.io/react/api';

describe('helpers: ', () => {
    test('getFullApiUrl should be a function', () => {
        expect(typeof getFullApiUrl).toBe('function');
    });

    test('getFullApiUrl should throw an err for wrong arguments', () => {
        const getFullApiNameWithError = () => {
            getFullApiUrl(null, 1);
        };

        expect(getFullApiNameWithError).toThrowError(
            `api and GROUP_ID should be a string`
        );
    });

    test('getFullApiUrl should return full api URL', () => {
        expect(getFullApiUrl(api, GROUP_ID)).toBe(`${api}/${GROUP_ID}`);
    });

    test('getRandomColor should be a function', () => {
        expect(typeof getRandomColor).toBe('function');
    });

    test('getRandomColor length should be 7', () => {
        expect(getRandomColor().length).toBe(7);
    });

    test('getRandomColor should be starts from #', () => {
        expect(getRandomColor().charCodeAt(0)).toBe(35);
    });

    test('getUniqueID should be a function', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test('getUniqueID should return length by default 15', () => {
        expect(getUniqueID().length).toBe(15);
    });

    test('getUniqueID with custom length', () => {
        expect(getUniqueID(10).length).toBe(10);
    });
});
