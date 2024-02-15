import * as electron from 'electron';

type MapKeys<T> = { [K in keyof T as EventName<K & string>]: T[K] };

//! For every value I need to override I also have to omit it from the base type and re-add the JSDoc comment, else the type becomes way too lenient.
//! A better way to do this could be to patch the electron.d.ts file.

//! TODO: Instead of creating my own types, override them somehow
//! TODO: OR patch the electron.d.ts file by myself
type IpcMainInvokeEvent<T extends Record<string, any>> = Omit<Electron.IpcMainInvokeEvent, 'sender' | 'senderFrame'> & {
  /**
   * Returns the `webContents` that sent the message
   */
  sender: Omit<Electron.WebContents, 'send'> & {
    /**
     * Send an asynchronous message to the renderer process via `channel`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `postMessage`, so prototype chains will not be included. Sending
     * Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
     *
     * :::warning
     *
     * Sending non-standard JavaScript types such as DOM objects or special Electron
     * objects will throw an exception.
     *
     * :::
     *
     * For additional reading, refer to Electron's IPC guide.
     */
    send<K extends keyof T>(channel: K, ...args: ForceArr<T[K]>): void,
  },
  /**
   * The frame that sent this message
   *
   */
  readonly senderFrame: Omit<Electron.WebFrameMain, 'send'> & {
    /**
     * Send an asynchronous message to the renderer process via `channel`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `postMessage`, so prototype chains will not be included. Sending
     * Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
     *
     * The renderer process can handle the message by listening to `channel` with the
     * `ipcRenderer` module.
     */
    send<K extends keyof T>(channel: K, ...args: ForceArr<T[K]>): void,
  },
};

type IpcMainEvent<T extends Record<string, any>> = Omit<Electron.IpcMainEvent, 'reply'> & IpcMainInvokeEvent<T> & {
  /**
   * A function that will send an IPC message to the renderer frame that sent the
   * original message that you are currently handling.  You should use this method to
   * "reply" to the sent message in order to guarantee the reply will go to the
   * correct process and frame.
   */
  reply<K extends keyof T>(channel: K, ...args: ForceArr<T[K]>): void,
};

type MappedInvokeEvent = IpcMainInvokeEvent<MapKeys<MainAPI>>;
type MappedEvent = IpcMainEvent<MapKeys<MainAPI>>;

type IpcMain<T extends Record<string, (...args: any[]) => any>> = {

  // Docs: https://electronjs.org/docs/api/ipc-main

  /**
   * Adds a handler for an `invoke`able IPC. This handler will be called whenever a
   * renderer calls `ipcRenderer.invoke(channel, ...args)`.
   *
   * If `listener` returns a Promise, the eventual result of the promise will be
   * returned as a reply to the remote caller. Otherwise, the return value of the
   * listener will be used as the value of the reply.
   *
   * The `event` that is passed as the first argument to the handler is the same as
   * that passed to a regular event listener. It includes information about which
   * WebContents is the source of the invoke request.
   *
   * Errors thrown through `handle` in the main process are not transparent as they
   * are serialized and only the `message` property from the original error is
   * provided to the renderer process. Please refer to #24427 for details.
   */
  handle<K extends keyof T>(
    channel: K,
    listener: T[K] extends (...args: infer Args) => infer Ret
      ? (event: MappedInvokeEvent, ...args: Args) => Ret | Awaited<Ret> | Promise<Awaited<Ret>>
      : never
  ): void,
  /**
   * Handles a single `invoke`able IPC message, then removes the listener. See
   * `ipcMain.handle(channel, listener)`.
   */
  handleOnce<K extends keyof T>(
    channel: K,
    listener: T[K] extends (...args: infer Args) => infer Ret
      ? (event: MappedInvokeEvent, ...args: Args) => Ret | Awaited<Ret> | Promise<Awaited<Ret>>
      : never
  ): void,
  /**
   * Listens to `channel`, when a new message arrives `listener` would be called with
   * `listener(event, args...)`.
   */
  on<K extends keyof T>(
    channel: K,
    listener: T[K] extends (...args: infer Args) => any
      ? (event: MappedEvent, ...args: Args) => void
      : never
  ): IpcMain<T>,
  /**
   * Adds a one time `listener` function for the event. This `listener` is invoked
   * only the next time a message is sent to `channel`, after which it is removed.
   */
  once<K extends keyof T>(
    channel: K,
    listener: T[K] extends (...args: infer Args) => any
      ? (event: MappedEvent, ...args: Args) => void
      : never
  ): IpcMain<T>,
  /**
   * Removes listeners of the specified `channel`.
   */
  removeAllListeners(channel?: keyof T): IpcMain<T>,
  /**
   * Removes any handler for `channel`, if present.
   */
  removeHandler(channel: keyof T): void,
  /**
   * Removes the specified `listener` from the listener array for the specified
   * `channel`.
   */
  removeListener(channel: keyof T, listener: (...args: any[]) => void): IpcMain<T>,
};

export const ipcMain = electron.ipcMain as IpcMain<MapKeys<API>>;
