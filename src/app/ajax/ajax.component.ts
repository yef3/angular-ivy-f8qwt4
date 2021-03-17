import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  userid = ''
  points = 0
  isplaying = false
  toppic = 'https://deckofcardsapi.com/static/img/X1.png'
  bottompic = 'https://deckofcardsapi.com/static/img/X2.png'
  iswin = false
  tmppic = ''

  onKey(value: string) {
    this.userid = value;
  }
  
  constructor(private httpService: HttpService) { }
  
  ngOnInit(): void {
  }

  public mmm() {
    console.log('NOT YET IMPLEMENT')
  }

  public check() {
    if (this.userid != '') {
      this.httpService.sendGetPoints(this.userid).subscribe((data) => {
        this.points = data['totalPoints']
      })
    }
    else {
      alert('Username input empty!')
    }
  }

  public play() {
    if (this.userid != '') {
      this.httpService.sendCreateGame(this.userid).subscribe((data) => {
        this.iswin = data['isWin']
        this.bottompic = data['bot'].image
        this.tmppic = data['user'].image
      })
    }
    else {
      alert('Username input empty!')
    }
  }

  public bet() {
    this.toppic = this.tmppic
    if(this.iswin == true && this.userid != '') {
      this.httpService.sendGainPoints(this.userid).subscribe((data) => {
        this.points = data['totalPoints']
      })
    }
    if(this.iswin == false && this.userid != '') {
      this.httpService.sendLosePoints(this.userid).subscribe((data) => {
        this.points = data['totalPoints']
      })
    }
  }

}