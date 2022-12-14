import { Component, OnInit, AfterViewInit } from '@angular/core';
import Reveal from 'reveal.js';
//import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  
    Reveal.initialize({
      backgroundTransition: 'convex',
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 200,
      parallaxBackgroundVertical: 50
    })
    this.updateArrow();
  }
  
  updateArrow(): void {
    let elements = document.querySelectorAll<HTMLElement>('.controls');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = '#3F464C';
    }
  }

}
