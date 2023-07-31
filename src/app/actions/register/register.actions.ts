export class Register {
  static readonly type = '[Register] Register';
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}  
}

export class ContinueWithGoogleAction {
  static readonly type = 'ContinueWithGoogle';
}