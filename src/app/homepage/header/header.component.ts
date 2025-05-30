import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isShown = signal(true);
  isOpened = signal(false);
  displayNone() {
    this.isShown.set(false);
  }
  //maxi :)
  openMenu() {
    this.isOpened.update((current: any) => !current);
  }
  //   openMenu() {
  //   this.isOpened.set(!this.isOpened());
  // }
}

//note1: img will hold the transtion
