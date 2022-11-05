import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InifiniteScrollComponent } from "./inifinite-scroll.component";

@NgModule({
    imports: [CommonModule],
    declarations: [InifiniteScrollComponent],
    exports: [InifiniteScrollComponent]
})

export class InfiniteScrollModule {}