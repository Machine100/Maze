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
  stack: string[]

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
      }
    }
    console.log('board:',this.board)
  }

  redrawBoard (){
    let row:number = 0
    let column:number = 0
    for (row=0; row<6; row++){
      for (column=0; column<6; column++){
        let up:boolean = this.board[row][column].wallUp
        let down:boolean = this.board[row][column].wallDown
        let left:boolean = this.board[row][column].wallLeft
        let right:boolean = this.board[row][column].wallRight

        if (!!(right&&left&&up&&down)){document.getElementById(this.board[row][column].id).className = 'none'}

        if (up) {document.getElementById(this.board[row][column].id).className = 'u'};
        if (down) {document.getElementById(this.board[row][column].id).className = 'd'};
        if (left) {document.getElementById(this.board[row][column].id).className = 'l'};
        if (right) {document.getElementById(this.board[row][column].id).className = 'r'};

        if (up&&down) {document.getElementById(this.board[row][column].id).className = 'ud'}; 
        if (left&&down) {document.getElementById(this.board[row][column].id).className = 'ld'};
        if (left&&up) {document.getElementById(this.board[row][column].id).className = 'lu'};
        if (right&&down) {document.getElementById(this.board[row][column].id).className = 'rd'};
        if (right&&up) {document.getElementById(this.board[row][column].id).className = 'ru'};
        if (right&&left) {document.getElementById(this.board[row][column].id).className = 'rl'};

        if (left&&up&&down) {document.getElementById(this.board[row][column].id).className = 'lud'};
        if (right&&up&&down) {document.getElementById(this.board[row][column].id).className = 'rud'};
        if (right&&left&&down) {document.getElementById(this.board[row][column].id).className = 'rld'};
        if (right&&left&&up) {document.getElementById(this.board[row][column].id).className = 'rlu'};

        if (right&&left&&up&&down) {document.getElementById(this.board[row][column].id).className = 'rlud'};

      }
    }
  }
  
  initGrid (){
    let row:number = 0
    let column:number = 0
    let id:string = ''
    for (row=0; row<6; row++){
      for (column=0; column<6; column++){
        id = row.toString() + column.toString()
        document.getElementById(id).className = 'rlud'
      }
    }
  }

  initCursor (){
    this.stack = []               // and instantiate other variables
    this.cursorRow = 0
    this.cursorColumn = 0
  }

  drawCursor(){
    let cursorId:string = this.cursorRow.toString() + this.cursorColumn.toString()
    //document.getElementById(cursorId).className = 'filled'
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
  
  checkLeft(){
    let onStack:boolean = false
    let result = this.board[this.cursorRow][this.cursorColumn - 1]
    this.stack.forEach(item=>{        //check if id is on stack
      if (item === result.id) {onStack=true}
    })   
    if ( (result.visited)||(onStack) ) {return false}
    else return true
  }

  checkUp(){
    let onStack:boolean = false
    let result = this.board[this.cursorRow - 1][this.cursorColumn]
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
    return 'none'     // cursor is at a dead end
  }

  knockoutWalls(direction:string){
    console.log('at knockoutWalls','direction:',direction)
    switch (direction) {
      case 'down':
        this.board[this.cursorRow][this.cursorColumn].wallDown = false
        this.board[this.cursorRow + 1][this.cursorColumn].wallUp = false
        break
      case 'right':
        this.board[this.cursorRow][this.cursorColumn].wallRight = false
        this.board[this.cursorRow][this.cursorColumn + 1].wallLeft = false
        break
      case 'up':
        this.board[this.cursorRow][this.cursorColumn].wallUp = false
        this.board[this.cursorRow - 1][this.cursorColumn].wallDown = false
        break
      case 'left':
        this.board[this.cursorRow][this.cursorColumn].wallLeft = false
        this.board[this.cursorRow][this.cursorColumn - 1].wallRight = false
        }
  }

  moveCursor(direction:string){
    switch (direction) {
      case 'down': ++this.cursorRow; break
      case 'right': ++this.cursorColumn; break
      case 'up': --this.cursorRow; break
      case 'left': --this.cursorColumn
    }
    console.log('cursorRow',this.cursorRow,'cursorColumn:',this.cursorColumn)
    console.log('stack:',this.stack)
  }

  backTrack(){
    let backtrackRow:number
    let backtrackColumn:number
    let cursorId:string = this.cursorRow.toString() + this.cursorColumn.toString()
    this.board[this.cursorRow][this.cursorColumn].visited = true  //mark position as visited
    document.getElementById(cursorId).className = 'visited' // color grid
    let result:string = this.stack.pop() ; console.log ('result:', result) //pop stack
    let resultarray:string[] = result.split('') ; console.log('resultarray',resultarray)
    backtrackRow = Number(resultarray[0]);
    backtrackColumn = Number(resultarray[1])
    this.cursorRow = backtrackRow           // set master cursor position to stackpop position
    this.cursorColumn = backtrackColumn     //
  }
  
  runAlgo(){
    let cursorId:string = this.cursorRow.toString() + this.cursorColumn.toString(); console.log('cursorId:',cursorId)
    let chosenDirection:string = 'none'
    while (chosenDirection === 'none') {
      chosenDirection = this.chooseMove(); console.log(chosenDirection)
      if (chosenDirection === 'none') { this.backTrack() }
    }  
    this.knockoutWalls(chosenDirection)
    this.moveCursor(chosenDirection)
    this.stack.push(cursorId)             // push current position onto stack
  }

}

