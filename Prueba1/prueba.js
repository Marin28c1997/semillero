var app = new Vue({
  el: "#app",
  data: {
    message: "Prueba 1",
    name: "",
    lastname: "",
    user: "",
    date: "",
    persona: [],
  },
  methods: {
    guardarDatos() {
      var password = this.generarContraseña();
      var calculate = this.calcularEdad();
      var usuario = this.crearUsuario();
      console.log(this.persona);

      this.persona.push([
        this.name,
        this.lastname,
        this.user,
        this.date,
        calculate,
        password,
        usuario,
      ]);
    },

    calcularEdad() {
      var dob = new Date(this.date);
      var hoy = new Date();
      var date = hoy.getFullYear() - dob.getFullYear();
      var m = hoy.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < dob.getDate())) {
        date--;
      }
      //document.getElementById("fecha").innerHTML = date + " Años";
      console.log(date);
      return date + " Años";
    },
    generarContraseña() {
      var letras = "abcdefghijklmnopqrstuvwxyz";
      var numeros = "0123456789";
      var contraseña = "";

      for (var i = 0; i < 4; i++) {
        contraseña += letras.charAt(Math.floor(Math.random() * letras.length));
        contraseña += numeros.charAt(
          Math.floor(Math.random() * numeros.length)
        );
      }

      return contraseña;
    },

    crearUsuario() {
      if (this.persona.indexOf(this.user) == -1) {
        this.persona.push(this.user);
        alert("Usuario creado con éxito");
      } else {
        alert("El nombre de usuario ya existe, por favor elige otro");
      }
    },
  },
});
