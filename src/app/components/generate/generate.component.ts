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

  ngOnInit() {
    this.mazemaker.initBoard()
    this.mazemaker.initCursor()
   }

 
  onInitMaze(){
    console.log('at generateMaze')
    this.mazemaker.initBoard()
    this.mazemaker.initCursor()
    this.mazemaker.redrawBoard()
  }

  onMove(){
    let keepgoing:boolean = true
    while (keepgoing) {                                //iterate until maze generation is complete
      let result:string = this.mazemaker.runAlgo()
      if (result === 'complete') {keepgoing = false}  
      
      //this.mazemaker.drawCursor()
      this.mazeplay.board  = this.mazemaker.board
      console.log('board has moved over:')
    }
    this.mazemaker.redrawBoard()
  }

  onRedrawMaze(){
    this.mazemaker.redrawBoard()

  }
  
}
