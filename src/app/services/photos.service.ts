import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, finalize, delay } from 'rxjs/operators';
import { Image } from '../models/image';

const imageUrl = 'https://picsum.photos/v2/list?page={page}&limit=12';
@Injectable({ providedIn: 'root' })
export class PhotosService {
  constructor(private http: HttpClient) {}

  /**
   * Array of concated photos
   */
  private photos: Array<Image> = new Array<Image>();

  /**
   * BehaviorSubject for photos loading state
   */
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  /**
   *  BehaviorSubject for photos 
   */
  private imagesSubject: BehaviorSubject<Array<Image>> = new BehaviorSubject<Array<Image>>([]);
  images$ = this.imagesSubject.asObservable();

  /**
   * page number
   */
  page: number = 0;


  /**
   * fetch images
   */
  fetchImages() {
    this.page++;
    this.loadingSubject.next(true);
    this.http.get(imageUrl.replace(`{page}`, this.page.toString())).pipe(
      map((res: any) => {
        return res;
      }),
      delay(Math.floor(Math.random() * 100) + 200),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((images: Array<Image>) => {
      this.photos = [...this.photos, ...images];
      this.imagesSubject.next(this.photos);
    });
  }
}
