/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IWeatherInfo {
  weatherinfo: {
    /** 城市名称 .eg: '北京' */
    city: string;
    /** 城市id .eg: '101010100' */
    cityid: string;
    /** 最低温度 .eg '18℃' */
    temp1: string;
    /** 最高温度 .eg '31℃' */
    temp2: string;
    /** 天气 .eg: '多云转阴' */
    weather: string;
    /** .eg: 'n1.gif' */
    img1: string;
    /** .eg: 'd2.gif' */
    img2: string;
    /** .eg: '18:00' */
    ptime: string;
  };
}
