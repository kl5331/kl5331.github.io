import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

	 private title = new BehaviorSubject<string>("Moonlit Eden");
	 currentTitle = this.title.asObservable();

  constructor() { }

  	changeTitle(title: string) {
    this.title.next(title)

	}
}
