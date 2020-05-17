import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-temp-menu',
  templateUrl: './temp-menu.component.html',
  styleUrls: ['./temp-menu.component.scss']
})
export class TempMenuComponent implements OnInit {

  constructor(private _http: HttpService) { }

  item: object;

  ngOnInit() {
  }

  hitClassifier() {
    this._http.queryClassifier().subscribe(data => {
      this.item = data;
      console.log(this.item);
    });
  }

}
