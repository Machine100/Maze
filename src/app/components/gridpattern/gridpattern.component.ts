import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridpattern',
  templateUrl: './gridpattern.component.html',
  styleUrls: ['./gridpattern.component.scss']
})
export class GridpatternComponent implements OnInit {

  content: any // document.getElementById('dynamic')
  
  constructor() { }

  ngOnInit() { 
    this.dynamicGenerate()
  }

  dynamicGenerate () {
    // we can grab an element and overwrite the HTML on the element:
    document.getElementById('dynamic').innerHTML = '<h4> testme </h4>'
    // we can grab an element and overwrite the CSS on the element:
    document.getElementById('dynamic').className = 'filled'   // <-- add this into the SCSS
  }                                                           // so we can toggle fill/empty

  
}
