import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent {

  constructor(private http: HttpClient, private router: Router) { }

  flights: Flights = new Flights();
  messageIfAny!: string;
  data: any = {};

  submitForm() {
    alert(this.flights)
    let url = "http://localhost:7777/flights-controller/adding-flights";
    this.http.post<any>(url, this.flights).subscribe(data => {
    console.log('Form Data:', this.data);
    // You can now send this data to your backend API.
    this.router.navigate(['/addflight']);
  })
}
}
export class Airline {
  name!: string;
  
 }
export class Flights {
  from!: string;
	to!: string;
	depatureTime!: string;
  arrivalTime!:string;
  airline:Airline=new Airline();
 }

 

