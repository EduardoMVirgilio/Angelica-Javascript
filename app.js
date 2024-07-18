const form = document.querySelector("#contacto"); // document.forms.money
const enviar = (e) => {
  e.preventDefault();
  fetch("https://formsubmit.co/eduardomiguelvirgilio@gmail.com", {
    method: "POST",
    body: {
      nombre: form.elements.nombre.value,
      apellido: form.elements.apellido.value,
      email: form.elements.email.value,
      mensaje: form.elements.mensaje.value,
      _template: "table",
      _subject: "Correo desde la web",
      _autoresponse: "Gracias por tu mensaje",
      _captcha: false,
    },
  })
    .then((respuesta) => {
      return respuesta.text();
    })
    .then((confirmacion) => {
      document.documentElement.innerHTML = confirmacion;
    })
    .catch((error) => console.error(error));
};
form.addEventListener("submit", enviar);

/*

Dalto #1
___

const dineroCofla = parseFloat(form.elements.cofla.value);
const msgCofla = form.elements.msgCofla;
if (dineroCofla >= 0.6 && dineroCofla < 1) {
  msgCofla.innerHTML =
    "cofla; comprate el helado de agua y te sobran " +
    Math.round(dineroCofla - 0.6);
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  msgCofla.innerHTML =
    "cofla; comprate el helado de crema y te sobran " +
    Math.round(dineroCofla - 1);
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  msgCofla.innerHTML =
    "cofla; comprate el helado de heladix y te sobran " +
    Math.round(dineroCofla - 1.6);
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  msgCofla.innerHTML =
    "cofla; comprate el helado de heladovich y te sobran " +
    Math.round(dineroCofla - 1.7);
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  msgCofla.innerHTML =
    "cofla; comprate el helado de helardo y te sobran " +
    Math.round(dineroCofla - 1.8);
} else if (dineroCofla >= 2.9) {
  msgCofla.innerHTML =
    "cofla, comprate helado con confites o el pote de 1/4kg y te sobran " +
    Math.round(dineroCofla - 2.9);
} else {
  msgCofla.innerHTML =
    "lo siento cofla, pobre de mierda, no te alcanza para ningun helado";
}


*/
