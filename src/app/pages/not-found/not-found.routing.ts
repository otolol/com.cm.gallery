import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./not-found.component";

const notFoundRoutes: Routes = [
    {
        path: '',
        component: NotFoundPageComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(notFoundRoutes)],
    exports: [RouterModule]
})

export class NotFoundPageRouting {}