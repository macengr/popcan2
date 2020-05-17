import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public locationText = '';
  constructor( ) { }

  ngOnInit() {
  }

  triggerFunction(event) {
    console.log(event);
    if (event.key === 'Enter') {
       this.locationText = 'City of Pittsburgh';
     }
  }
}
