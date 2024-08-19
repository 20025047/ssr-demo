import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ssr-demo';
  posts: any[] = [];
  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(url).subscribe((res) => {
      this.posts = res as any[];
    });
  }
}
