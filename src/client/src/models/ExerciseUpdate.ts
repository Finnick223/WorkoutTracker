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
import type { ExerciseSet } from './ExerciseSet';
import {
  ExerciseSetFromJSON,
  ExerciseSetFromJSONTyped,
  ExerciseSetToJSON,
} from './ExerciseSet';

/**
 *
 * @export
 * @interface ExerciseUpdate
 */
export interface ExerciseUpdate {
  /**
   *
   * @type {string}
   * @memberof ExerciseUpdate
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ExerciseUpdate
   */
  name?: string;
  /**
   *
   * @type {Array<ExerciseSet>}
   * @memberof ExerciseUpdate
   */
  sets?: Array<ExerciseSet>;
}

/**
 * Check if a given object implements the ExerciseUpdate interface.
 */
export function instanceOfExerciseUpdate(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ExerciseUpdateFromJSON(json: any): ExerciseUpdate {
  return ExerciseUpdateFromJSONTyped(json, false);
}

export function ExerciseUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExerciseUpdate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    sets: !exists(json, 'sets')
      ? undefined
      : (json['sets'] as Array<any>).map(ExerciseSetFromJSON),
  };
}

export function ExerciseUpdateToJSON(value?: ExerciseUpdate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    sets:
      value.sets === undefined
        ? undefined
        : (value.sets as Array<any>).map(ExerciseSetToJSON),
  };
}