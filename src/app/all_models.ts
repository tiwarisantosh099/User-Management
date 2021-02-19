export class UserRegisterModel{
    constructor(
        public email: any,
        public password: any,
    ){  }
}

export class UserDisplayModel{
    constructor(
        public id: Number,
        public email: String,
        public first_name: String,
        public last_name: String,
        public avatar: String,
    ){  }
}