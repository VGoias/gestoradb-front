import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unity } from '../unity.model';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-list',
  templateUrl: './unity-list.component.html',
  styleUrls: ['./unity-list.component.css']
})
export class UnityListComponent implements OnInit {

  unities: Unity[] = []

  displayedColumns: string[] = ['id', 'name', 'description', 'players', 'actions'];

  constructor(private service: UnityService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {      
      this.unities = resposta;
    })
  }

  newUnity(){
    this.router.navigate(["unities/create"])
  }
}
