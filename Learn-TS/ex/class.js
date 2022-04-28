"use strict";
console.log("class learn");
class Department {
    constructor(name) {
        this.name = name;
        // protected can access by sub class;
        // private means only can access by self
        this.members = [];
        this.id = this.randomId();
    }
    describe(mark = "p") {
        console.log(`%c[${mark}]name: ${this.name}, id: ${this.id}`, "color:blue;font-size:1.5rem;");
    }
    addMember(member) {
        this.members.push(member);
    }
    showMembers() {
        console.log(this.members);
    }
    randomId() {
        return Math.floor(Math.random() * Date.now());
    }
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
    constructor(name, admins = []) {
        super(name);
        this.admins = admins;
        this.lastReport = "";
        this.admins = admins;
    }
    get mostRecentReport() {
        return this.lastReport;
    }
    set mostRecentReport(s) {
        this.lastReport = s;
    }
    addMember(member) {
        if (member === "lc") {
            this.admins.push(member);
        }
        this.members.push(member);
    }
    saySomething(something) {
        console.log(something);
    }
}
SubDepartment.hopeYear = 2022;
const spt = new SubDepartment("sub");
spt.describe("sub");
spt.addMember("lc");
console.log(spt.admins);
spt.mostRecentReport = "asdf";
console.log(spt.mostRecentReport);
console.log(SubDepartment.hopeYear);
spt.saySomething("hi mom");
//# sourceMappingURL=class.js.map