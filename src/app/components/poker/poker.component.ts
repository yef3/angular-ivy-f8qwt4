import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  public name:any='test';

  constructor() { }

  ngOnInit(): void {
  }
 
  update() {
    var userid = (<HTMLInputElement>document.getElementById('userId'))
    if(userid.value == '') alert('Please enter username')
    else {
      console.log(userid.value)
    }
  }
}
