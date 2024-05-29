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
/**
 * 
 * @export
 * @interface UserMeasurement
 */
export interface UserMeasurement {
    /**
     * 
     * @type {string}
     * @memberof UserMeasurement
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof UserMeasurement
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof UserMeasurement
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof UserMeasurement
     */
    height?: number;
}

/**
 * Check if a given object implements the UserMeasurement interface.
 */
export function instanceOfUserMeasurement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserMeasurementFromJSON(json: any): UserMeasurement {
    return UserMeasurementFromJSONTyped(json, false);
}

export function UserMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMeasurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function UserMeasurementToJSON(value?: UserMeasurement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0,10)),
        'weight': value.weight,
        'height': value.height,
    };
}
