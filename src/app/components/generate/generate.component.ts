import { Component, OnInit } from '@angular/core';
import { MazemakerService } from '../../mazemaker.service'
import { MazeplayService } from '../../mazeplay.service'
//import { Cell } from '../../models/cell'
//import { DeprecatedDatePipe } from '@angular/common';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  constructor(
    private mazemaker: MazemakerService,
    private mazeplay: MazeplayService
    ) {}

  ngOnInit() { }

 
  onGenerateMaze(){
    console.log('at generateMaze')
    this.mazemaker.initBoard()
    this.mazemaker.initCursor()
   
  }

  onMove(){
    this.mazemaker.runAlgo()
    this.mazemaker.redrawBoard()
    this.mazemaker.drawCursor()
    this.mazeplay.board  = this.mazemaker.board
      console.log('board has moved over:')
  }

  onRedrawMaze(){
    this.mazemaker.redrawBoard()

  }
  
}
