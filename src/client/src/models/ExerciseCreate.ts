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
 * @interface ExerciseCreate
 */
export interface ExerciseCreate {
    /**
     * 
     * @type {string}
     * @memberof ExerciseCreate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseCreate
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof ExerciseCreate
     */
    sets?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseCreate
     */
    reps?: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseCreate
     */
    trainingId?: string;
}

/**
 * Check if a given object implements the ExerciseCreate interface.
 */
export function instanceOfExerciseCreate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExerciseCreateFromJSON(json: any): ExerciseCreate {
    return ExerciseCreateFromJSONTyped(json, false);
}

export function ExerciseCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sets': !exists(json, 'sets') ? undefined : json['sets'],
        'reps': !exists(json, 'reps') ? undefined : json['reps'],
        'trainingId': !exists(json, 'trainingId') ? undefined : json['trainingId'],
    };
}

export function ExerciseCreateToJSON(value?: ExerciseCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'sets': value.sets,
        'reps': value.reps,
        'trainingId': value.trainingId,
    };
}
