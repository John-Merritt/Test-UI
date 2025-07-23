import { useQuery } from '@tanstack/react-query';
import type { WeatherForecast } from '../types';

export async function fetchWeather(): Promise<WeatherForecast[]> {
  const res = await fetch('/api/WeatherForecast');
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
}

export function useWeather() {
  return useQuery<WeatherForecast[]>({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });
}