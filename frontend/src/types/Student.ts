export interface Student {
    _id: string;
    name: string;
    classGrade: string;
    age: number;
    department: string;
}

export interface StudentInput {
  name: string;
  classGrade: string;
  age: number;
  department: string;
}