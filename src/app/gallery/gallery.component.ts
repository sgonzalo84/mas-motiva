import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  slides = [
    {
      image: 'https://images.unsplash.com/photo-1566424170650-64c9f7f9556f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text:'un perrete'
    },
    {image: 'https://images.unsplash.com/photo-1509924295413-6722539acbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
    {image: 'https://images.unsplash.com/photo-1525724568671-387c60d56919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
