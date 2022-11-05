import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageModule } from "../image/image.module";
import { CardComponent } from "./card.component";

@NgModule({
    imports:[CommonModule, ImageModule],
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class CardModule{}