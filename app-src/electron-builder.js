const rootPkg = require('../package.json');
const pkg = require('./package.json');

/** @type {import('electron-builder').Configuration} */
exports.default = {
  appId: `dev.${pkg.author}.${pkg.name}`,
  productName: pkg.name,
  directories: {
    buildResources: 'build',
  },
  files: 'out',
  electronDist: '../node_modules/electron/dist',
  electronVersion: rootPkg.devDependencies.electron,

  // MacOS
  mac: {
    entitlementsInherit: 'build/entitlements.mac.plist',
    extendInfo: [
      {
        NSCameraUsageDescription: 'Application requests access to the device\'s camera.',
      },
      {
        NSMicrophoneUsageDescription: 'Application requests access to the device\'s microphone.',
      },
      {
        NSDocumentsFolderUsageDescription: 'Application requests access to the user\'s Documents folder.',
      },
      {
        NSDownloadsFolderUsageDescription: 'Application requests access to the user\'s Downloads folder.',
      },
    ],
  },

  // Linux
  linux: {
    target: [
      'AppImage',
      'snap',
      'deb',
    ],
    maintainer: 'https://github.com/wathhr/popcorn',
    category: 'Utility',
  },

  // Misc
  npmRebuild: false,
  publish: {
    provider: 'generic',
    url: 'https://example.com/auto-updates',
  },
};
