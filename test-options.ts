import { test as base } from '@playwright/test';

export type TestOptions = {
  password: string;
  rebootTimeout: number;
};

export const test = base.extend<TestOptions>({
  password: 'not-set',
  rebootTimeout: 3 * 60 * 1000,
});