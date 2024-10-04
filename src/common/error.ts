export class PopcornError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

Object.assign(globalThis, { $popcornError: PopcornError });
