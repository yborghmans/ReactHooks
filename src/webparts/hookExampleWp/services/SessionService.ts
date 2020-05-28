import { HttpClientResponse, HttpClient } from '@microsoft/sp-http';
import ISession from '../interfaces/ISession';
export const SessionService = () => {

    const GetSessions = async (httpClient: HttpClient): Promise<ISession[]> => {
        return httpClient.get("https://localhost:44387/api/values", HttpClient.configurations.v1)
            .then((data: HttpClientResponse) => data.json())
            .then((data: any) => {
                return data;
            });
    };
    return { GetSessions };
};