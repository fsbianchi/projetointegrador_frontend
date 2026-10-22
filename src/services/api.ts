// Configuração base de integração com o back-end (fetch)
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao acessar ${path}`);
  }
  return response.json() as Promise<T>;
}