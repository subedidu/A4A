import { Component, ErrorHandler } from "@angular/core";
import { Name, Assignment, Login_Name, Student_Number, Campus } from "./const";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Name = Name;
  Assignment = Assignment;
  Login_Name = Login_Name;
  Student_Number = Student_Number;
  Campus = Campus;

  constructor(private httpService: HttpClient) {}
  arrBreakfast: string[];
  arrLunch: string[];
  arrDinner: string[];
  ngOnInit() {

    // Populate Breakfast data
    this.httpService.get("./assets/breakfast.json").subscribe(
      data => {
        this.arrBreakfast = data as string[]; 
        console.log(this.arrBreakfast[1]);
      },
      (err: Error) => {
        console.log(err.message);
      }
    );

    // Populate Lunch data
    this.httpService.get("./assets/lunch.json").subscribe(
      data => {
        this.arrLunch = data as string[]; 
        console.log(this.arrLunch[1]);
      },
      (err: Error) => {
        console.log(err.message);
      }
    );

    // Populate Dinner data
    this.httpService.get("./assets/dinner.json").subscribe(
      data => {
        this.arrDinner = data as string[]; 
        console.log(this.arrDinner[1]);
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }
}
