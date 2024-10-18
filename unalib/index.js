module.exports = {
  // Lógica que valida si un teléfono es correcto.
  is_valid_phone: function (phone) {
    // Inicialización lazy
    var isValid = false;
    
    // Expresión regular para validar números de teléfono
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i;

    // Validación Regex
    try {
      isValid = re.test(phone);
    } catch (e) {
      console.log(e);
    } finally {
      return isValid;
    }
  },

  // Lógica que valida un mensaje
  validateMessage: function (msg) {
    try {
      var obj = JSON.parse(msg);
      
      // Verificar si el mensaje es un teléfono
      if (this.is_valid_phone(obj.mensaje)) {
        console.log("Es un teléfono!");
        obj.mensaje = this.getEmbeddedCode(obj.mensaje);  // Presupongo que tienes alguna función `getEmbeddedCode` implementada
      } else {
        console.log("Es un texto!");
      }

      return JSON.stringify(obj);
    } catch (e) {
      console.error("Error al validar el mensaje:", e);
      return null;
    }
  },

  // Puedes agregar aquí la función `getEmbeddedCode` si es necesaria
  getEmbeddedCode: function (mensaje) {
    // Ejemplo de código que podría modificar el mensaje
    return `<a href="tel:${mensaje}">${mensaje}</a>`;
  }
};
