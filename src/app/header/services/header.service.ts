import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Menu } from "../models/menu";
import { MenuFrenchData } from "../data/menu.fr.data";
import { Location } from "@angular/common";

Injectable({
    providedIn: 'root',
})
export class HeaderService {

    private location: Location = inject(Location);

    public isPhoneMenuOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public menu: BehaviorSubject<Menu> = new BehaviorSubject(new MenuFrenchData());
    
    /**
     * Return true if the param path is the same to the current path
     * @param path 
     * @returns 
     */
    public isOnPath(path: string): boolean {
        return this.location.path().includes(path);
    }

}