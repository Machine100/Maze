import { Component, OnInit } from '@angular/core';
import { MazeplayService } from '../../mazeplay.service'

@Component({
  selector: 'app-playmaze',
  templateUrl: './playmaze.component.html',
  styleUrls: ['./playmaze.component.scss']
})
export class PlaymazeComponent implements OnInit {

  constructor(private mazeplay: MazeplayService) { }

  ngOnInit() {
  }



  onUp() {
    this.mazeplay.validateMove('up')
    this.mazeplay.movePlayer('up')
    }
  onDown() { this.mazeplay.movePlayer('down')}
  onLeft() { this.mazeplay.movePlayer('left')}
  onRight() { this.mazeplay.movePlayer('right')}
  


}
