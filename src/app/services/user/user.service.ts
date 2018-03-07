import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

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

    private _handleError(error: Response): Observable<object> {
        return Observable.throw(error.json());
    }

}
