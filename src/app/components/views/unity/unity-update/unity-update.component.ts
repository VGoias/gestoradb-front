import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Unity } from '../unity.model';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-update',
  templateUrl: './unity-update.component.html',
  styleUrls: ['./unity-update.component.css']
})
export class UnityUpdateComponent implements OnInit {

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

  findById(): void {
    this.service.findById(this.unity.id!).subscribe((resposta) => {
      this.unity.name = resposta.name
      this.unity.description = resposta.description
    })
  }

  update(): void {
    this.service.update(this.unity).subscribe((resposta) => {
      this.router.navigate(['unities'])
      this.service.mensagem("Unidade atualizada conforme solicitado.")
    }, err => {
      this.service.mensagem(err.error.message)
    })
  }

  list(){
    this.router.navigate(['unities'])
  }

}
