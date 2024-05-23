interface Department {
  name: string;
  department: string;
}

class Student implements Department {
  name: string;
  department: string;

  constructor(name: string, department: string) {
    this.name = name;
    this.department = department;
  }
}

const student2 = new Student("someone", "sth");
