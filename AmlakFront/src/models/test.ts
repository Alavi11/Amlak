import { Dispatch, SetStateAction } from "react";

export interface showMenu {
    showMenu:boolean;
    setShowMenu:Dispatch<SetStateAction<boolean>>
}

export interface advDetails {
    _id:string;
    postcode:number;
    otagh:number;
    ostan:string;
    shahr:string;
    mantaghe:string;
    karbari:string;
    melktype:string;
    address:string;
    zirbana:number;
    masahat:number;
    gheimat:number;
    ejare:number;
    photo:string;
    rate:number;
    gharardad:string;
    phone:string;
    year:string;
    sanad:string;
    __v:number;
}