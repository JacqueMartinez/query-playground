import { NextResponse } from 'next/server';
import { DATASETS } from '@/mocks/datasets';
import { randomInt, sleep } from '@/mocks/mockUtils';

export async function GET() {
  await sleep(randomInt(300, 900));

  return NextResponse.json(DATASETS);
}
