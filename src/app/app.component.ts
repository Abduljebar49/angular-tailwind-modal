import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal = false;

    // openModal() {
    //   this.showModal = true;
    // }

    // closeModal() {
    //   this.showModal = false;
    // }

  openModelButton(){
    this.showModal = !this.showModal;
  }
}