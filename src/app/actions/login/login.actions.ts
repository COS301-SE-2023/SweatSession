export class Login {
    static readonly type = '[Login] Login';
    constructor(
        public readonly email: string,
        public readonly password: string
      ) {} //alert("In [Login] Login action")
  }
  