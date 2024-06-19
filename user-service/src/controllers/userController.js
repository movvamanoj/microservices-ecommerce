const getAllUsers = (req, res) => {
    res.send('User Service: Get all users');
};

const createUser = (req, res) => {
    res.send('User Service: Create a new user');
};

module.exports = {
    getAllUsers,
    createUser,
};
