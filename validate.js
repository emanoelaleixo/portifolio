const formulario = document.querySelector('formcontato__form');
const nome = document.ElementById('#nome');
const email = document.ElementById('#email');
const assunto = document.ElementById('#assunto');
const mensagem = document.ElementById('#mensagem');
const botao = document.ElementById('#botao');

formulario.addEventListener ('input', () {

	if (nome.validity.valid && email.validity.valid && assunto.validity.valid && mensagem.validity.valid) {

		botao.disabled = false;

	} else {

		botao.disabled = true
	}
})
