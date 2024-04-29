import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss'
})
export class TypescriptComponent {

  empdata:[string,number]=["ibrahim",5]
  imgsrc:String='../../assets/background/pexels-photo-1422292.jpeg';
    test(){
    alert("ibrahim fikry");
  }
  
  geteventdata(x:any){
  //  console.log(x)
   console.log(x.target.value)
  }
  clickSpecificLetter(){
   alert("welcome")
    }
}





let x:number=4;
let arr1:number[]=[2,3,4,5,5]
let arr2:string[]=["q","w","e"]
let arr3:any[]=[1,true,"eee"]
function getsalary():number{
  return 30000;
}
function dolog():void{
  console.log();
}