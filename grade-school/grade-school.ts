export class GradeSchool {
  private roster: Map<string, string[]>;

  constructor() {
    this.roster = new Map<string, string[]>();
  }
  addStudent(student: string, grade: number): void {
    const roster = this.roster.get(grade.toString()) || [];
    roster.push(student);
    this.roster.set(grade.toString(), roster.sort());
  }

  studentRoster(): Map<string, string[]> {
    const keys = [...this.roster.keys()].sort();

    const result = new Map<string, string[]>();
    for (const grade of keys) {
      const studentsInGrade = this.studentsInGrade(parseInt(grade));
      result.set(grade.toString(), studentsInGrade);
    }

    return result;
    return this.roster;
  }

  studentsInGrade(grade: number) {
    const students = this.roster.get(grade.toString()) || [];
    return students.sort();
  }
}
