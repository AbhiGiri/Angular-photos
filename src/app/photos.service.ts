import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
    ) { }

    getPhotos() {
      return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID Mv8WaByt8luLtDivmq2D7NKdCcM4wu7b0LkfKb_Cp8Y'
        }
      })
    }

}
