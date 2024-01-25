type ListenerCallback = (...data: any) => void;

type PackageInfo = {
  name: string,
  id: string,
  path: string,
  version?: string,
  dependencies?: string[],
  enabled?: boolean,
};

type Packages = {
  [id: string]: PackageInfo,
};

type Kernel = {
  broadcast: {
    dispatch: ListenerCallback,
    emit(id: string, ...args: any[]): void;
    on(id: string, callback: ListenerCallback): void,
    once(id: string, callback: ListenerCallback): void,
    off(id: string, callback: ListenerCallback): void,
  },
  packages: {
    getPackages(): Packages,
    getOgre(packages: Packages): Packages[],
    hasRendererScript(packageID: string): boolean,
    startPackage(packageID: string): void,
    stopPackage(packageID: string): void,
    events: {
      on(event: string, callback: ListenerCallback): void,
      once(event: string, callback: ListenerCallback): void,
      off(event: string, callback: (pack: PackageInfo) => void): void,
    },
  },
  sendFinished(): void,
  importProtocol: 'kernel',
};

declare const kernel: Kernel;
