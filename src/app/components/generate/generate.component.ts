import { Component, OnInit } from '@angular/core';
import { Cell } from '../../models/cell'

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  
  constructor() {}

  ngOnInit() { }

  generateMaze(){
    console.log('at generateMaze')
  }

  
}
