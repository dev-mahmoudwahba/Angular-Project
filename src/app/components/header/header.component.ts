import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public LogoHeader:string = "../../../assets/icons/hawary.png"
  constructor() { }

  ngOnInit(): void {
  }
  text:string = "hello visitor"

}
