const userInfo = {
  id: "1",
  firstName: "Hemin",
  lastName: "Johnson",
  email: "test@gmail.com"
};

module.exports = {
  Query: {
    getAppointments: () => userInfo
  }
};
