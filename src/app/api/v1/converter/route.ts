import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fromSymbol = searchParams.get('from');
  const toSymbol = searchParams.get('to');
  const headers = new Headers();

  headers.append('X-RapidAPI-Key', process.env.DATA_API_KEY as string);
  headers.append('X-RapidAPI-Host', 'currency-converter5.p.rapidapi.com');

  const res = await fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?from=${fromSymbol}&to=${toSymbol}&format=json&amount=1`, {
    headers,
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}
