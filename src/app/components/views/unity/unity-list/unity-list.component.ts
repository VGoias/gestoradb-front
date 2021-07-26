import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unity-list',
  templateUrl: './unity-list.component.html',
  styleUrls: ['./unity-list.component.css']
})
export class UnityListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
}
