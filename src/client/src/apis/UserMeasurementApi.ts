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
  UserMeasurement,
  UserMeasurementCreate,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    UserMeasurementFromJSON,
    UserMeasurementToJSON,
    UserMeasurementCreateFromJSON,
    UserMeasurementCreateToJSON,
} from '../models/index';

export interface CreateUserMeasurementRequest {
    userMeasurementCreate: UserMeasurementCreate;
}

export interface DeleteUserMeasurementRequest {
    userMeasurementId: string;
}

export interface GetUserMeasurementByIdRequest {
    userMeasurementId: string;
}

export interface GetUserMeasurementsRequest {
    page?: number;
    size?: number;
}

export interface UpdateUserMeasurementRequest {
    userMeasurementId: string;
    userMeasurementCreate: UserMeasurementCreate;
}

/**
 * 
 */
export class UserMeasurementApi extends runtime.BaseAPI {

    /**
     * Create user measurement
     */
    async createUserMeasurementRaw(requestParameters: CreateUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserMeasurement>> {
        if (requestParameters.userMeasurementCreate === null || requestParameters.userMeasurementCreate === undefined) {
            throw new runtime.RequiredError('userMeasurementCreate','Required parameter requestParameters.userMeasurementCreate was null or undefined when calling createUserMeasurement.');
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
            path: `/usermeasurement`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserMeasurementCreateToJSON(requestParameters.userMeasurementCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserMeasurementFromJSON(jsonValue));
    }

    /**
     * Create user measurement
     */
    async createUserMeasurement(requestParameters: CreateUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserMeasurement> {
        const response = await this.createUserMeasurementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete user measurement
     */
    async deleteUserMeasurementRaw(requestParameters: DeleteUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userMeasurementId === null || requestParameters.userMeasurementId === undefined) {
            throw new runtime.RequiredError('userMeasurementId','Required parameter requestParameters.userMeasurementId was null or undefined when calling deleteUserMeasurement.');
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
            path: `/usermeasurement/{userMeasurementId}`.replace(`{${"userMeasurementId"}}`, encodeURIComponent(String(requestParameters.userMeasurementId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete user measurement
     */
    async deleteUserMeasurement(requestParameters: DeleteUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserMeasurementRaw(requestParameters, initOverrides);
    }

    /**
     * Get user measurement by id
     */
    async getUserMeasurementByIdRaw(requestParameters: GetUserMeasurementByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserMeasurement>> {
        if (requestParameters.userMeasurementId === null || requestParameters.userMeasurementId === undefined) {
            throw new runtime.RequiredError('userMeasurementId','Required parameter requestParameters.userMeasurementId was null or undefined when calling getUserMeasurementById.');
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
            path: `/usermeasurement/{userMeasurementId}`.replace(`{${"userMeasurementId"}}`, encodeURIComponent(String(requestParameters.userMeasurementId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserMeasurementFromJSON(jsonValue));
    }

    /**
     * Get user measurement by id
     */
    async getUserMeasurementById(requestParameters: GetUserMeasurementByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserMeasurement> {
        const response = await this.getUserMeasurementByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all user measurements
     */
    async getUserMeasurementsRaw(requestParameters: GetUserMeasurementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserMeasurement>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/usermeasurement`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserMeasurementFromJSON));
    }

    /**
     * Get all user measurements
     */
    async getUserMeasurements(requestParameters: GetUserMeasurementsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserMeasurement>> {
        const response = await this.getUserMeasurementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update user measurement
     */
    async updateUserMeasurementRaw(requestParameters: UpdateUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserMeasurement>> {
        if (requestParameters.userMeasurementId === null || requestParameters.userMeasurementId === undefined) {
            throw new runtime.RequiredError('userMeasurementId','Required parameter requestParameters.userMeasurementId was null or undefined when calling updateUserMeasurement.');
        }

        if (requestParameters.userMeasurementCreate === null || requestParameters.userMeasurementCreate === undefined) {
            throw new runtime.RequiredError('userMeasurementCreate','Required parameter requestParameters.userMeasurementCreate was null or undefined when calling updateUserMeasurement.');
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
            path: `/usermeasurement/{userMeasurementId}`.replace(`{${"userMeasurementId"}}`, encodeURIComponent(String(requestParameters.userMeasurementId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserMeasurementCreateToJSON(requestParameters.userMeasurementCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserMeasurementFromJSON(jsonValue));
    }

    /**
     * Update user measurement
     */
    async updateUserMeasurement(requestParameters: UpdateUserMeasurementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserMeasurement> {
        const response = await this.updateUserMeasurementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
