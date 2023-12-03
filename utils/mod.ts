import { TextDelimiterStream } from 'std/streams/text_delimiter_stream.ts';

export function readStreamByLines(stream: ReadableStream) {
  return stream.pipeThrough(new TextDecoderStream()).pipeThrough(
    new TextDelimiterStream('\n'),
  );
}
