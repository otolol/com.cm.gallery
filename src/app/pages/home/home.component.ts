import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import { FavoritesService } from '../../services/favorites.service';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'xm-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor(
    private photosService: PhotosService,
    private favoritesService: FavoritesService
  ) {}
  
  /**
   * 
   */
  images$: Observable<Array<Image>> = this.photosService.images$;
  
  /**
   * 
   */
  isLoading$: Observable<boolean> = this.photosService.isLoading$;

  /**
   * handler of add favorite
   * @param $event 
   */
   addFavorite($event: { id: string }) {
    this.favoritesService.addFavorite($event.id);
  }

  /**
   * handler of scroll
   * @param _$event 
   */
  onScroll(_$event: any) {
    this.photosService.fetchImages();
  }

  identity(_index: number, item: Image) {
    return item.id;
  }
}
