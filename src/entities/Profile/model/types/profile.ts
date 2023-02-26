import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_FIRST = 'INCORRECT_NAME',
    INCORRECT_LAST = 'INCORRECT_LAST',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA'
}
export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: ValidateProfileError.SERVER_ERROR;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
