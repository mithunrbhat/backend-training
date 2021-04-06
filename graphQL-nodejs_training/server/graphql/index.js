const { default: queries } = require("./queries");
const { default: Books } = require("./types/books");

const typeDefs = [Books, queries];

const result = typeDefs.reduce((prev, current) => {
  return prev + current;
});

const gqlResult = gql`
  ${result}
`;

export default gqlResult;
