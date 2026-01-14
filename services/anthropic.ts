export async function generateForecast(question: string, outcomes: string[]): Promise<string> {
  const response = await fetch('/api/forecast', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, outcomes }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate forecast');
  }

  const data = await response.json();
  return data.forecast;
}
