import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Unity } from '../unity.model';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-create',
  templateUrl: './unity-create.component.html',
  styleUrls: ['./unity-create.component.css']
})
export class UnityCreateComponent implements OnInit {

  unity: Unity = {
    name: '',
    description: ''
  }

  constructor(
    private router: Router,
    private service: UnityService
  ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.unity).subscribe((resposta) => {
      //console.log(resposta)
      this.router.navigate(['unities'])
      this.service.mensagem('Unidade criada');
    }, err => {
      for (let index = 0; index < err.error.errors.length; index++) {
        this.service.mensagem(err.error.errors[index].message);        
      }
    })
  }

  list(){
    this.router.navigate(['unities'])
  }

}
