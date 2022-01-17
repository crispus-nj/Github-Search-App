import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// import {environment} from "../../environments/environment"
import {Environment} from "../environments/environments"

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(
        private http: HttpClient
    ) { }
    getUser(userName: string) {
       return this.http.get(Environment.apiUrl + userName)
    }
}