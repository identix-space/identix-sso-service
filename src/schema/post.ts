import {gql} from 'apollo-server-express';

export default gql`
    type Post {
        id: Int!
        createdAt: Date!

        title: String!
        content: String
    }
`;