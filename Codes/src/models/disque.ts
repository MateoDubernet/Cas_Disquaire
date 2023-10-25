import { Artiste } from "./artiste"
import { Compositeur } from "./compositeur"

export class Disque {

    id:number
    artiste: Artiste
    nomAlbum: string
    interprète: string
    compositeur: Compositeur
    année_édition: Date
    prix: number
    stock: number

    constructor(){}
}