import { AxiosInstance } from "axios";

export default abstract class Api {
  private instance = {};

  constructor(instance: object) {
    this.instance = instance;
  }

  protected getUrl(url?: string) {
    return `${(this.instance as AxiosInstance).defaults?.baseURL}/${url || ""}`;
  }

  protected post<T>(url: string, data?: unknown, config?: any) {
    return (this.instance as AxiosInstance).post<T>(
      this.getUrl(url),
      data,
      config,
    );
  }

  protected put<T>(url: string, data?: unknown, config?: any) {
    return (this.instance as AxiosInstance).put<T>(
      this.getUrl(url),
      data,
      config,
    );
  }

  protected patch<T>(url: string, data?: unknown, config?: any) {
    return (this.instance as AxiosInstance).patch<T>(
      this.getUrl(url),
      data,
      config,
    );
  }

  protected get<T>(url: string, config?: any) {
    return (this.instance as AxiosInstance).get<T>(this.getUrl(url), config);
  }

  protected delete<T>(url: string, config?: any) {
    return (this.instance as AxiosInstance).delete<T>(this.getUrl(url), config);
  }
}
