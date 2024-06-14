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
 * @interface Exercise
 */
export interface Exercise {
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    modifiedOn?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Exercise
     */
    sets?: number;
    /**
     * 
     * @type {number}
     * @memberof Exercise
     */
    reps?: number;
}

/**
 * Check if a given object implements the Exercise interface.
 */
export function instanceOfExercise(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExerciseFromJSON(json: any): Exercise {
    return ExerciseFromJSONTyped(json, false);
}

export function ExerciseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exercise {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdOn': !exists(json, 'createdOn') ? undefined : json['createdOn'],
        'modifiedOn': !exists(json, 'modifiedOn') ? undefined : json['modifiedOn'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sets': !exists(json, 'sets') ? undefined : json['sets'],
        'reps': !exists(json, 'reps') ? undefined : json['reps'],
    };
}

export function ExerciseToJSON(value?: Exercise | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdOn': value.createdOn,
        'modifiedOn': value.modifiedOn,
        'name': value.name,
        'description': value.description,
        'sets': value.sets,
        'reps': value.reps,
    };
}

