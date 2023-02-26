import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError', () => {
    test('should return profile validateError', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateError: [ValidateProfileError.INCORRECT_FIRST, ValidateProfileError.INCORRECT_LAST] },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_FIRST, ValidateProfileError.INCORRECT_LAST]);
    });
});
