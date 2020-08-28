import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
