import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${environment.url}/message`);
  }
}
