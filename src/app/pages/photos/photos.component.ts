import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'xm-photo-page',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoPageComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoriteService: FavoritesService
  ) {}

  /**
   * 
   */
  imageUrl: string = '';

  /**
   * 
   */
  id: string = '';

  ngOnInit() {
    this.route.paramMap
      .pipe(map((params: ParamMap) => params.get('id')))
      .subscribe((id: string | null) => {
        this.id = id ? id : '';
        this.imageUrl = `https://picsum.photos/id/${id}/500`;
      });
  }

  /**
   * click handler for removeFavorite button
   */
  removeFavorite() {
    this.favoriteService.removeFavorite(this.id);
    this.router.navigate(['favorites']);
  }
}
