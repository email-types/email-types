import {
  OptionalString,
  OneOfType,
  MulipleOfType,
  MulipleOfTypeOrNull,
  createValidation,
} from '../utils/validations';

const names = [
  'Apple',
  'Google',
  'IBM',
  'Microsoft',
  'Mozilla',
  'Verizon',
  'Other',
] as const;

/**
 * Email Clients
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * */
const emailClients = [
  'Android Mail',
  'Apple Mail',
  'Aol Mail',
  'Blackberry',
  'Gmail',
  'Gmail IMAP',
  'Google Inbox',
  'G Suit',
  'iCloud',
  'IBM Notes',
  'Outlook',
  'Postbox',
  'Samsung Mail',
  'Thunderbird',
  'Windows 10 Mail',
  'Windows Phone 8 Mail',
  'Yahoo Mail',
] as const;

/**
 * Render Engine
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines
 * */
const renderingEngines = [
  'Blink',
  'Gecko',
  'MsWord',
  'Trident',
  'WebKit',
  'Unknown',
] as const;

/**
 * Operating Systems
 * */
const operatingSystems = [
  'Android',
  'iOS',
  'iPadOS',
  'Linux',
  'macOS',
  'watchOS',
  'Windows',
  'Universal',
  'Unknown',
] as const;

const schema = {
  name: OneOfType(names),
  description: OptionalString(),
  clients: MulipleOfType(emailClients),
  engines: MulipleOfTypeOrNull(renderingEngines),
  os: MulipleOfTypeOrNull(operatingSystems),
};

export const validate = createValidation(schema);
