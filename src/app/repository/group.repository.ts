import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable,lastValueFrom, map, tap } from "rxjs";
import { IGroup } from "../models";

@Injectable({
    providedIn: 'root'
})
export class GroupRepository {

    constructor(private firestore: AngularFirestore) {}

    getGroup(groupId: string) {
        const groupRef = this.firestore.doc<IGroup>(`groups/${groupId}`);

       return groupRef.snapshotChanges().pipe(
            map((snapshot)=>{
                const doc = snapshot.payload.data()
                let group: IGroup = {
                    ...snapshot.payload.data() as IGroup,
                    id: groupRef.ref.id
                }

                return group;
            })
        )
    }
}
