export interface Client {
  name: string;
  logo: string;
  url?: string;
}

export const clients: Client[] = [
  { name: 'Серволюкс', logo: '/images/clients/servolux.png', url: 'https://servolux.com' },
  { name: 'Петруха', logo: '/images/clients/Petruha.png', url: 'https://petruha.com' },
  { name: 'Папа Донец', logo: '/images/clients/papadoner.jpg', url: 'https://papadoner.by/' },
  { name: 'Bakehouse', logo: '/images/clients/bakehouse.png', url: 'https://bakehouse.by/' },
  { name: 'Могилевская фабрика мороженого', logo: '/images/clients/leva.png', url: 'https://leva.by/' },
  { name: 'Могилевский мясокомбинат', logo: '/images/clients/mkmog.png', url: 'https://mkmog.by/' },
];
