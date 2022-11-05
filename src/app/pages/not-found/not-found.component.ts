import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'xm-not-found-page',
    template: '404 not found',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}