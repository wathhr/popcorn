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

  // Windows
  nsis: {
    artifactName: '${name}-${version}-setup.${ext}',
    shortcutName: pkg.name,
    uninstallDisplayName: pkg.name,
    createDesktopShortcut: false,
  },

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
  dmg: {
    artifactName: '${pkg.name}-${pkg.version}.${ext}',
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
  appImage: {
    artifactName: '${pkg.name}-${pkg.version}.${ext}',
  },

  // Misc
  npmRebuild: false,
  publish: {
    provider: 'generic',
    url: 'https://example.com/auto-updates',
  },
};
