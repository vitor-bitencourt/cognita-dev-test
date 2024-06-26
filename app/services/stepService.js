import driver from '../utils/db';

export async function createStep(id, title, content, trailId) {

  const session = driver.session();

  const existingStep = await session.run('MATCH (s:Step {id: $id}) RETURN s', { id });

  if(existingStep.records.length > 0) {
    return { success: false };
  } else {
    try {
      const result = await session.run(
        'MATCH (t:Trail {id: $trailId}) CREATE (t)-[:HAS_STEP]->(s:Step {id: $id, title: $title, content: $content}) RETURN s',
        { trailId, id, title, content }
      );
      console.log(result);
      return { success: true };
    } finally {
      await session.close();
    }
  }
}

export async function deleteStep(stepId) {
  const session = driver.session();

  try {
    const result = await session.run(
      'MATCH (s:Step {id: $stepId}) DETACH DELETE s RETURN s',
      { stepId }
    );
    console.log(result);
  } finally {
    await session.close();
  }
}
