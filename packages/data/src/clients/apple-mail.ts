import { Client } from '../general/client.types';

export const appleMail: Client = {
  name: 'Apple Mail',
  developer: 'Apple',
  links: [],
  platforms: [
    {
      name: 'Apple Mail for macOS',
      description: 'Apple’s default email client bundled with OS X and macOS.',
      kind: 'Mac App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Apple Mail for iOS',
      description: "Apple's default email client on iOS devices",
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Apple Mail for iPadOS',
      description: "Apple's default email client on iPadOS devices",
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Apple Mail for watchOS',
      description: "Apple's default email client on watchOS devices",
      kind: 'iWatch App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
  ],
};
