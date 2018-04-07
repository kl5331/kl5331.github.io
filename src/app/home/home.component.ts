import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

/* myEvent(event) {
    console.log(event);

  }

*/
 title:string;

  constructor(private _data: DataService) { }

  ngOnInit() {
  	this._data.currentTitle.subscribe(title => this.title = title)
  }

}