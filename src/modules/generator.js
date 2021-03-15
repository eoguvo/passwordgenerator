const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);
const symbols = ".,:;~[]|{}#$%^&*()!@_=+-";
class Generator {
    static generatePassword(lenght, { upp, low, num, sym }) {
        const methods = []
        upp && methods.push(this.genUpperCase)
        low && methods.push(this.genLowerCase)
        num && methods.push(this.genNumber)
        sym && methods.push(this.genSymbol)
        if(methods.length <= 0) return '';
        const pass = [];
        const n = Number(lenght);
        for (let i = 0; i < methods.length; i++) {
            pass.push(methods[i]());
        }
        for (let i = 0; pass.length < n; i++) {
            
            const func = rand(0, methods.length);
            pass.push(methods[func]());
        }
        const hash = pass.join('')
        if(hash.length>n) {
            return hash.substr(0, n);
        }
        return hash;
    }
    static genUpperCase() {
        const randomNum = rand(65, 91);
        return String.fromCharCode(randomNum);
    }
    static genLowerCase() {
        const randomNum = rand(97, 123);
        return String.fromCharCode(randomNum);
    }
    static genNumber() {
        const randomNum = rand(48, 58);
        return String.fromCharCode(randomNum);
    }
    static genSymbol() {
        const randomNum = rand(0, symbols.length);
        return symbols[randomNum];
    }
}
export default Generator;