import { TestBed } from '@angular/core/testing';

import { ImgUploadService } from './img-upload.service';

describe('ImgUploadService', () => {
  let service: ImgUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
