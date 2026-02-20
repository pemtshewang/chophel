const API_BASE_URL = 'http://localhost:8080/api';

export interface Stanza {
  tibetan: string;
  phonetic: string;
  english: string;
}

export interface Prayer {
  id: string;
  title: string;
  tibetan: string;
  description: string;
  category: string;
  duration: string;
  lineage: string;
  icon: string;
  content?: Stanza[];
}

export interface Category {
  id: string;
  name: string;
  tibetan: string;
  icon: string;
  color: string;
  count: number;
}

export interface Deity {
  id: string;
  name: string;
  tibetan: string;
  description: string;
  image: string;
  lineage: string;
  prayers?: Prayer[];
}

export async function getPrayers(): Promise<Prayer[]> {
  const res = await fetch(`${API_BASE_URL}/prayers`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch prayers');
  return res.json();
}

export async function getPrayer(id: string): Promise<Prayer> {
  const res = await fetch(`${API_BASE_URL}/prayers/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch prayer');
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE_URL}/categories`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getDeities(): Promise<Deity[]> {
  const res = await fetch(`${API_BASE_URL}/deities`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch deities');
  return res.json();
}

export async function getDeity(id: string): Promise<Deity> {
  const res = await fetch(`${API_BASE_URL}/deities/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch deity');
  return res.json();
}
