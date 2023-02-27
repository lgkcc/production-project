import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({
            readonly: true,
        });
    });
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                first: 'alexander',
                age: 20,
            },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ age: 21, first: 'lgkcc' })),
        ).toEqual({
            form: {
                first: 'lgkcc',
                age: 21,
            },
        });
    });
    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                first: 'ewfwe',
                lastname: 'wegewg',
                age: 1243,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'weg',
                username: 'lgkcc',
                avatar: 'avatar',
            },
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
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
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
            validateError: undefined,
            readonly: true,
        });
    });
    test('updateProfileData Pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            error: undefined,
            validateError: undefined,
        });
    });
    test('updateProfileData Rejected Server Error', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.rejected(new Error(), '', undefined, [ValidateProfileError.SERVER_ERROR])),
        ).toEqual({
            isLoading: false,
            error: ValidateProfileError.SERVER_ERROR,
            validateError: undefined,
        });
    });
    test('updateProfileData Rejected Validate Error', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.rejected(new Error(), '', undefined, [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_LAST])),
        ).toEqual({
            isLoading: false,
            error: undefined,
            validateError: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_LAST],
        });
    });
    test('updateProfileData fulfilled', () => {
        const data = {
            first: 'alexander',
            lastname: 'lgkcc',
            age: 200,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Yurga',
            username: 'lgkcc',
            avatar: 'avatar',
        };
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            error: undefined,
            validateError: undefined,
            data,
            form: data,
        });
    });
});
