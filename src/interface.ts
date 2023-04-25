/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IWeatherInfo {
  weatherInfo: {
    city: string;
    cityId: string;
    temp: string;
    WD: string;
    WS: string;
    SD: string;
    AP: string;
    njd: string;
    WSE: string;
    time: string;
    sm: string;
    isRadar: string;
    Radar: string;
  };
}
