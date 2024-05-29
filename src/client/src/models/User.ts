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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {Array<UserMeasurement>}
     * @memberof User
     */
    userMeasurements?: Array<UserMeasurement>;
    /**
     * 
     * @type {Array<Training>}
     * @memberof User
     */
    trainings?: Array<Training>;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'userMeasurements': !exists(json, 'userMeasurements') ? undefined : ((json['userMeasurements'] as Array<any>).map(UserMeasurementFromJSON)),
        'trainings': !exists(json, 'trainings') ? undefined : ((json['trainings'] as Array<any>).map(TrainingFromJSON)),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'userMeasurements': value.userMeasurements === undefined ? undefined : ((value.userMeasurements as Array<any>).map(UserMeasurementToJSON)),
        'trainings': value.trainings === undefined ? undefined : ((value.trainings as Array<any>).map(TrainingToJSON)),
    };
}
