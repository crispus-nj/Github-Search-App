import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { environment } from "../../environments/environment"

@Injectable({
    providedIn: 'root'
})

export class RespositoriesService {

    constructor(
        private http: HttpClient
    ) { }

    getRepos(username: string) {
        this.http.get(environment.apiUrl + username + "/repos")
    }

}