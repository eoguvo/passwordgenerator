import Generator from './generator';
export function HandleSubmit(qtd, opt) {
    if(qtd>50 || qtd<=0 || !qtd) {
        return "Por favor, escolha um tamanho de senha valido.";
    }
    const password = Generator.generatePassword(qtd, opt);
    return password || "Nada selecionado :(";
}
export default () => {
    const $ = document.querySelector.bind(document);
    const output = $('.output'),
        lengthRef = $('.length'),
        uppRef = $('.upp'),
        lowRef = $('.low'),
        numRef = $('.num'),
        symRef = $('.sym'),
        form = $('form');
    form.addEventListener('submit', (e)=>{
        const options = {
            upp: uppRef.checked, low: lowRef.checked,
            num: numRef.checked, sym: symRef.checked
        }
        const qtd = lengthRef.value;
        e.preventDefault();
        if(qtd>50 || qtd<=0) {
            lengthRef.focus();
        }
        output.innerHTML = HandleSubmit(lengthRef.value, options);
    })
}