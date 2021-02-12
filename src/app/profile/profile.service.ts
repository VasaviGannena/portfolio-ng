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
      skill: 'ANGULAR 6',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'PHP/CODEIGNITER',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'C++',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'PYTHON',
      progress: '75%',
    },
    {
      id: '5',
      skill: 'ADOBE ILLUSTRATOR',
      progress: '75%',
    },
    {
      id: '6',
      skill: 'DATA STRUCTURE',
      progress: '70%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2010 - 2014',
      education: 'Bachelors Degree',
      stream: 'Bachelor of Engineering',
      institution: 'Jawaharlal Nehru Technological University , India',
    },
    {
      id: '2',
      from_to_year: '2010 - 2008',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'Narayana Jr.college ,India',
    },
    {
      id: '3',
      from_to_year: '2007 - 2008',
      education: 'High School',
      stream: 'Science and Mathematics',
      institution: 'Sasi E.M School, India',
    },
  ];

  exprienceData: any = [
    {
      id: '1',
      from_to_month_year: 'JUNE 2018 - AUGUST 2018',
      organization: 'Your creative Agency',
      designation: 'Internship',
      details: `Created fully functional project for <strong>WittyFeed<\/strong>.'
     },
    {
      'id': '2',
      'from_to_month_year': 'july 2015 -  oct 2019',
      'organization': 'TechSperts Software Solutions',
      'designation': 'Software Engineer',
      'details': 'Designed the Official Website of the <strong>INDUSTRY <\/strong>,A publisher Dashboard was created using <strong>Angular , CodeIgniter , Rest API and JWT (Json Web Token).
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
