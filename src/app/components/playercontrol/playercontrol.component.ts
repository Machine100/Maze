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
    this.mazeplay.validateMove('up')  // check walls and boundary
    this.mazeplay.movePlayer('up')
    //this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onDown() { 
    if ( !(this.mazeplay.validateMove('down')) ) {return}
    this.mazeplay.movePlayer('down')
    this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onLeft() {
    this.mazeplay.validateMove('left')
    this.mazeplay.movePlayer('left')
    //this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }
  onRight() {
    this.mazeplay.validateMove('right')
    this.mazeplay.movePlayer('right')
    //this.mazeplay.redrawBoard()
    this.mazeplay.drawPlayer()
  }

}
