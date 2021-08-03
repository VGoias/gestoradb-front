import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unity } from '../unity.model';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-delete',
  templateUrl: './unity-delete.component.html',
  styleUrls: ['./unity-delete.component.css']
})
export class UnityDeleteComponent implements OnInit {

  unity: Unity = {
    id: '',
    name: '',
    description: ''
  }

  constructor(
    private service: UnityService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.unity.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.unity.id!).subscribe((resposta) => {
      this.unity.name = resposta.name
      this.unity.description = resposta.description
      console.log(resposta)
    })
  }

  delete(): void{
    this.service.delete(this.unity.id!).subscribe((resposta) => {
      this.service.mensagem("Unidade deletada definitivamente!")
      this.router.navigate(["unities"])
    }, err => {      
      this.service.mensagem(err.error.message)
    })
  }

  list(){
    this.router.navigate(['unities'])
  }
}
