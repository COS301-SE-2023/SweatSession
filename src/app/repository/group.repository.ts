import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable,lastValueFrom, map, tap } from "rxjs";
import { IGroup } from "../models";

@Injectable({
    providedIn: 'root'
})
export class GroupRepository {

    constructor(private firestore: AngularFirestore) {}

    async getGroup(groupId: string) {
        const groupDoc = this.firestore.doc<IGroup>(`groups/${groupId}`).get();
        const group: IGroup = (await lastValueFrom(groupDoc)).data()!;
        
        return group;
    }
}
