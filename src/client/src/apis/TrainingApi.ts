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
  Training,
} from '../models/index';
import {
    TrainingFromJSON,
    TrainingToJSON,
} from '../models/index';

export interface CreateTrainingRequest {
    training: Training;
}

export interface DeleteTrainingRequest {
    trainingId: string;
}

export interface GetTrainingByIdRequest {
    trainingId: string;
}

export interface UpdateTrainingRequest {
    trainingId: string;
    training: Training;
}

/**
 * 
 */
export class TrainingApi extends runtime.BaseAPI {

    /**
     * Create training
     */
    async createTrainingRaw(requestParameters: CreateTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Training>> {
        if (requestParameters.training === null || requestParameters.training === undefined) {
            throw new runtime.RequiredError('training','Required parameter requestParameters.training was null or undefined when calling createTraining.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/training`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrainingToJSON(requestParameters.training),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrainingFromJSON(jsonValue));
    }

    /**
     * Create training
     */
    async createTraining(requestParameters: CreateTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Training> {
        const response = await this.createTrainingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete training
     */
    async deleteTrainingRaw(requestParameters: DeleteTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.trainingId === null || requestParameters.trainingId === undefined) {
            throw new runtime.RequiredError('trainingId','Required parameter requestParameters.trainingId was null or undefined when calling deleteTraining.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/training/{trainingId}`.replace(`{${"trainingId"}}`, encodeURIComponent(String(requestParameters.trainingId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete training
     */
    async deleteTraining(requestParameters: DeleteTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTrainingRaw(requestParameters, initOverrides);
    }

    /**
     * Get training by id
     */
    async getTrainingByIdRaw(requestParameters: GetTrainingByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Training>> {
        if (requestParameters.trainingId === null || requestParameters.trainingId === undefined) {
            throw new runtime.RequiredError('trainingId','Required parameter requestParameters.trainingId was null or undefined when calling getTrainingById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/training/{trainingId}`.replace(`{${"trainingId"}}`, encodeURIComponent(String(requestParameters.trainingId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrainingFromJSON(jsonValue));
    }

    /**
     * Get training by id
     */
    async getTrainingById(requestParameters: GetTrainingByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Training> {
        const response = await this.getTrainingByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all trainings
     */
    async getTrainingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Training>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/training`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrainingFromJSON));
    }

    /**
     * Get all trainings
     */
    async getTrainings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Training>> {
        const response = await this.getTrainingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update training
     */
    async updateTrainingRaw(requestParameters: UpdateTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Training>> {
        if (requestParameters.trainingId === null || requestParameters.trainingId === undefined) {
            throw new runtime.RequiredError('trainingId','Required parameter requestParameters.trainingId was null or undefined when calling updateTraining.');
        }

        if (requestParameters.training === null || requestParameters.training === undefined) {
            throw new runtime.RequiredError('training','Required parameter requestParameters.training was null or undefined when calling updateTraining.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/training/{trainingId}`.replace(`{${"trainingId"}}`, encodeURIComponent(String(requestParameters.trainingId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TrainingToJSON(requestParameters.training),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrainingFromJSON(jsonValue));
    }

    /**
     * Update training
     */
    async updateTraining(requestParameters: UpdateTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Training> {
        const response = await this.updateTrainingRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
