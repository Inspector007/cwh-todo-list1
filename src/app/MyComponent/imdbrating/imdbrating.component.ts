import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-imdbrating',
  templateUrl: './imdbrating.component.html',
  styleUrls: ['./imdbrating.component.css']
})
export class ImdbratingComponent implements OnInit {

  Data!: any;
  count!: number;
  next!: string;
  previous!: number;
  results!:[];

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

}
