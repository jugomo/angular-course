import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})

export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  constructor() {
    
  }

  ngOnInit() {}
}