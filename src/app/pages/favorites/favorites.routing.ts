import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesPageComponent } from "./favorites.component";

const favoritesRoutes:Routes = [
    {
        path: '',
        component: FavoritesPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(favoritesRoutes)],
    exports: [RouterModule]
})
export class FavoritesPageRouting {}