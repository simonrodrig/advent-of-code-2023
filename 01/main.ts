#!/usr/bin/env -S deno run
import { readStreamByLines } from 'utils';

async function main() {
  for await (const line of readStreamByLines(Deno.stdin.readable)) {
    console.log(line);
  }
}

if (import.meta.main) {
  main();
}
