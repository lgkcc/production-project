import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: ProfileSchema = {
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
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(state, profileActions.setReadonly(true)),
        ).toEqual({
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
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: true,
            validateError: undefined,
        });
    });
    test('updateProfile', () => {
        const state: ProfileSchema = {
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
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(state, profileActions.updateProfile({ age: 21, first: 'lgkcc' })),
        ).toEqual({
            form: {
                first: 'lgkcc',
                lastname: 'lgkcc',
                age: 21,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        });
    });
    test('cancelEdit', () => {
        const state: ProfileSchema = {
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
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(
            profileReducer(state, profileActions.cancelEdit()),
        ).toEqual({
            form: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            isLoading: false,
            data: {
                first: 'alexander',
                lastname: 'lgkcc',
                age: 200,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Yurga',
                username: 'lgkcc',
                avatar: 'avatar',
            },
            readonly: true,
            validateError: undefined,
        });
    });
});
