import { test as base } from '@playwright/test';

export type DecoOptions ={
  pwd: string;
  timeout: number;
  url: string;
};

export type TechnicolorOptions ={
  pwd: string;
  timeout: number;
  url: string;
  usr: string;
};

export type TestOptions = {
  deco: DecoOptions;
  technicolor: TechnicolorOptions;
};

export const test = base.extend<TestOptions>({
  deco: {
    pwd:'not-set',
    timeout: 0,
    url: 'not-set',
  },
  technicolor:{
    pwd:'not-set',
    timeout:0,
    url:'not-set',
    usr:'not-set',
  }
});