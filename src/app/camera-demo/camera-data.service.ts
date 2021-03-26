import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SSL_OP_NO_TLSv1_1 } from 'constants';
import { Observable } from 'rxjs';
import { IAppUser, IStudentPhotoDTOAdd, IStudentPhotoDTODetail, IStudentPhotoResult } from './icamera-types';

@Injectable({
  providedIn: 'root'
})
export class CameraDataService {

  constructor(private http:HttpClient) { }
  uploadData(s1 : IStudentPhotoDTOAdd ):Observable<IStudentPhotoResult>{
    // let s1 : IStudentPhotoDTOAdd ={ imageData:'Hello World'};
    const url:string =  'https://localhost:44330/api/myphotos/UploadData';
    console.log(url);
    return this.http.post<IStudentPhotoResult>(url,s1);
    
  }
  getData():Observable<IAppUser>{
    const url:string =  'https://localhost:44330/api/AppUser/GetList';
    return this.http.get<IAppUser>(url);
  }
}

