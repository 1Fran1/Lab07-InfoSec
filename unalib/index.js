// modulo de ejemplo.
module.exports = {

    // logica que valida si un telefono esta correcto...
    is_valid_phone: function (phone) {
  
      // inicializacion lazy
      var isValid = false;
      // expresion regular copiada de StackOverflow
      var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i;
  
      // validacion Regex
      try {
        isValid = re.test(phone);
      } catch (e) {
        console.log(e);
      } finally {
          return isValid;
      }
      // fin del try-catch block
    },
  
    is_valid_phone: function (phone) {
  
      // inicializacion lazy
      var isValid = false;
      // expresion regular copiada de StackOverflow
      var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i;
  
      // validacion Regex
      try {
        isValid = re.test(phone);
      } catch (e) {
        console.log(e);
      } finally {
          return isValid;
      }
      // fin del try-catch block
    },
    
    validateMessage: function(msg){
  
      var obj = JSON.parse(msg);
  
     
      if(this.is_valid_phone(obj.mensaje)){
        console.log("Es un telefono!")
        obj.mensaje = this.getEmbeddedCode(obj.mensaje);
      }
      else{
        console.log("Es un texto!")
      }
      
      return JSON.stringify(obj);
    }

  // fin del modulo
};