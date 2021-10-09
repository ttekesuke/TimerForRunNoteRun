import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  downTimerStarted: Boolean = false
  upTimerStarted: Boolean = false
  finished: Boolean = false
  downCounter: number = 10
  upCounter: number = 0
  movementCounter = 0
  downTimer: any
  upTimer: any

  startTimer() :void{
    this.finished = false
    this.downTimerStarted = true
    this.downTimer = setInterval(() => {this.decrement()}, 1000)
  }

  stopTimer() :void{
    if(this.downTimerStarted){
      this.downTimerStarted = false
      clearInterval(this.downTimer)
    }else if(this.upTimerStarted){
      this.upTimerStarted = false
      clearInterval(this.upTimer)
    }
    this.downCounter = 10
    this.upCounter = 0
    this.movementCounter = 0
  }

  decrement(): void{
    this.downCounter -= 1
    if(this.downCounter == 0) {
      this.movementCounter += 1
      this.downTimerStarted = false
      this.upTimerStarted = true
      clearInterval(this.downTimer)
      this.upTimer = setInterval(() => {this.increment()}, 1000)
    }
  }

  increment(): void{
    this.upCounter += 1
    if(this.upCounter == 60) {
      this.upCounter = 0
      this.movementCounter += 1
      if(this.movementCounter == 7){
        this.upTimerStarted = false
        this.movementCounter = 0
        this.downCounter = 10
        this.upCounter = 0
        this.finished = true
        clearInterval(this.upTimer)
      }
    }
  }
}
