import { Component, OnInit } from '@angular/core';
import { MazeplayService } from '../../mazeplay.service'
import { MazemakerService } from '../../mazemaker.service'


@Component({
  selector: 'app-playercontrol',
  templateUrl: './playercontrol.component.html',
  styleUrls: ['./playercontrol.component.scss']
})
export class PlayercontrolComponent implements OnInit {

  constructor(
    private mazeplay: MazeplayService,
    private mazemaker: MazemakerService
  ) {}

  ngOnInit() {}

  onUp() {
    if ( !(this.mazeplay.validateMove('up')) ) {return}  //if move is not valid, reject themove
    this.mazeplay.movePlayer('up')
    this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onDown() { 
    if ( !(this.mazeplay.validateMove('down')) ) {return}  //if move is not valid, reject themove
    this.mazeplay.movePlayer('down')
    this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onLeft() {
    if ( !(this.mazeplay.validateMove('left')) ) {return}  //if move is not valid, reject themove
    this.mazeplay.movePlayer('left')
    this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onRight() {
    if ( !(this.mazeplay.validateMove('right')) ) {return}  //if move is not valid, reject themove
    this.mazeplay.movePlayer('right')
    this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }

}
