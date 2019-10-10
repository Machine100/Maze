import { Component, OnInit } from '@angular/core';
import { MazemakerService } from '../../mazemaker.service'
import { Cell } from '../../models/cell'
import { DeprecatedDatePipe } from '@angular/common';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  constructor(private mazemaker: MazemakerService) {}

  ngOnInit() { }

 
  onGenerateMaze(){
    console.log('at generateMaze')
    this.mazemaker.initBoard()
    this.mazemaker.initBoard()
    this.mazemaker.initCursor()
   
  }

  onMove(){
    this.mazemaker.runAlgo()
    this.mazemaker.drawCursor()

  }

  
}
