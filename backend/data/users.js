import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Amin User',
    email: 'admin@profishop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'John@profishop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@profishop.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
