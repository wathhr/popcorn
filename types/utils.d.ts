type TODO = any;

type ForceArr<T> = T extends any[] ? T : [T];

type CapitalizeLiteral<S extends string> = S extends `${infer U}${infer R}`
  ? `${U extends U ? Uppercase<U> : U}${R}`
  : S;

type CamelToScreamingSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends CapitalizeLiteral<T> ? '_' : ''}${CapitalizeLiteral<T>}${CamelToScreamingSnakeCase<U>}`
  : S;

type EventName<T> = T extends string
  ? `POPCORN_${CamelToScreamingSnakeCase<T>}`
  : never;
