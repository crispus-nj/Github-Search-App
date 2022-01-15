import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class RespositoriesService {
    constructor(
        private http : HttpClient
    ){}
    getUser(userName: string){
    
    }
    getRepos(repoName: string){
        
    }
    
}