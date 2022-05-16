interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;

  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user: User = new UserAccount('Murphy', 1);
