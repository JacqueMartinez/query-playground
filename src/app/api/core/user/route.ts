import { NextResponse } from 'next/server';
import { randomInt, sleep } from '@/mocks/mockUtils';

export async function GET() {
  await sleep(randomInt(200, 700));

  return NextResponse.json({
    id: 'user_001',
    name: 'Miriam',
  });
}
