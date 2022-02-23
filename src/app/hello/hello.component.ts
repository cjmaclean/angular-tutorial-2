import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myname = "Caspian"
  inval = "hey there"
  part_disabled = true

  constructor() { }

  ngOnInit(): void {
  }

  callMyFunction() {
    this.inval = this.inval + "hey"
    this.part_disabled = !this.part_disabled
  }

  updateFromEvent(e: Event) {
    //return
    this.inval = (e.target as HTMLInputElement).value
  }

}
