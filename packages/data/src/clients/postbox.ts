import { Client } from './types';

export const postbox: Client = {
  name: 'Postbox',
  developer: 'Postbox',
  platforms: [
    {
      name: 'Postbox for macOS',
      description: 'A popular commercial email client for macOS.',
      kind: 'Mac App',
      engine: 'Gecko',
      doctype: 'Unknown',
    },
    {
      name: 'Postbox for Windows',
      description: 'A popular commercial email client for Windows.',
      kind: 'Windows App',
      engine: 'Gecko',
      doctype: 'Unknown',
    },
  ],
};
