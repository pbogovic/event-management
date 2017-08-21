namespace Models.Old {
    export interface Zaposlenik {
        Id: number;
        name: string;
        surname: string;
        birthDate: Date;
        odjel_id: number;
        odjel_naziv: string;
        placa: number;
        info: string;
        pic_url: string;
        img_url: string;
        zadaci: string;
    }
}