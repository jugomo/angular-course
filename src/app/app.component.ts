import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = COURSES;
    // courses = [];

    startDate = new Date(2000, 0, 1);

    title = COURSES[0].description;

    price = 9.99123456;

    rate = 0.67;

    course = COURSES[0];

    onCourseSelected(course: Course) {
        console.log("Card clicked", course);
    }

}
