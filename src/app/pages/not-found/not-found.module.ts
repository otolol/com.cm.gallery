import { NgModule } from "@angular/core";
import { NotFoundPageRouting } from './not-found.routing';
import { NotFoundPageComponent } from "./not-found.component";

@NgModule({
    imports:[NotFoundPageRouting],
    declarations: [NotFoundPageComponent],
    exports: [NotFoundPageComponent]
})

export class NotFoundModule {}