#!/usr/bin/env -S deno run
import { bgRed } from 'std/fmt/colors.ts';

console.error(
  bgRed('ERROR:'),
  'Please `cd` into one of the directories and run `deno task start` from within the directory,',
);
Deno.exit(1);
