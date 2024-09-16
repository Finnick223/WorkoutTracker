/* tslint:disable */
/* eslint-disable */
/**
 * WorkoutTracker
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Training } from './Training';
import {
  TrainingFromJSON,
  TrainingFromJSONTyped,
  TrainingToJSON,
} from './Training';
import type { UserMeasurement } from './UserMeasurement';
import {
  UserMeasurementFromJSON,
  UserMeasurementFromJSONTyped,
  UserMeasurementToJSON,
} from './UserMeasurement';

/**
 *
 * @export
 * @interface UserDetails
 */
export interface UserDetails {
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  createdOn?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  modifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  lastName?: string;
  /**
   *
   * @type {string}
   * @memberof UserDetails
   */
  genders?: string;
  /**
   *
   * @type {number}
   * @memberof UserDetails
   */
  age?: number;
  /**
   *
   * @type {number}
   * @memberof UserDetails
   */
  height?: number;
  /**
   *
   * @type {Array<UserMeasurement>}
   * @memberof UserDetails
   */
  userMeasurements?: Array<UserMeasurement>;
  /**
   *
   * @type {Array<Training>}
   * @memberof UserDetails
   */
  trainings?: Array<Training>;
}

/**
 * Check if a given object implements the UserDetails interface.
 */
export function instanceOfUserDetails(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserDetailsFromJSON(json: any): UserDetails {
  return UserDetailsFromJSONTyped(json, false);
}

export function UserDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserDetails {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    createdOn: !exists(json, 'createdOn') ? undefined : json['createdOn'],
    modifiedOn: !exists(json, 'modifiedOn') ? undefined : json['modifiedOn'],
    email: !exists(json, 'email') ? undefined : json['email'],
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    genders: !exists(json, 'genders') ? undefined : json['genders'],
    age: !exists(json, 'age') ? undefined : json['age'],
    height: !exists(json, 'height') ? undefined : json['height'],
    userMeasurements: !exists(json, 'userMeasurements')
      ? undefined
      : (json['userMeasurements'] as Array<any>).map(UserMeasurementFromJSON),
    trainings: !exists(json, 'trainings')
      ? undefined
      : (json['trainings'] as Array<any>).map(TrainingFromJSON),
  };
}

export function UserDetailsToJSON(value?: UserDetails | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    createdOn: value.createdOn,
    modifiedOn: value.modifiedOn,
    email: value.email,
    firstName: value.firstName,
    lastName: value.lastName,
    genders: value.genders,
    age: value.age,
    height: value.height,
    userMeasurements:
      value.userMeasurements === undefined
        ? undefined
        : (value.userMeasurements as Array<any>).map(UserMeasurementToJSON),
    trainings:
      value.trainings === undefined
        ? undefined
        : (value.trainings as Array<any>).map(TrainingToJSON),
  };
}
