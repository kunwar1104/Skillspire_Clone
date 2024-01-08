import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  @ViewChild('hiddenCards') hiddenCards: ElementRef<any> | any;
  showHiddenCards: boolean = false;
  showMoreContent = false;


  toggleContent1(cardId: string): void {
    console.log('hello');
    const cardBodyMore = document.querySelector(`#${cardId}`);
    if (cardBodyMore) {
      cardBodyMore.classList.toggle('d-none');
    }
  }

  viewMore(): void {
    this.showHiddenCards = true;
    this.hiddenCards.nativeElement.classList.remove('d-none');
  }

  // card by Ai

  toggleContent2() : void {
    this.showMoreContent = this.showMoreContent;
  }
}
