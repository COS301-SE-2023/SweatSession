export class AddGymSessionLocation {
    static readonly type = '[Location] add gym session to the locations';
    constructor(public placeId:  string) {}
}