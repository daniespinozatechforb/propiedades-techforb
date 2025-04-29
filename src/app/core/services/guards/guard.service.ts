import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

    getToken():Observable<boolean>{
      const token = localStorage.getItem('user');
      if(!token){
        return of (false);
      }
      return of (true);
    }
  
}