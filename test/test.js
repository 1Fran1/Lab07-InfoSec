const unalib = require('../unalib/index');
const assert = require('assert');

describe('unalib', function () {
  describe('función is_valid_phone', function () {
    it('debería devolver true para 8297-8547', function () {
      assert.equal(unalib.is_valid_phone('8297-8547'), true);
    });

    it('debería devolver false para un número inválido como 12345', function () {
      assert.equal(unalib.is_valid_phone('12345'), false);
    });

    it('debería devolver true para un número internacional +123 456 789', function () {
      assert.equal(unalib.is_valid_phone('+123 456 789'), true);
    });
  });

  describe('función validateMessage', function () {
    it('debería reconocer un número de teléfono en el mensaje y transformarlo', function () {
      const inputMessage = JSON.stringify({ mensaje: '8297-8547' });
      const result = unalib.validateMessage(inputMessage);
      assert(result.includes('<a href="tel:8297-8547">8297-8547</a>'));
    });

    it('debería dejar intacto el texto si no es un teléfono', function () {
      const inputMessage = JSON.stringify({ mensaje: 'Hola, ¿cómo estás?' });
      const result = unalib.validateMessage(inputMessage);
      assert.equal(result, inputMessage);
    });

    it('debería devolver null si el JSON es inválido', function () {
      const invalidMessage = '{ mensaje: "hola"';  // JSON inválido
      const result = unalib.validateMessage(invalidMessage);
      assert.equal(result, null);
    });
  });
});
