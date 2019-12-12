const { gql } = require("apollo-server");

module.exports = gql`
  type UserInfo {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    getAppointments: UserInfo
  }
`;
