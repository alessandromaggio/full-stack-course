class User {
  constructor() {
    this.name = null;
    this.email = null;
    this.password = null;
    this.lastLogin = null;
  }

  login(pass) {
    return this.password === pass;
  }
}

class Administrator extends User {
  constructor() {
    super();
    this.privileges = [];
  }

  hasPrivilege(privilege) {
    for(let i = 0; i < this.privileges.length; i++) {
      if(this.privileges[i] === privilege) return true;
    }
    return false;
  }
}

const user = new User();
user.name = 'Jane Doe';
user.email = 'jane@example.com';
user.password = 'test';

const admin = new Administrator();
admin.name = 'Admin';
admin.password = 'secret';
admin.privileges = ['create', 'edit', 'delete'];