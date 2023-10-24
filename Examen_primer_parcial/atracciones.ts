export class atracciones{
    private _zona: number[] = []
    public get zona(): number[] {
        return this._zona
    }
    public set zona(value: number[]) {
        this._zona = value
    }
    private _atraccion: string[] = []
    public get atraccion(): string[] {
        return this._atraccion
    }
    public set atraccion(value: string[]) {
        this._atraccion = value
    }
    private _horario: string[] = []
    public get horario(): string[] {
        return this._horario
    }
    public set horario(value: string[]) {
        this._horario = value
    }
    
    private _regalos: string[] = []
    public get regalos(): string[] {
        return this._regalos
    }
    public set regalos(value: string[]) {
        this._regalos = value
    }

    private _comida: string[] = []
    public get comida(): string[] {
        return this._comida
    }
    public set comida(value: string[]) {
        this._comida = value
    }
 
    
    constructor(){
        this._zona.push(1 , 2 ,3 ,4)
        this._horario.push(" 12 PM-1PM ", "1 PM-2PM " , "2 PM-3PM" , "3PM-4PM")
        this._atraccion.push("Montaña rusa " , "Rueda de la fortuna " , "Carrusel " , "Laberiento Encantado")
        this._regalos.push("Goblos" ,"Mapas" , "Peluches" , "Llaveros")
        this._comida.push("maíz", "algodón de azúcar", "refrescos" , "hamburguesas")

    }

    imprimir_atraccion(){
        console.log(`El horario de atencion es a las: ${this.horario}`)
        console.log(`Las zonas disponibles son: ${this.zona}`)
        console.log(`Las atracciones que se encuentran son: ${this.atraccion}`)
        console.log(`Los regalos dispopnibles son: ${this.regalos}`)
        console.log(`Las comidas a comprar son: ${this.comida}`)

    }
}