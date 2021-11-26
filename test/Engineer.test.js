const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  it('should display engineer name as string', () => {
    const obj = new Engineer();
    expect("github" in obj).toEqual(true);
    expect(typeof obj.github === string).toEqual(true);
  })
})
