import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  courses_data = [
    {
      title: "Breadboard computer",
      completed: false,
      next_chapter: "https://youtu.be/kRlSFm519Bo",
      next_chapter_embed: "https://www.youtube.com/embed/kRlSFm519Bo"
    },
    {
      title: "Maths puzzles",
      completed: false,
      next_chapter: "https://youtu.be/tjJ2qL9uaz4",
      next_chapter_embed: "https://www.youtube.com/embed/tjJ2qL9uaz4"
    }
  ]

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
