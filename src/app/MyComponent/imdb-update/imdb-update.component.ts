import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Imdbrating } from 'src/app/Imdbrating';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-imdb-update',
  templateUrl: './imdb-update.component.html',
  styleUrls: ['./imdb-update.component.css']
})
export class ImdbUpdateComponent implements OnInit {

  @Input()
  imdbrating: Imdbrating = new Imdbrating;
  Data!: any;
  id!: number;
  popularity_99!: number
  director!: string
  genre!: string
  imdb_score!: number
  name!: string

  constructor(private api:ApiService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
  });
    this.api.getimdbratingbyid(this.id).subscribe((data)=>{
      this.Data = data;
      this.popularity_99 = this.Data.popularity_99;
      this.director = this.Data.director;
      this.genre = this.Data.genre;
      this.imdb_score = this.Data.imdb_score;
      this.name = this.Data.name;
      this.id = this.Data.id;
      console.log(this.Data);
      });
  }

  onSubmit(){
    this.imdbrating = {
      "popularity_99" : this.popularity_99,
    "director": this.director,
    "imdb_score": this.imdb_score,
    "name": this.name,
    "genre": this.genre
    }
    console.log(this.imdbrating, this.id);
    // const headers = {'Cookie':"csrftoken=rTtTE0LsBaT5BTqTuLP6mUV6RsWzKEeA5SxyGh1ZbliXdEyHsPMFtjcDMFyx6r6D", 'sessionid':"49xp1df0ielxfwocvu2e54qzlwzobfdz"};
    this.api.updateimdbratingdata(this.imdbrating, this.id).subscribe((data)=>{
      
      });
    
  }

}
