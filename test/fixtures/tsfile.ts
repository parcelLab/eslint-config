interface User {
  id: number;
  fullName: string;
}

enum LastName {
  Murphy = "Smith",
}

class UserAccount {
  id: number;

  fullName: string;

  constructor(name: string, id: number) {
    this.fullName = `${name} ${LastName[name as keyof typeof LastName]}`;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

export default user;
