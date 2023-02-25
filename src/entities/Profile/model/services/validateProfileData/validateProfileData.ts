import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first,
        age,
        country,
        lastname,
    } = profile;

    const validateError: ValidateProfileError[] = [];

    if (!first) {
        validateError.push(ValidateProfileError.INCORRECT_FIRST);
    }

    if (!lastname) {
        validateError.push(ValidateProfileError.INCORRECT_LAST);
    }

    if (!age || !Number.isInteger(age)) {
        validateError.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        validateError.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return validateError;
};
