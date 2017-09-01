namespace Models {
    export interface Category {
        Id: number;
        Name: string;
        Img: string;
    }

    export interface Task {
        Id: number;
        Id_Event: number;
        Name: string;
        IsComplete: boolean;
        Rbr: number;
    }

    export interface Event {
        Id: number;
        Name: string;
        Id_category: number;
        Description: string;
        CreatedBy_Name: string;
        CreatedBy_Surname: string;
        CreatedBy_Img_url: string;
        Category_Name: string;
        Category_Img_url: string;
    }

    export interface User {
        Id: number;
        Name: string;
        Surname: string;
        birthDate: Date;
        Info: string;
        Img_url: string;
    }

    export interface myEvents extends Models.Event, Models.Category {
    }
}

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