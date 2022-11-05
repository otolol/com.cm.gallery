import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'xm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  /**
   * image id
   */
  @Input() id: string = '';

  /**
   * eventemiter when card is clicked
   */
  @Output() card: EventEmitter<{ id: string }> = new EventEmitter<{
    id: string;
  }>();

  imageUrl: string = '';

  ngOnInit() {
    this.imageUrl = `https://picsum.photos/id/${this.id}/300`;
  }

  
  /**
   * card click handler
   * @param  {string} id
   */
  onCard(id: string) {
    this.card.emit({id: id})
  }
}
