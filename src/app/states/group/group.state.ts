import { Injectable } from "@angular/core";
import { Navigate } from "@ngxs/router-plugin";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { LoadGroupHompage, RemoveGroup, StageGroup } from "src/app/actions";
import { IGroup } from "src/app/models";
import { GroupService } from "src/app/services/group/group.service";

export interface GroupStateModel {
    id?: string;
    group?: IGroup;
}

@State<GroupStateModel>({
    name: "groups",
    defaults: {
        id: '',
        group: {}
    }
})

@Injectable({
    providedIn: 'root'
})
export class GroupState {
    constructor(private store: Store, private service: GroupService) {

    }

    @Action(StageGroup)
    async stageGroup(ctx: StateContext<GroupStateModel>, {groupId}: StageGroup) {
        if(sessionStorage.getItem("groupIds")) {
           let groupIds : string[] = JSON.parse(sessionStorage.getItem("groupIds")!);
           groupIds.push(groupId);
           sessionStorage.setItem("groupIds",JSON.stringify(groupIds));
        } else {
            let groupIds : string[] = [groupId];
            sessionStorage.setItem("groupIds",JSON.stringify(groupIds));
        }
        this.store.dispatch(new Navigate(['group-homepage']));
    }

    @Action(LoadGroupHompage)
    async loadGroup(ctx: StateContext<GroupStateModel>) {
        if(sessionStorage.getItem("groupIds")) {
            let groupIds: string[] = JSON.parse(sessionStorage.getItem("groupIds")!)
            let groupId = groupIds[groupIds.length-1];
            const group: IGroup = (await this.service.getGroup(groupId));
            ctx.patchState({
                id: groupId,
                group: group
            })
        }
    }

    @Action(RemoveGroup)
    async removeGroup() {
        let groupIds: string[] = JSON.parse(sessionStorage.getItem("groupIds")!)
        if(groupIds.length > 0) {
            groupIds.pop();
            sessionStorage.setItem("groupIds",JSON.stringify(groupIds));
        } else {
            sessionStorage.removeItem("groupIds");
        }
    }

    @Selector()
    static getGroupId(state: GroupStateModel) {
        return state.id;
    }

    @Selector()
    static getGroup(state: GroupStateModel) {
        return state.group;
    }
}