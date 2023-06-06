
export interface IProfileModel {
  userId: string;
  name?: string;
  email?: string;
  bio?: string;
  profileURL?: string;
  phoneNumber?: string;
}

//requests
export interface IGetProfile {
    userId: string;
}

export interface IUpdateProfile {
    userId: string;
    profile: IProfileModel;
}

//response
export interface IGotProfile {
    profile: IProfileModel;
}

export interface IUpdatedProfile {
    validate: boolean;
}