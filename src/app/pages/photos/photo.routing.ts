import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PhotoPageComponent } from "./photos.component";

const photoRoutes: Routes = [
    {
        path: '',
        component: PhotoPageComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(photoRoutes)],
    exports: [RouterModule]
})
export class PhotoPageRouting {}