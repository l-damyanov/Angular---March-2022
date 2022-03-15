import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular?: Movie[];
  theaters?: Movie[];
  kids?: Movie[];
  dramas?: Movie[];
  searchedResults?: any;

  constructor(private moviesService: MoviesService) { }

  search(myQuery: any) {
    this.moviesService
      .findAMovie(myQuery.search)
      .subscribe(data => {
        this.searchedResults = data;
        console.log(this.searchedResults)
      });
  }

  ngOnInit(): void {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data.results;
        console.log(this.popular);
      });

    this.moviesService
      .getTheaters()
      .subscribe(data => {
        this.theaters = data.results;
        console.log(this.theaters);
      });

    this.moviesService
      .getKids()
      .subscribe(data => {
        this.kids = data.results;
      });

    this.moviesService
    .getDramas()
    .subscribe(data => {
      this.dramas = data.results;
    });
  }

}
