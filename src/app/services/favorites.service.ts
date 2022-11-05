import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private notificationService: NotificationService) {}


  /**
   * behaviour subject favorites
   */
  private favoritesSource: BehaviorSubject<Array<string>> = new BehaviorSubject<
    Array<string>
  >(this.getFavorites());
  favorites$ = this.favoritesSource.asObservable();

  /**
   * add given id into favorites
   *
   * @param  {string} id
   * @returns Array
   */
  addFavorite(id: string): Array<string> {
    let items = this.getFavorites();
    const index = items.findIndex((_id: string) => _id === id);
    if (index === -1) {
      items = [...items, id];
      localStorage.setItem('xm_gallery_favorites', JSON.stringify(items));
      this.favoritesSource.next(items);
      this.notificationService.setNotification(
        `image with ${id} was add in favorites.`
      );
    } else {
      this.notificationService.setNotification(
        `image with id ${id} already added.`
      );
    }
    return items;
  }

  /**
   * removes given id from favorites
   *
   * @param  {string} id
   * @returns Array
   */
  removeFavorite(id: string): Array<string> {
    let items = this.getFavorites();
    const index = items.findIndex((_id: string) => _id === id);
    if (index !== -1) {
      items.splice(index, 1);
      localStorage.setItem('xm_gallery_favorites', JSON.stringify(items));
      this.favoritesSource.next(items);
      this.notificationService.setNotification(
        `image with ${id} remove from favorites.`
      );
    } else {
      this.notificationService.setNotification(
        `image with id ${id} already removed.`
      );
    }
    return items;
  }

  /**
   * returns favorites array
   *
   * @returns Array
   */
  getFavorites(): Array<string> {
    const items = localStorage.getItem('xm_gallery_favorites');
    return items ? JSON.parse(items) : [];
  }

  /**
   * clears favorites storage
   */
  clearStorage() {
    localStorage.removeItem('xm_gallery_favorites');
  }
}
