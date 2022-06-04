export class Negociacao {

    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    get volume(): number {
        return this.quantidade * this.valor;
    }
    // programação defensiva.
    //criando uma copia para o valor real não ser alterado.
    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }
}