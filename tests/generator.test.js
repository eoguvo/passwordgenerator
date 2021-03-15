import { describe, it } from 'mocha';
import { expect } from 'chai';
import Generator from '../src/modules/generator';

describe("Generator", ()=>{
    it("should create a string with numbers with length 20", ()=>{
        const password = Generator.generatePassword(20, {num: true});
        const result = /^\d{20}$/gi.test(password);
        expect(result).to.be.true;
    });
    it(`should have at least one symbol, one number, one upperCase letter and one lowercase letter, with length of 50`, ()=>{
        const opt = {
            upp: true, low: true,
            num: true, sym: true
        }
        const result = Generator.generatePassword(50, opt);
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.,:;~\[\]|\{\}#\$%\^&\*()!@_=\+-]).{50}$/gm
        expect(result).to.match(regex);
    });
    it("should return an empty string", ()=>{
        const opt = {
            upp: '', low: '',
            num: '', sym: ''
        }
        const result = Generator.generatePassword(20, opt);
        expect(result).to.be.equal('');
    });
    it("should return an uppercase char, an lowercase char, an number and an symbol", ()=>{
        let char;
        char = Generator.genUpperCase();
        expect(char).to.match(/^[A-Z]$/gm);
        char = Generator.genLowerCase();
        expect(char).to.match(/^[a-z]$/gm);
        char = Generator.genNumber();
        expect(char).to.match(/^[0-9]$/gm);
        char = Generator.genSymbol();
        expect(char).to.match(/^[\.,:;~\[\]|\{\}#\$%\^&\*()!@_=\+-]$/gm);
    })
})