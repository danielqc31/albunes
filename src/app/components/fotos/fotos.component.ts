import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  comentarios: Comentario[] = [];

  constructor(private actRoute:ActivatedRoute, private albumService: AlbumService) {
    this.actRoute.params.subscribe(params => {
      this.albumService.obtenerComentariosDeFoto(params['id']).subscribe(res => this.comentarios = res);
    })
  }

  ngOnInit() {
  }

}
