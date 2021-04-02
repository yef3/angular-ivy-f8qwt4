import { Component, OnInit } from '@angular/core';
const axios = require('axios').default;
declare var require: any;

@Component({
  selector: 'app-jensen',
  templateUrl: './jensen.component.html',
  styleUrls: ['./jensen.component.css']
})
export class JensenComponent implements OnInit {

  mySource = "";

  constructor() { }

  ngOnInit(): void {
  }

  public search_and_save() {
    var inputValue = (<HTMLInputElement>document.querySelector('.search_input')).value;
    console.log(inputValue);
    if (inputValue == "") alert('Please enter city name')
    else {
      axios.get('http://localhost:3000/get_and_save/' + inputValue)
      .then(response => {
        console.log(response.data);
        (<HTMLInputElement>document.querySelector('.city_name')).innerHTML = response.data.city_name;
        (<HTMLInputElement>document.querySelector('.city_Country')).innerHTML = response.data.country;
        (<HTMLInputElement>document.querySelector('.city_info')).innerHTML = response.data.info;
        this.mySource = "https://www.countryflags.io/" + response.data.country + "/flat/64.png";
      })
    }
  }
}
