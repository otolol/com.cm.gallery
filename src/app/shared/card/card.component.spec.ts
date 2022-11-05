import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { ImageModule } from "../image/image.module"
import { CardComponent } from "./card.component"

describe('CardComponent', () => {
    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ImageModule
            ],
            declarations: [
                CardComponent
            ]
        }).compileComponents();
    })

    it('should create card component', () => {
        const fixutres = TestBed.createComponent(CardComponent);
        const cardComp = fixutres.componentInstance;
        expect(cardComp).toBeTruthy();
    })

    
})