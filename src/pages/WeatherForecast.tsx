import { useWeather } from '../api/weather'
import Page from '../components/Page'
import Heading from '../components/Heading'
import Card from '../components/Card'

type WeatherForecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export default function WeatherForecast() {
  const { data, isLoading, error } = useWeather(); 

  return (
    <Page>
      <Heading>Weather Forecast</Heading>
      {isLoading && <p>Loading...</p>}
      {error instanceof Error && <p>Error: {error.message}</p>}
      <div className="space-y-4">
        {data?.map((item, i) => (
          <Card key={i}>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Temp (C):</strong> {item.temperatureC}</p>
            <p><strong>Temp (F):</strong> {item.temperatureF}</p>
            <p><strong>Summary:</strong> {item.summary}</p>
          </Card>
        ))}
      </div>
    </Page>
  )
}