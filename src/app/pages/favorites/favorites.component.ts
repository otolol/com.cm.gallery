import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { FavoritesService } from "../../services/favorites.service";


@Component({
    selector: 'xm-favorites-page',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent {

    constructor(
        private router: Router,
        private favoritesService: FavoritesService
    ) {}

    /**
     * favorites observable
     */
    favorites$ = this.favoritesService.favorites$;

    /**
     * click handle to navigate photos detail page
     * @param  {{id:string}} $event
     */
    onDetail($event: {id: string}) {
        this.router.navigate(['photos', $event.id]);
    }
    
    identity(_index: number, id: string) {
        return id;
    }

}