import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';
import { Foto } from '../models/foto';
import { Comentario } from '../models/comentario';

import 'rxjs/Rx';
import { tap } from 'rxjs/operators/tap';
import { of } from 'rxjs/observable/of';

const URL_ALBUM = "https://jsonplaceholder.typicode.com/albums";
const URL_COMENTARIOS = "https://jsonplaceholder.typicode.com/comments";

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  obtenerTodos() : Observable<Album[]> {
    return this.http.get<Album[]>(URL_ALBUM);
  }

  obtenerFotosDeAlbum(id: number) : Observable<Foto[]> {
    return this.http.get<Foto[]>(`${URL_ALBUM}/${id}/photos`);
  }

  obtenerComentariosDeFoto(id: number) : Observable<Comentario[]> {
    return this.http.get<Comentario[]>(URL_COMENTARIOS).map(res => res.filter(x => x.postId == id));
  }

}
