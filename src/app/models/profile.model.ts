
export interface IProfileModel {
  UserId: string;
  bio: string;
  email: string;
  name: string;
  phoneNumber: string;
  profileURL: string;
}

//requests
export interface IGetProfile {
    UserId: string;
}

export interface IUpdateProfile {
    UserId: string;
    profile: IProfileModel;
}

//response
export interface IGotProfile {
    profile: IProfileModel;
}

export interface IUpdatedProfile {
    validate: boolean;
}