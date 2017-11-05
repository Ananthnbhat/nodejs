const expect=require('expect');
const utils=require('./utils');




it('should add two numbers',()=>{
    var result=utils.add(33,11);
    expect(result).toBe(44).toBeA('number');
    // if(result!=44)
    // throw new Error(`Value not correct,got ${result} instead of 44`);
});

it('Should square a number',()=>{
var result2=utils.square(5);
expect(result2).toBe(25).toBeA('number');
// if(result2!=25)
// throw new Error(`Value not correct,got ${result2} instead of 25`);
});

it('Should square a number',()=>{
    var result2=utils.square(5);
    expect(result2).toBe(25).toBeA('number');
    // if(result2!=25)
    // throw new Error(`Value not correct,got ${result2} instead of 25`);
    });
it("Should set the first and the last name",()=>{
    var user={location:'Siddapur',age:21};
    var res=utils.setName(user,'Ananth Bhat');

    expect(res).toInclude({firstName:'Ananth',lastName:'Bhat'});
});