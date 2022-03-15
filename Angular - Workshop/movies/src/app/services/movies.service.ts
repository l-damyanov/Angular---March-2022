import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

const apikey = 'a965aaec01d0f61b5b19e0a36231b5de';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    authentication: string = '&api_key=';
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-10-22';
    kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    dramas: string = 'discover/movie?with_genres=18&primary_release_year=2021';
    movie: string = 'movie/';
    movieAuth: string = '?api_key=';

    constructor(private http: HttpClient) { }

    getPopular() : Observable<Movie> {
        return this.http.get<Movie>(`${this.path}${this.popular}${this.authentication}${apikey}`);
    }

    getTheaters() : Observable<Movie> {
        return this.http.get<Movie>(`${this.path}${this.theaters}${this.authentication}${apikey}`);
    }

    getKids() : Observable<Movie> {
        return this.http.get<Movie>(`${this.path}${this.kids}${this.authentication}${apikey}`);
    }

    getDramas() : Observable<Movie> {
        return this.http.get<Movie>(`${this.path}${this.dramas}${this.authentication}${apikey}`);
    }

    getMovie(id:number) {
        return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apikey}`);
    }

    findAMovie(myQuery: any) {
        return this.http.get(`${this.path}search/movie?query=${myQuery}${this.authentication}${apikey}`);
    }
}