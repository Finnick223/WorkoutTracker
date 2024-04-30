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


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

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
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Exercise
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof Exercise
     */
    'sets'?: number;
    /**
     * 
     * @type {number}
     * @memberof Exercise
     */
    'reps'?: number;
}
/**
 * 
 * @export
 * @interface Training
 */
export interface Training {
    /**
     * 
     * @type {string}
     * @memberof Training
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Training
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Training
     */
    'description'?: string;
    /**
     * 
     * @type {Array<Exercise>}
     * @memberof Training
     */
    'exercises'?: Array<Exercise>;
    /**
     * 
     * @type {Array<TrainingCategory>}
     * @memberof Training
     */
    'trainingCategories'?: Array<TrainingCategory>;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const TrainingCategory = {
    Powerlifting: 'powerlifting',
    OlympicWeightlifting: 'olympic weightlifting',
    Cardio: 'cardio',
    Stretching: 'stretching',
    Other: 'other'
} as const;

export type TrainingCategory = typeof TrainingCategory[keyof typeof TrainingCategory];


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
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName'?: string;
    /**
     * 
     * @type {Array<UserMeasurement>}
     * @memberof User
     */
    'userMeasurements'?: Array<UserMeasurement>;
    /**
     * 
     * @type {Array<Training>}
     * @memberof User
     */
    'trainings'?: Array<Training>;
}
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
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserMeasurement
     */
    'date'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserMeasurement
     */
    'weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserMeasurement
     */
    'height'?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<User>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsers(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }
}



