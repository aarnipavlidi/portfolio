require('dotenv').config({ path: './.env.production' });

const getAllPagePaths = `
  SELECT * FROM paths;
`;

const createNewPathsTable = `
  CREATE TABLE IF NOT EXISTS paths (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    uid VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    slug VARCHAR[] NOT NULL,
    destination VARCHAR(255) NOT NULL,
    latestUpdate TIMESTAMPTZ DEFAULT current_timestamp,
    delete BOOLEAN DEFAULT FALSE
  )
`;

async function createDatabase() {
  console.log('Prebuild script called "createDatabase" has been started!');
  const { sql } = await import('@vercel/postgres');
  const client = await sql.connect();

  try {
    await client.query('BEGIN');
    const { rowCount: getCurrentRowsAmountFromPaths } = await client.query(getAllPagePaths);

    if (getCurrentRowsAmountFromPaths >= 0) {
      console.log('Table exist already and there is either 0 rows or more rows of data available!');
    }
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('There was some errors during prebuild. Error(s) was following:', error);

    if (error && typeof error === 'object' && 'message' in error) {
      if (error.message === 'relation "paths" does not exist') {
        // This error.message would be triggered if during prebuild table called
        // "paths" would not exist inside the database.
        console.log('Trying to create a new table called "paths" into the database!');
        await client.query(createNewPathsTable);
        await client.query('COMMIT');
      }
    }
  } finally {
    client.release();
    console.log('Prebuild script called "createDatabase" has been finished!');
  }
};

createDatabase();
