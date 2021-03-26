export interface IStudentPhotoDTODetail {
    studentPhotoId:number,
    userName :string,
    actualFileName:string,
    storeAsFileName:string    
}
export interface IStudentPhotoDTOAdd{
    imageData:string
}
export interface IStudentPhotoResult{
    result :boolean
}
export interface IAppUser{
    userName:string,
    email:string
}