import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MazeplayService {

  playerColumn: number
  playerRow: number 

  constructor() { this.initPlayer() }

  initPlayer (){ 
    this.playerRow = 0
    this.playerColumn = 0
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
    document.getElementById(playerId).classList.add('filled')
    console.log ('classList:', document.getElementById(playerId).classList.item(1))
   }
}
