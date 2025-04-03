import { MemeService } from './../meme.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-memes',
  standalone: false,
  templateUrl: './memes.component.html',
  styleUrl: './memes.component.css'
})

export class MemesComponent implements OnInit {

  memes: any[]=[];

  constructor(private memeservice:MemeService){}

  ngOnInit(): void{
    this.memeservice.getMemes().subscribe({
      next: (response) => {
        this.memes = response;
      }
    })
  }

}
