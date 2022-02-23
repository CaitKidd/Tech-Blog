const { User } = require('../models');

const userData = [
    {
        username: "cait_k",
        twitter: "caitkidd",
        github: "caitkidd",
        email: "caitlyn.kidd92@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "jerkun",
        twitter: "jerkun91",
        github: "jerkun",
        email: "jeremyk@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "pam_o",
        twitter: "pamo",
        github: "pamowen",
        email: "pamowen@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "bryan_r",
        twitter: "bryanreed",
        github: "bryreed",
        email: "reedbryan@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "john_s",
        twitter: "johnsmith",
        github: "johnsmith",
        email: "smith1234@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "carolb",
        twitter: "thecarol",
        github: "carolb",
        email: "carolbeez@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;