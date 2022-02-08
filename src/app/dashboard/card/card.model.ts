import { list } from "postcss";

export class Card{
    public title: string;
    public subject: string;
    public imageUrl: string;
    public grade: number;
    public gradePlus: number;
    public totalUnits: number;
    public totalLessons: number;
    public totalTopics: number;
    public dropdownList: string[];
    public totalStudents: number;
    public date: string;
    public isStarred: boolean;
    public isIconDisabled: boolean;
    public isExpired: boolean;

    constructor(title: string, subject: string, imageUrl: string, grade: number, gradePlus: number,
         totalUnits: number, totalLessons: number, totalTopics: number, dropdownList: string[], totalStudents: number, 
         date: string, isStarred: boolean, isIconDisabled: boolean, isExpired: boolean){
        this.title=title;
        this.subject=subject;
        this.imageUrl=imageUrl;
        this.grade=grade;
        this.gradePlus=gradePlus;
        this.totalUnits=totalUnits;
        this.totalLessons=totalLessons;
        this.totalTopics=totalTopics;
        this.dropdownList=dropdownList;
        this.totalStudents=totalStudents;
        this.date=date;
        this.isStarred=isStarred;
        this.isIconDisabled=isIconDisabled;
        this.isExpired=isExpired;
    }

}