import { ApiServiceInterface } from '@/services/api.interface';
import { axiosService } from '@/services/axios.service';

export class ApiService implements ApiServiceInterface {
  public getWeather(city: string) {
    return axiosService.get(`weather`, {
      params: {
        city
      }
    });
  }
}
