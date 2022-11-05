import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { ImageModule } from "src/app/shared/image/image.module";
import { PhotoPageRouting } from './photo.routing';
import { PhotoPageComponent } from "./photos.component";

@NgModule({
    imports: [PhotoPageRouting, MatButtonModule, ImageModule],
    declarations: [PhotoPageComponent],
    exports: [PhotoPageComponent]
})
export class PhotosPageModule {}