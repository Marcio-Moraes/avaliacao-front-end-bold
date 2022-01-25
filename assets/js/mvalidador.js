let MValidador = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');



        MValidador.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = MValidador.chekInput(input);
            if (check !== true) {
                send = false;
                MValidador.showError(input, check);
            }
        }

        if (send) {
            form.submit();
        }

    },
    chekInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }
                        break;
                    case 'min':
                        if (input.value.length < rDetails[1]) {
                            return 'Digite pelo menos ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'max':
                        if (input.value.length > rDetails[1]) {
                            return 'Digite no máximo ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'email':
                        if (input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado é inválido';
                            }
                        }
                        break;
                    case 'phonemask':
                        if (input.value != '') {
                            let regexCel = /^(\([0-9]{2}\))\s?([0-9]{1})?([0-9]{4})(\-)?([0-9]{4})$/;
                            if (!regexCel.test(input.value.toLowerCase())) {
                                return 'Digite um telefone ex.: (99) 99999-9999';
                            }
                        }
                        break;
                    case 'cpf':
                        if (input.value != '') {
                            let cpfItem = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
                            if (!cpfItem.test(input.value)) {
                                return 'Digite um CPF válido ex.: 999.999.999-99';
                            }
                        }
                        break;
                }
            }
        }

        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = '#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
};

let MValidadorNewsletter = {
    handleSubmitNewsletter: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = formNewsletter.querySelectorAll('input');



        MValidadorNewsletter.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = MValidadorNewsletter.chekInput(input);
            if (check !== true) {
                send = false;
                MValidadorNewsletter.showError(input, check);
            }
        }

        if (send) {
            formNewsletter.submit();
        }

    },
    chekInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }
                        break;
                    case 'min':
                        if (input.value.length < rDetails[1]) {
                            return 'Digite pelo menos ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'max':
                        if (input.value.length > rDetails[1]) {
                            return 'Digite no máximo ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'email':
                        if (input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado é inválido';
                            }
                        }
                        break;
                    case 'phonemask':
                        if (input.value != '') {
                            let regexCel = /^(\([0-9]{2}\))\s?([0-9]{1})?([0-9]{4})(\-)?([0-9]{4})$/;
                            if (!regexCel.test(input.value.toLowerCase())) {
                                return 'Digite um telefone ex.: (99) 99999-9999';
                            }
                        }
                        break;
                    case 'cpf':
                        if (input.value != '') {
                            let cpfItem = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
                            if (!cpfItem.test(input.value)) {
                                return 'Digite um CPF válido ex.: 999.999.999-99';
                            }
                        }
                        break;
                }
            }
        }

        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = '#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
};

let form = document.querySelector('.mvalidador');
form.addEventListener('submit', MValidador.handleSubmit);

let formNewsletter = document.querySelector('.mvalidadornewsletter');
formNewsletter.addEventListener('submit', MValidadorNewsletter.handleSubmitNewsletter);
