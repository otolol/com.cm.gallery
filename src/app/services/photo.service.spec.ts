import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PhotosService } from './photos.service';
import { Image } from '../models/image';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService],
    });
  });

  it('should be initialized', inject(
    [PhotosService],
    (photoService: PhotosService) => {
      expect(photoService).toBeTruthy();
    }
  ));

  it('should set data correctly', fakeAsync(inject(
    [PhotosService, HttpTestingController],
    (photoService: PhotosService, backend: HttpTestingController) => {
        const repsonseObject: Array<Image> = [{id: '1', 'download_url': 'example.com/image'}];
        photoService.fetchImages();
        let response: Array<Image> = [];
        photoService.images$.subscribe((images: Array<Image>) => {
            response = images;
        })

        const req = backend.expectOne('https://picsum.photos/v2/list?page=1&limit=12');
        req.flush(repsonseObject);

        tick(400);
        expect(req.request.method).toEqual('GET');
        expect(response).toEqual(repsonseObject);
    }
  )));

});
