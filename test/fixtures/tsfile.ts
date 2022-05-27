interface User {
  id: number;
  name: string;
}

class UserAccount {
  id: number;

  name: string;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('Murphy', 1);

export default user;
