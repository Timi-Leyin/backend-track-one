type loggerArgs = unknown[];
export class Log {
  static log(...msg: loggerArgs) {
    console.log('\x1b[36m%s\x1b[0m', '[LOG]', ...msg);
  }
  static err(...msg: loggerArgs) {
    console.error('\x1b[31m%s\x1b[0m', '[ERR]', ...msg);
  }

  static warn(...msg: loggerArgs) {
    console.warn('\x1b[33m%s\x1b[0m', '[WARN]', ...msg);
  }
}
