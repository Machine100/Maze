import { Injectable } from '@angular/core';
import { Cell } from './models/cell'

@Injectable({
  providedIn: 'root'
})
export class MazeplayService {

  playerColumn: number
  playerRow: number
  board: Cell[][]         // this is coming over in janky way from the redraw board button

  constructor() { this.initPlayer() }

  initPlayer (){ 
    this.playerRow = 0
    this.playerColumn = 0
  }

  validateMove (direction:string){                     //check if boundary blocks the move
    if (this.playerRow === 0 && direction === 'up') { console.log('invalid move'); return false }     
    if (this.playerRow === 9 && direction === 'down') { console.log('invalid move'); return false }   
    if (this.playerColumn === 0 && direction === 'left') { console.log('invalid move'); return false }
    if (this.playerColumn === 9 && direction === 'right') { console.log('invalid move'); return false }  

    //let id:string = this.playerRow.toString() + this.playerColumn.toString()
    //console.log ('id:',id)                           //check if a wall blocks the move
    if (this.board[this.playerRow][this.playerColumn].wallUp === true && direction === 'up') { console.log('wall block'); return false } 
    if (this.board[this.playerRow][this.playerColumn].wallDown === true && direction === 'down') { console.log('wall block'); return false } 
    if (this.board[this.playerRow][this.playerColumn].wallLeft === true && direction === 'left') { console.log('wall block'); return false }
    if (this.board[this.playerRow][this.playerColumn].wallRight === true && direction === 'right') { console.log('wall block'); return false } 
     
    return true
  }
  
  movePlayer(direction:string){
    switch (direction) {
      case 'down': ++this.playerRow; break
      case 'right': ++this.playerColumn; break
      case 'up': --this.playerRow; break
      case 'left': --this.playerColumn
    }
    console.log('playerRow',this.playerRow,'playerColumn:',this.playerColumn)
  }

  drawPlayer(){
    let playerId:string = this.playerRow.toString() + this.playerColumn.toString()
    console.log('id:',playerId)
    console.log ('classList:', document.getElementById(playerId).classList.item(0))
    document.getElementById(playerId).classList.add('player-here')
    console.log ('classList:', document.getElementById(playerId).classList.item(1))
  }

   redrawBoard (){
    let row:number = 0
    let column:number = 0
    for (row=0; row<10; row++){
      for (column=0; column<10; column++){
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
   
}