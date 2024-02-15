type TODO = any;

type ForceArr<T> = T extends any[] ? T : [T];

type CamelToScreamingSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Capitalize<T>}${CamelToScreamingSnakeCase<U>}`
  : S;

type EventName<T> = T extends string
  ? `POPCORN_${CamelToScreamingSnakeCase<T>}`
  : never;
