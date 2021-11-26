const Intern = require('../lib/Intern');
const inquirer = require("./inquirer");

describe("Intern", () => {
  it('should display intern name as string', () => {
    const obj = new Intern();
    expect("school" in obj).toEqual(true);
    expect(typeof obj.school === string).toEqual(true);
  })
})
