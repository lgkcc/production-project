import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileError', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
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
        expect(getProfileForm(state as StateSchema)).toEqual({
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
