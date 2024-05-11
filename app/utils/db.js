import neo4j from 'neo4j-driver';

const { v1: neo4j } = neo4j;

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('cognita', '12345678')
);

export default driver;

