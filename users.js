let users = [
  { id: "20IT022", firstName: "Bhoomil", lastName: "Dayani", email: "bdayani@gmail.com" },
  { id: "20IT143", firstName: "Fenil", lastName: "Shiroya", email: "shiroyaf@gmail.com" },
  { id: "20IT072", firstName: "Harsh", lastName: "Nagani", email: "hrrshnaganai@gmail.com" }
]

function getUsers() {
  return users;
}

function saveUser(user) {
  const numberOfUsers = users.length 
  user['id'] = numberOfUsers + 1 
  users.push(user);
}

function deleteUser(id) {
  const numberOfUsers = users.length
  users = users.filter(user => user.id != id); 
  return users.length !== numberOfUsers
}

function replaceUser(id, user) {
  const foundUser = users.filter(usr => usr.id == id); if (foundUser.length === 0) 
  return false
  users = users.map(usr => {
    if (id == usr.id) {
      usr = { id: usr.id, ...user };
    }
    return usr
  })
  return true
}

const Users = function () { }

Users.prototype.getUsers = getUsers 
Users.prototype.saveUser = saveUser 
Users.prototype.deleteUser = deleteUser 
Users.prototype.replaceUser = replaceUser


module.exports = new Users()
