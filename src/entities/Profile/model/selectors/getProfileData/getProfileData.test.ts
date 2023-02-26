import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'alexander',
                    lastname: 'lgkcc',
                    age: 21,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Yurga',
                    username: 'lgkcc',
                    avatar: 'avatar',
                },
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({
            first: 'alexander',
            lastname: 'lgkcc',
            age: 21,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        });
    });
});
