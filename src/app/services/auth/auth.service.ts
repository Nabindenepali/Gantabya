import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    constructor(private _http: Http) {
    }

    register(user: any): Observable<any> {
        const headers: Headers = new Headers({
            'Accept': 'application/vnd.gantabya.v1,application/json',
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({headers: headers});
        return this._http.post(
            'http://localhost:3000/users',
            {user: user},
            options
        )
        .map(response => {
            return response.json();
        })
        .catch(this._handleError);
    }

    login(user: any): Observable<any> {
        const headers: Headers = new Headers({
            'Accept': 'application/vnd.gantabya.v1,application/json',
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({headers: headers});
        return this._http.post(
            'http://localhost:3000/sessions',
            {session: user},
            options
        )
        .map(response => {
            return response.json();
        })
        .catch(this._handleError);
    }

    logout(): Observable<any> {
        return this._http.delete(
            `http://localhost:3000/sessions/${this.getAuthToken()}`,
        )
        .catch(this._handleError);
    }

    getUser(): any {
        return localStorage.getItem('current_user');
    }

    getAuthToken(): any {
        return JSON.parse(this.getUser()).auth_token;
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }

    private _handleError(error: Response): Observable<object> {
        return Observable.throw(error.json());
    }
}
