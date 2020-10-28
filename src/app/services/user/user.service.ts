import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createNewUser(user: User): Promise<void> {
    console.log(user);
    return null;
  }

  updateUser(id: string): Promise<void> {
    console.log(id);
    return null;
  }

  getAllUsers(): Observable<User[]> {
    return null;
  }

  getUserById(id: string): Observable<User> {
    console.log(id);
    
    return null;
  }

  getUserByEmail(email: string): Observable<User> {
    console.log(email);
    
    return null;
  }

  deleteUser(id: string): Promise<void> {
    console.log(id);
    return null;
  }
}
