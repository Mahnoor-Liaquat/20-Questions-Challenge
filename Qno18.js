const users = [
    { id: 1, name: 'Mohsin Ali' },
    { id: 2, name: 'Mudassar Ali' },
    { id: 3, name: 'Muzammil Ali' }
  ];
  function findUserById(usersArray, targetId) {
    try {
      const foundUser = usersArray.find(user => user.id === targetId);
  
      if (foundUser) {
        return foundUser;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
  const targetId = 3;
  const user = findUserById(users, targetId);
  if (user) {
    console.log(`User found: ${user.name}`);
  } else {
    console.log(`User not found or error occurred.`);
  }
  