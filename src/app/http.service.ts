import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  // for testing purpose
  public sendGetRequest(u: string) {
    return this.httpClient.post("/api", "", { params: { userid: u } });
  }
  // Return city timezone
  public sendCityName(u: string) {
    return this.httpClient.get("/getCityTime", { params: { city_name: u } });
  }
}
