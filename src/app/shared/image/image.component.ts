import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'xm-image',
    templateUrl: './image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

    /**
     * image url
     */
    @Input() imageUrl: string;

    /**
     * image id for alt
     */
    @Input() id: string;
}