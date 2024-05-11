import driver from '../utils/db';

export async function getTrailAndSteps(trailId) {
  const session = driver.session();
  const result = await session.run(
    'MATCH (t:Trail {id: $trailId}) OPTIONAL MATCH (t)-[:HAS_STEP]->(s:Step) RETURN t, COLLECT(s) as steps',
    { trailId }
  );
  session.close();
 
  const record = result.records[0];
  const trail = record.get('t').properties;
  const steps = record.get('steps').map(step => step.properties);

  
  return { t: trail, s: steps};
}
