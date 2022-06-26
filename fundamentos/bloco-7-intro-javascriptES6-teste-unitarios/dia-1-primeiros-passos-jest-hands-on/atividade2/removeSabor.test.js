const removeBebida = require('./removeSabor');

describe('Remove sabor de bebida', () => {
    it("Remover agua", () => {
        const bebidas = ['coca', 'sukita', 'agua', 'garapa', 'suco', 'groselha'];
        expect(['coca', 'sukita', 'garapa', 'suco', 'groselha']).toEqual(removeBebida(bebidas, 'agua'));
    })
    it("Remover garapa", () => {
        const bebidas = ['coca', 'sukita', 'agua', 'garapa', 'suco', 'groselha'];
        expect(['coca', 'sukita', 'agua', 'suco', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
    })
    it('Remover groselha caso exista', () => {
        const bebidas = ['coca', 'sukita', 'agua', 'garapa', 'suco', 'groselha'];
        expect(removeBebida(bebidas, 'groselha')).toContain('agua');
    });
});