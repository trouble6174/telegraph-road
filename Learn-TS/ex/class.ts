console.log("class learn");

abstract class Department {
  private readonly id: number;
  // protected can access by sub class;
  // private means only can access by self
  protected members: string[] = [];
  constructor(public name: string) {
    this.id = this.randomId();
  }

  describe(this: Department, mark: string = "p") {
    console.log(
      `%c[${mark}]name: ${this.name}, id: ${this.id}`,
      "color:blue;font-size:1.5rem;"
    );
  }

  addMember(member: string) {
    this.members.push(member);
  }
  showMembers() {
    console.log(this.members);
  }
  private randomId() {
    return Math.floor(Math.random() * Date.now());
  }

  abstract saySomething(something: string): void;
}

// const dpt = new Department("Accounting");
// dpt.describe("d1");

// const dpt2 = new Department("Running");
// dpt2.describe("d2");

// const dptCopy = { describe: dpt.describe };
// The 'this' context of type '{ describe: (this: Department, mark?: string) => void; }'
// is not assignable to method's 'this' of type 'Department'.
// dptCopy.describe("copy");

// const dptCopyFix = { describe: dpt.describe, name: "addName" };
// dptCopyFix.describe("copyFix");

// dpt.addMember("one");
// dpt.addMember("two");

// error TS2341: Property 'members' is private and only accessible within class 'Department'.
// dpt.members[3] = "df";

// dpt.showMembers();

/*
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
OR
class Department {
  constructor(public name: string) {}
}
*/

class SubDepartment extends Department {
  static hopeYear = 2022;
  private lastReport: string = "";

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(s: string) {
    this.lastReport = s;
  }

  constructor(name: string, public admins: string[] = []) {
    super(name);
    this.admins = admins;
  }

  addMember(member: string): void {
    if (member === "lc") {
      this.admins.push(member);
    }
    this.members.push(member);
  }

  saySomething(something: string): void {
    console.log(something);
  }
}

const spt = new SubDepartment("sub");
spt.describe("sub");
spt.addMember("lc");
console.log(spt.admins);
spt.mostRecentReport = "asdf";
console.log(spt.mostRecentReport);
console.log(SubDepartment.hopeYear);
spt.saySomething("hi mom");
