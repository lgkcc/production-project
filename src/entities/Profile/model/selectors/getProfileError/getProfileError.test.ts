import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: ValidateProfileError.SERVER_ERROR },
        };
        expect(getProfileError(state as StateSchema)).toEqual(ValidateProfileError.SERVER_ERROR);
    });
});
