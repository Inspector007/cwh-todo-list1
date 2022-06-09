import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Imdbrating } from '../../Imdbrating';

@Component({
  selector: 'app-imdbrating',
  templateUrl: './imdbrating.component.html',
  styleUrls: ['./imdbrating.component.css']
})
export class ImdbratingComponent implements OnInit {

  @Input()
  imdbrating: Imdbrating = new Imdbrating;
  Data!: any;
  count!: number;
  next!: string;
  previous!: number;
  results!:[];
  popularity_99!: number
  director!: string
  genre!: string
  imdb_score!: number
  name!: string
  


  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getimdbratingretrievedata().subscribe((data)=>{
    this.Data = data;
    this.count = this.Data.count;
    this.next = this.Data.next;
    this.previous = this.Data.previous;
    this.results = this.Data.results;
    console.log(this.Data.results);
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
    console.log(this.imdbrating);
    // const headers = {'Cookie':"csrftoken=rTtTE0LsBaT5BTqTuLP6mUV6RsWzKEeA5SxyGh1ZbliXdEyHsPMFtjcDMFyx6r6D", 'sessionid':"49xp1df0ielxfwocvu2e54qzlwzobfdz"};
    this.api.addimdbratingdata(this.imdbrating).subscribe((data)=>{
      
      });
    
  }

  onDelete(event: MouseEvent){
    let ide = Number((event.target as HTMLElement).textContent);
    console.log((event.target as HTMLElement).textContent);
    this.api.deleteimdbratingdata(ide).subscribe((data)=>{
      
      });
    
  }
}
