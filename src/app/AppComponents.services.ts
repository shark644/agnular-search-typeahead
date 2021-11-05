import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { map } from 'rxjs/operators';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
    providedIn: 'root'
})
export class AppComponents {
 
    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getData(Url: any) {
        return this.http.get<any>(Url);
        
        
    }
}