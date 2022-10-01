import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#673ab7',
      typeClass: 'type-span',
    });

    writer
      .type('Welcome to team 2!')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(18)
      .type('Our topic is Data Visualization')
      .rest(500)
      // .remove(4)
      // .type('synchronize callbacks')
      // .rest(500)
      // .changeOps({ deleteSpeed: 20 })
      // .remove(21)
      // .type('change options on the go')
      // .rest(500)
      .clear()
      .start();
  }
}
