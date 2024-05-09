import neo4j from 'neo4j-driver';

const { v1: neo4j } = neo4j;

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('cognita', '12345678')
);

export default driver;

/*const session = driver.session();

session
  .run('MATCH (n) RETURN count(n) as count')
  .then(result => {
    console.log(result.records[0].get('count').toInt() + ' nodes found.');
  })
  .catch(error => {
    console.error('Erro ao conectar ao banco de dados Neo4j:', error);
  })
  .finally(() => {
    session.close();
    driver.close();
  });*/