import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unity-create',
  templateUrl: './unity-create.component.html',
  styleUrls: ['./unity-create.component.css']
})
export class UnityCreateComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveUnity(){

  }

  listUnity(){
    this.router.navigate(['/unities'])
  }

  cancel(){
    
  }

}
