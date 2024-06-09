import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: `any`
})
export class ImageStateService {

    private imgStateMap: Map<string,BehaviorSubject<boolean>> = new Map();

    /**
     * Get the observable linked to an imageId
     * @param imageId 
     * @returns 
     */
    public getImgStateObs(imageId: string): BehaviorSubject<boolean> | undefined {
        return this.imgStateMap.has(imageId) ?
            this.imgStateMap.get(imageId) :
            undefined;
    }

    /**
     * Add an observable linked to an imageId to the map
     * @param imageId 
     */
    public addImageState(imageId: string): void {
        if (!this.imgStateMap.has(imageId)) {
            this.imgStateMap.set(imageId, new BehaviorSubject(false))
        }
    }

    /**
     * Notify the subscribers the image is loaded
     * @param imageId 
     */
    public notifyImageLoaded(imageId: string): void {
        this.imgStateMap.get(imageId)?.next(true);
    }

}