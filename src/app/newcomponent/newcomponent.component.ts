import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent {
// Interpolation
  name:string = "Tekizma";
// Property Binding
imageurl='../assets/image1.jfif';
// Event Binding
myclick(event: any){
alert("Button is clicked")
console.log(event)
}
// Two way binding
  username: any;
  // jsonObject: { "fname":"Preethi",
//               "mname":null,
//               "lname":"S",
//               "age":22,
//               "EducationDetails":{
//                 "degree":"MSc",
//                 "college":"CIT",
//                 "cgpa":8.5,
//                 "familyMembers":["Father","Mother","Younger Sister"],
//                 "familyDetails":{
//                   "DadName": "Sethumadhavan",
//                   "MomName": "Selvi",
//                   "SisName":"Samyuktha"
//                 }
//               }
//               "isActive":true
// }; 
}

function display(arg0: string) {
  throw new Error('Function not implemented.');
}

