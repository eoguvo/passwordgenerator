import { describe, it } from 'mocha';
import { expect } from 'chai';
import { HandleSubmit } from '../src/modules/init';

describe("HandleSubmit", ()=>{
    it("should return an error message due to qtd range", ()=>{
        const result = HandleSubmit(false, {});
        expect(result).to.be.equal("Por favor, escolha um tamanho de senha valido.");  
    })
    it("should return an error due to missing options", ()=>{
        const opt = {
            upp: '', low: '',
            num: '', sym: ''
        }
        const result = HandleSubmit(50, opt);
        expect(result).to.be.equal("Nada selecionado :(");          
    })
    it("should return an valid password", ()=>{
        const opt = {
            upp: true, low: true,
            num: true, sym: true
        }
        const result = HandleSubmit(25, opt);
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.,:;~\[\]|\{\}#\$%\^&\*()!@_=\+-]).{25}$/gm
        expect(result).to.match(regex);
    })
})