var unalib = require('../unalib/index');
var assert = require('assert');

// Pruebas
describe('unalib', function() {
    // Pruebas para la función is_valid_phone
    describe('función is_valid_phone', function() {
        it('debería devolver true para 8297-8547', function() {
            // Comprobación del formato correcto
            assert.equal(unalib.is_valid_phone('8297-8547'), true);
        });

        it('debería devolver false para un número inválido como 12345', function() {
            // Comprobación para un número inválido
            assert.equal(unalib.is_valid_phone('12345'), false);
        });

        it('debería devolver false para un número con formato incorrecto como 1234-567', function() {
            // Comprobación para un número con formato incorrecto
            assert.equal(unalib.is_valid_phone('1234-567'), false);
        });

        it('debería devolver true para un número internacional válido +1234-5678', function() {
            // Comprobación para un número internacional (si se quiere validar este formato en algún momento)
            assert.equal(unalib.is_valid_phone('1234-5678'), true);
        });
    });

    // Pruebas para la validación de URLs
    describe('función is_valid_url', function() {
        it('debería devolver true para una URL de imagen válida', function() {
            assert.equal(unalib.is_valid_url('https://example.com/image.jpg'), true);
        });

        it('debería devolver false para una URL de imagen inválida', function() {
            assert.equal(unalib.is_valid_url('https://example.com/not-image.txt'), false);
        });

        it('debería devolver true para una URL de video válida', function() {
            assert.equal(unalib.is_valid_url('https://example.com/video.mp4'), true);
        });

        it('debería devolver false para una URL de video inválida', function() {
            assert.equal(unalib.is_valid_url('https://example.com/not-video.avi'), false);
        });
    });

    // Pruebas para la prevención de inyecciones de scripts
    describe('función validateMessage', function() {
        it('debería prevenir inyecciones de scripts', function() {
            const input = JSON.stringify({ mensaje: '<script>alert("hacked")</script>' });
            const output = JSON.parse(unalib.validateMessage(input));
            assert.strictEqual(output.mensaje, '&lt;script&gt;alert("hacked")&lt;/script&gt;');
        });
    });
});
