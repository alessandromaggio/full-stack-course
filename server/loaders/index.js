import events from './events';

export default async function ({ app }) {
  await events({ app });
  return app;
}
