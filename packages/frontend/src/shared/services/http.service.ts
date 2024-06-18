import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

export class HttpService {
	private baseUrl: string;
	private fetchingService: AxiosStatic;
	private apiVersion: string;

	constructor(
		baseUrl = process.env.SERVER_URL,
		fetchingService = axios,
		apiVersion = 'api',
	) {
		this.baseUrl = baseUrl;
		this.fetchingService = fetchingService;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): { Authorization: string } {
		return {
			Authorization: localStorage.getItem('token'),
		};
	}

	private extractUrlAndDataFromConfig({
		data: _data,
		url: _url,
		...configWithoutDataAndUrl
	}: AxiosRequestConfig): Omit<AxiosRequestConfig, 'data' | 'url'> {
		return configWithoutDataAndUrl;
	}

	protected get<T>(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get<T>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected post<T>(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post<T>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected put<T>(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.put<T>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected delete<T>(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.delete<T>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}
}
