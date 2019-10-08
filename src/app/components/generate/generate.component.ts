import { Component, OnInit } from '@angular/core';
import { Cell } from '../../models/cell'

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  cursorRow: number                     
  cursorColumn: number
  board: Cell[][]
  stack: []
  
  constructor() {}

  ngOnInit() {
    this.initBoard()
    this.initGrid()
    this.initCursor()
    this.startAlgo()
  }

  initBoard() {
    let row:number = 0
    let column:number = 0
    this.board = [ [],[],[],[],[],[] ]
    for (row=0; row<6; row++){
      for (column=0; column<6; column++){
        this.board[row][column] = {
          id:        row.toString()+column.toString(),
          visited:   false,
          wallUp:    true,
          wallDown:  true,
          wallLeft:  true,
          wallRight: true
        }
      }
    }
    console.log('board:',this.board)
  }
  
  initGrid (){
    let row:number = 0
    let column:number = 0
    let id:string = ''
    for (row=0; row<6; row++){
      for (column=0; column<6; column++){
        id = row.toString() + column.toString()
        document.getElementById(id).className = 'empty'
      }
    }
  }

  initCursor (){
    this.cursorRow = 0
    this.cursorColumn = 0
  }

  checkDown(){
    let result = this.board[this.cursorRow + 1][this.cursorColumn]
    console.log('down',result)
    //check if id is on stack
    this.stack.forEach
    //check if marked visited
    // if both false then this is a possible move
  }
  
  checkPossibleMoves(){
    this.checkDown()
    
    // let rightId:string = '01'
    // let downId:string = '10'
    // if this.board[this.cursorRow][this.cursorColumn] = 
  


  }

  startAlgo(){
    this.checkPossibleMoves()
  }

}
