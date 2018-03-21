import { Inject, Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApiService implements OnInit {

    constructor(private _http: Http, @Inject('API_URL') private _apiUrl: string, private _authService: AuthService) {
    }

    ngOnInit() {
    }

    get(url: string): Observable<any> {
        const headers: Headers = new Headers({
            'Accept': 'application/vnd.gantabya.v1,application/json',
            'Content-Type': 'application/json',
            'Authorization': this._authService.getAuthToken()
        });
        const options = new RequestOptions({headers: headers});
        return this._http.get(
            `${this._apiUrl}${url}`,
            options
        )
        .map(response => {
            return response.json();
        })
        .catch(this._handleError);
    }

    post(url: string, body: any): Observable<any> {
        const headers: Headers = new Headers({
            'Accept': 'application/vnd.gantabya.v1,application/json',
            'Content-Type': 'application/json',
            'Authorization': this._authService.getAuthToken()
        });
        const options = new RequestOptions({headers: headers});
        return this._http.post(
            `${this._apiUrl}${url}`,
            body,
            options
        )
        .map(response => {
            return response.json();
        })
        .catch(this._handleError);
    }

   uploadFile(url: string, file: any): Observable<any> {
        const headers: Headers = new Headers({
            'Accept': 'application/vnd.gantabya.v1,application/json',
            'Authorization': this._authService.getAuthToken()
        });
        const options = new RequestOptions({headers: headers});
        return this._http.post(
            `${this._apiUrl}${url}`,
            file,
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
