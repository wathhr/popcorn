import { get } from 'svelte/store';
import { getQuickCssNode } from '.';
import { status, selectedFile, selectedFolder } from '@ui/tabs/QuickCss.svelte';
import { MESSAGES } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('QuickCss > IPC');

export function handleQuickCssMessages(message: StatusMessage) {
  const statusType = message.success ? 'success' : 'error';
  if (!message.success) {
    Logger.warn(message.type, 'failed');
    return;
  }

  switch (message.type) {
    case MESSAGES.quickCss.created: {
      const { type, location }: { type: 'file' | 'folder'; location: string } = message.data;
      const node = getQuickCssNode(location);
      if (type === 'file') selectedFile.set(node as QuickCssFile);
      else selectedFolder.set(node as QuickCssFolder);

      var statusMessage = message.success
        ? `Created ${location} successfully.`
        : `Failed to create ${location}.`;
    } break;

    case MESSAGES.quickCss.deleted: {
      const { type, location }: { type: 'file' | 'folder'; location: string } = message.data;
      if (type === 'file' && get(selectedFile).location === location) selectedFile.set(null);
      else if (type === 'folder' && get(selectedFolder).location === location) selectedFolder.set(null);

      var statusMessage = message.success
        ? `Deleted ${location} successfully.`
        : `Failed to delete ${location}.`;
    } break;

    case MESSAGES.quickCss.renamed: {
      const { oldLocation, newLocation }: { oldLocation: string; newLocation: string } = message.data;
      const node = getQuickCssNode(newLocation);
      const type = ('files' in node) ? 'folder' : 'file';

      if (type === 'file' && get(selectedFile).location === oldLocation) selectedFile.set(node as QuickCssFile);
      else if (type === 'folder' && get(selectedFolder).location === oldLocation) selectedFolder.set(node as QuickCssFolder);


      var statusMessage = message.success
        ? `Renamed ${oldLocation} to ${newLocation} successfully.`
        : `Failed to rename ${oldLocation} to ${newLocation}.`;
    } break;

    case MESSAGES.quickCss.updated: {
      var statusMessage = message.success
        ? `Updated ${message.data} successfully.`
        : `Failed to update ${message.data}.`;
    } break;

    default:
      Logger.warn(`Unknown status message type: ${message.type}`, message);
  }

  if (statusMessage) status.set({
    type: statusType,
    message: statusMessage,
  });
}
