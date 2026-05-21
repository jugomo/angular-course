import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})

export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  @Input({required: true})
  index!: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();  

  constructor() {}

  ngOnInit() {}

  onCourseViewed(){
    console.log("Course viewed: " + this.course.description);
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
        return 'beginner';
    }
    
    // return {
    //   'beginner': this.course.category == 'BEGINNER',
    // };
  }

  titleStyles() {
    return {
      'text-decoration':'underline'
    };
  }

  cardStyles() {
    return {
      'background-image' : 'url(' + this.course.iconUrl + ')',
    };
  }
}