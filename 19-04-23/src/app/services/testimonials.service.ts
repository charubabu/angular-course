import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private http: HttpClient) {}



  getTestimonials(): Observable<any> {

    return this.http.get('http://localhost:4500/feedbacks');

  }
}