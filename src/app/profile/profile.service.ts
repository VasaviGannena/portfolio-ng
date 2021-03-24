import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  skillsData: any = [
    {
      id: '1',
      skill: 'Angular 2',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'HTML/CSS',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'Typescript',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'SASS',
      progress: '75%',
    },
    {
      id: '5',
      skill: 'React',
      progress: '75%',
    },
    {
      id: '6',
      skill: 'MongoDB',
      progress: '70%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2020 - 2021',
      education: 'Junior web Developer Bootcamp Program',
      stream: 'Graduate',
      institution: 'Generation Australia, Australia',
    },
    {
      id: '2',
      from_to_year: '2019 - 2019',
      education: 'GET INTO TECH Program',
      stream: 'HTML,CSS and Wordpress',
      institution: 'Inco Australia, Australia',
    },
    {
      id: '3',
      from_to_year: '2010 - 2014',
      education: 'Bachelors Degree',
      stream: 'Bachelor of Technology',
      institution: 'Jawaharlal Nehru Technological University , India',
    },
  ];

  exprienceData: any = [
    {
      id: '1',
      from_to_month_year: 'Nov 2020 - Present',
      organization: 'Code for Australia',
      designation: 'Junior Web Developer',
      details: `Created fully functional project for <strong>WittyFeed<\/strong>.'
},
    {
      'id': '2',
      'from_to_month_year': 'Oct 2019 -  Dec 2019',
      'organization': 'Your creative Agency',
      'designation': 'Software Tester',
      'details': 'Developed the Official Website of the <strong>INDUSTRY <\/strong>,A publisher Dashboard was created using <strong>Angular , CodeIgniter , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories,Payments.
      Another project was Influencer admin Dashboard which has features like app approval`,
    },
    {
      id: '3',
      from_to_month_year: 'April 2018 - August 2018',
      organization: 'OTSI',
      designation: 'Graduate Engineer',
      details:
        'Developed the Official Website of the <strong>MITSVAH Literary Fest</strong>\r\nUnder <strong>Querencia CLUB</strong>.',
    },
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
