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

    course0 = COURSES[0];
    course1 = COURSES[1];
    course2 = COURSES[2];

    onCourseSelected(course: Course) {
        console.log("Card clicked", course);
    }

}
