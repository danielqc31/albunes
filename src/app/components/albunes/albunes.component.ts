import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { Foto } from '../../models/foto';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styles: []
})
export class AlbunesComponent implements OnInit {

  albunes: Album[] = [];
  albumSeleccionado: Album;

  fotos: Foto[] = [];
  comentarios: Comentario[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.obtenerTodos().subscribe(res => {
      this.albunes = res;
      this.albumSeleccionado = this.albunes[0];
    });
  }

  verComentario(idFoto: number) {
    this.albumService.obtenerComentariosDeFoto(idFoto).subscribe(res => this.comentarios = res);
  }

  private obtenerFotos(id: number) {
    this.albumService.obtenerFotosDeAlbum(this.albumSeleccionado.id).subscribe(res => this.fotos = res);
  }

}
