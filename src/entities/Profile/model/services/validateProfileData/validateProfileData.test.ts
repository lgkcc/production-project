import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    test('validate success', () => {
        const profile: Profile = {
            first: 'alexander',
            lastname: 'lgkcc',
            age: 21,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        };
        expect(validateProfileData(profile)).toEqual([]);
    });

    test('incorrect first', () => {
        const profile: Profile = {
            first: '',
            lastname: 'lgkcc',
            age: 21,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        };
        expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_FIRST]);
    });

    test('incorrect last', () => {
        const profile: Profile = {
            first: 'alexander',
            lastname: '',
            age: 21,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        };
        expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_LAST]);
    });

    test('incorrect age', () => {
        const profile: Profile = {
            first: 'alexander',
            lastname: 'lgkcc',
            age: 0,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        };
        expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
