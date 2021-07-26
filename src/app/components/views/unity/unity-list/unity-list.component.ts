import { Component, OnInit } from '@angular/core';
import { Unity } from '../unity.model';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-list',
  templateUrl: './unity-list.component.html',
  styleUrls: ['./unity-list.component.css']
})
export class UnityListComponent implements OnInit {

  unities: Unity[] = []

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(private service: UnityService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.unities = resposta;
    })
  }
}
