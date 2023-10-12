import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable,lastValueFrom, map, tap } from "rxjs";
import { IAddAmin, IEditGroup, IGroup } from "../models";
import { NotifyService } from "../services/notify/notify.service";
import { NavigationService } from "../services";

@Injectable({
    providedIn: 'root'
})
export class GroupRepository {

    constructor(private firestore: AngularFirestore, private notify: NotifyService, private navigate: NavigationService) {}

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

    async editGroup(request: IEditGroup) {
       try{
        const docRef = this.firestore.doc<IGroup>(`groups/${request.group.id}`);
        docRef.get().pipe(
            map(async (doc)=>{
                const group = doc.data();
                if(group?.admin?.includes(request.userId!)) {
                    docRef.update(request.group);
                    await this.notify.presentSuccessToast('Group updated successfully');
                } else {
                    this.notify.presentFailureToast('Failed: you are not an admin ☠');
                }
            })
        ).subscribe();
       } catch(error){
        this.notify.presentFailureToast('Error: Group Edit Failed :-(');
       }
    }

    async addAdmin(request: IAddAmin) {
        try{
         const docRef = this.firestore.doc<IGroup>(`groups/${request.groupId}`);
         docRef.get().pipe(
             map(async (doc)=>{
                 const group = doc.data();
                 if(group?.admin?.includes(request.userId!)) {
                   request.userIds.forEach((userId)=>{
                    if(!group.admin?.includes(userId)) {
                        group.admin?.push(userId);
                    }
                   })
                    docRef.update({admin: group.admin});
                    this.notify.presentSuccessToast('Group updated successfully');
                 } else {
                     this.notify.presentFailureToast('Failed: you are not an admin ☠');
                 }
             })
         ).subscribe();
        } catch(error){
         this.notify.presentFailureToast('Error: Action Failed :-(');
        }
     }
}
