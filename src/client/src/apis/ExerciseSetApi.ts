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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  ExerciseSet,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ExerciseSetFromJSON,
    ExerciseSetToJSON,
} from '../models/index';

export interface CreateExerciseSetRequest {
    exerciseId: string;
    exerciseSet: ExerciseSet;
}

export interface DeleteExerciseSetRequest {
    setId: string;
}

export interface GetExerciseSetRequest {
    setId: string;
}

export interface GetExerciseSetsRequest {
    exerciseId: string;
}

export interface UpdateExerciseSetRequest {
    setId: string;
    exerciseSet: ExerciseSet;
}

/**
 * 
 */
export class ExerciseSetApi extends runtime.BaseAPI {

    /**
     * Create a new exercise set
     */
    async createExerciseSetRaw(requestParameters: CreateExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExerciseSet>> {
        if (requestParameters.exerciseId === null || requestParameters.exerciseId === undefined) {
            throw new runtime.RequiredError('exerciseId','Required parameter requestParameters.exerciseId was null or undefined when calling createExerciseSet.');
        }

        if (requestParameters.exerciseSet === null || requestParameters.exerciseSet === undefined) {
            throw new runtime.RequiredError('exerciseSet','Required parameter requestParameters.exerciseSet was null or undefined when calling createExerciseSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/exercises/{exerciseId}/sets`.replace(`{${"exerciseId"}}`, encodeURIComponent(String(requestParameters.exerciseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExerciseSetToJSON(requestParameters.exerciseSet),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExerciseSetFromJSON(jsonValue));
    }

    /**
     * Create a new exercise set
     */
    async createExerciseSet(requestParameters: CreateExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExerciseSet> {
        const response = await this.createExerciseSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an exercise set
     */
    async deleteExerciseSetRaw(requestParameters: DeleteExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.setId === null || requestParameters.setId === undefined) {
            throw new runtime.RequiredError('setId','Required parameter requestParameters.setId was null or undefined when calling deleteExerciseSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/exercises/sets/{setId}`.replace(`{${"setId"}}`, encodeURIComponent(String(requestParameters.setId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an exercise set
     */
    async deleteExerciseSet(requestParameters: DeleteExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteExerciseSetRaw(requestParameters, initOverrides);
    }

    /**
     * Get an exercise set by ID
     */
    async getExerciseSetRaw(requestParameters: GetExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExerciseSet>> {
        if (requestParameters.setId === null || requestParameters.setId === undefined) {
            throw new runtime.RequiredError('setId','Required parameter requestParameters.setId was null or undefined when calling getExerciseSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/exercises/sets/{setId}`.replace(`{${"setId"}}`, encodeURIComponent(String(requestParameters.setId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExerciseSetFromJSON(jsonValue));
    }

    /**
     * Get an exercise set by ID
     */
    async getExerciseSet(requestParameters: GetExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExerciseSet> {
        const response = await this.getExerciseSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all exercise sets for a specific exercise
     */
    async getExerciseSetsRaw(requestParameters: GetExerciseSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ExerciseSet>>> {
        if (requestParameters.exerciseId === null || requestParameters.exerciseId === undefined) {
            throw new runtime.RequiredError('exerciseId','Required parameter requestParameters.exerciseId was null or undefined when calling getExerciseSets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/exercises/{exerciseId}/sets`.replace(`{${"exerciseId"}}`, encodeURIComponent(String(requestParameters.exerciseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExerciseSetFromJSON));
    }

    /**
     * Get all exercise sets for a specific exercise
     */
    async getExerciseSets(requestParameters: GetExerciseSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ExerciseSet>> {
        const response = await this.getExerciseSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an exercise set
     */
    async updateExerciseSetRaw(requestParameters: UpdateExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExerciseSet>> {
        if (requestParameters.setId === null || requestParameters.setId === undefined) {
            throw new runtime.RequiredError('setId','Required parameter requestParameters.setId was null or undefined when calling updateExerciseSet.');
        }

        if (requestParameters.exerciseSet === null || requestParameters.exerciseSet === undefined) {
            throw new runtime.RequiredError('exerciseSet','Required parameter requestParameters.exerciseSet was null or undefined when calling updateExerciseSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/exercises/sets/{setId}`.replace(`{${"setId"}}`, encodeURIComponent(String(requestParameters.setId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExerciseSetToJSON(requestParameters.exerciseSet),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExerciseSetFromJSON(jsonValue));
    }

    /**
     * Update an exercise set
     */
    async updateExerciseSet(requestParameters: UpdateExerciseSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExerciseSet> {
        const response = await this.updateExerciseSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
