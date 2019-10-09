import { Injectable } from '@angular/core';
import { Cell } from './models/cell'

@Injectable({
  providedIn: 'root'
})
export class MazemakerService {

  constructor() { }

  cursorRow: number                     
  cursorColumn: number
  board: Cell[][]
  stack: []

  initBoard() {
    let row:number = 0
    let column:number = 0
    this.board = [ [],[],[],[],[],[] ]
    for (row=0; row<6; row++){
      for (column=0; column<6; column++){
          this.board[row][column] = {
            id:        row.toString()+column.toString(),
            visited:   false,
            wallUp: true,
            wallDown: true,
            wallLeft: true,
            wallRight: true
          }
          console.log('row:',row,'column',column,this.board)
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
    this.stack = []               // and instantiate other variables
    this.cursorRow = 0
    this.cursorColumn = 0
  }

  checkDown(){
    let onStack:boolean = false
    let result = this.board[this.cursorRow + 1][this.cursorColumn]
    this.stack.forEach(item=>{        //check if id is on stack
      if (item === result.id) {onStack=true}
    })   
    if ( (result.visited)||(onStack) ) return false
    else return true
  }
  
  checkRight(){
    let onStack:boolean = false
    let result = this.board[this.cursorRow][this.cursorColumn + 1]
    this.stack.forEach(item=>{        //check if id is on stack
      if (item === result.id) {onStack=true}
    })   
    if ( (result.visited)||(onStack) ) {return false}
    else return true
  }
  
  chooseMove(){
    let resultDown:boolean = false
    let resultRight:boolean = false
    let resultUp:boolean = false
    let resultLeft:boolean = false
    if (this.cursorRow    != 5) {resultDown = this.checkDown()}
    if (this.cursorColumn != 5) {resultRight = this.checkRight()}
    if (this.cursorRow    != 0) {resultUp = this.checkUp()}
    if (this.cursorColumn != 0) {resultLeft = this.checkLeft()}
    console.log('right:',resultRight,'down:',resultDown,'left:',resultLeft,'up:',resultUp)
    for (let i=0; i<20; i++){
      let random:number = (Math.floor(Math.random()*4))
      console.log('random:',random)
      if (random === 0 && resultDown) {return 'down'}
      if (random === 1 && resultRight) {return 'right'}
      if (random === 2 && resultUp) {return 'up'}
      if (random === 3 && resultLeft) {return 'left'}
    }
  }

  knockoutWalls(direction:string){
    console.log('at knockoutWalls','direction:',direction)
    switch (direction) {
      case 'down':
        this.board[this.cursorRow][this.cursorColumn].wallDown = false
        this.board[this.cursorRow + 1][this.cursorColumn].wallUp = false
      case 'right':
        this.board[this.cursorRow][this.cursorColumn].wallRight = false
        this.board[this.cursorRow][this.cursorColumn + 1].wallLeft = false
      case 'up':
        this.board[this.cursorRow][this.cursorColumn].wallUp = false
        this.board[this.cursorRow + 1][this.cursorColumn].wallDown = false
      case 'left':
        this.board[this.cursorRow][this.cursorColumn].wallLeft = false
        this.board[this.cursorRow][this.cursorColumn + 1].wallRight = false
        }
  }

  moveCursor(direction:string){
    switch (direction) {
      case 'down': ++this.cursorRow
      case 'right': ++this.cursorColumn
      case 'up': --this.cursorRow
      case 'left': --this.cursorColumn
    }
  }

  startAlgo(){
    console.log('board at start:',this.board)
    let chosenDirection:string = this.chooseMove()
    this.knockoutWalls(chosenDirection)
    console.log(chosenDirection)
    this.moveCursor(chosenDirection)
  }

}

