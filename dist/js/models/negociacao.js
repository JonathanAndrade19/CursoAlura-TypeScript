export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // programação defensiva.
    //criando uma copia para o valor real não ser alterado.
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
