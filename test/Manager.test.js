const Manager = require('../lib/Manager');

describe("Manager", () => {
  it('should display the name as a string', () => {
    const obj = new Manager();
    expect("name" in obj).toEqual(true);
    expect(typeof obj.name === "string").toEqual(true);
  })
})
