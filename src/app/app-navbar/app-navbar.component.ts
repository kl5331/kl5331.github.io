import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

	title:string;

  constructor(private _data: DataService) { }

  ngOnInit() {
  	this._data.currentTitle.subscribe(title => this.title = title)
  }

}
