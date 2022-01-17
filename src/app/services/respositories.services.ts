import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

// import { environment } from "../../environments/environment"
import { Environment } from "../environments/environments";

@Injectable({
    providedIn: 'root'
})

export class RespositoriesService {

    constructor(
        private http: HttpClient
    ) { }

    getRepos(username: string) {
      return this.http.get(Environment.apiUrl + username + "/repos")
    }

}