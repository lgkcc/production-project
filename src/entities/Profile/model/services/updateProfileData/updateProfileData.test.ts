import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

describe('fetchProfileData', () => {
    const formValue = {
        first: 'alexander',
        lastname: 'lgkcc',
        age: 21,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Yurga',
        username: 'lgkcc',
        avatar: 'avatar',
    };
    const formValueError = {
        first: '',
        lastname: 'lgkcc',
        age: 21,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Yurga',
        username: 'lgkcc',
        avatar: 'avatar',
    };
    test('success login', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: formValue,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: formValue }));
        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(formValue);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: formValueError,
            },
        });
        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_FIRST]);
    });

    test('no data error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
            },
        });
        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: formValue,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});
