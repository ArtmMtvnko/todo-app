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

	protected get(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected post(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected put(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.put(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	protected delete(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.delete(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}
}
