import { LIMITS } from 'common/constants';

import { isNonEmptyString } from './primitiveChecks';

/**
 * Return true, if @param email is valid
 *
 * @param e is string
 */
export function isEmailValid(e: string | undefined | null) {
  if (isNonEmptyString(e)) {
    const email = e?.trim();
    const regexEmail =
      /^(?:[\w!#$%&'*+\-/=?^`{|}~]+\.)*[\w!#$%&'*+\-/=?^`{|}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!email?.match(regexEmail)) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Return true, if @param password is valid
 * current check:
 * 1. Atleast 8 character
 * 2. Atleast 1 uppercase
 * 3. Atleast 1 lowercase
 * 4. Atleast 1 digit
 * 5. Atleast 1 special chacater
 *
 * @todo: Use LIMITS to know min & max password length
 *
 * @param p is string
 */
export function isPasswordValid(p: string) {
  const passwordregix =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
  return Array.isArray(p.match(passwordregix));
}

/**
 * Return true, if @param phoneNumber  is valid
 *
 * @param p is string
 */
export function isPhoneNumberValid(p: string | undefined | null) {
  if (isNonEmptyString(p)) {
    return (p?.length || 0) >= LIMITS.minPhoneNumberLength;
  }
  return false;
}
