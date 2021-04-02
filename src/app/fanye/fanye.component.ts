import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-fanye",
  templateUrl: "./fanye.component.html",
  styleUrls: ["./fanye.component.css"]
})
export class FanyeComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {}

  public read() {
    this.httpService.sendCityName("Beijing").subscribe(data => {
      (<HTMLInputElement>document.querySelector("#timezone1")).innerHTML =
        data["timezone"];
    });

    this.httpService.sendCityName("London").subscribe(data => {
      (<HTMLInputElement>document.querySelector("#timezone2")).innerHTML =
        data["timezone"];
    });

    this.httpService.sendCityName("Barcelona").subscribe(data => {
      (<HTMLInputElement>document.querySelector("#timezone3")).innerHTML =
        data["timezone"];
    });
  }

  public refresh() {
    read();
  }
}
