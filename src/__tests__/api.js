import { endpoints } from '../global/environment';

export default async function getMetrics() {
  const resp = await fetch(`${endpoints.BACKEND_API}${endpoints.METRICS}`);
  const data = await resp.json();
  return data;
}
