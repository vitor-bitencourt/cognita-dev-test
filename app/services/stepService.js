import driver from '../utils/db';

export async function createStep(stepData) {
  const session = driver.session();
  const result = await session.run(
    'CREATE (s:Step $stepData) RETURN s',
    { stepData }
  );
  session.close();
  return result.records[0].get('s');
}