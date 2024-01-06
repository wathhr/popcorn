import { createLogger } from '~/common';

export class DomManager {
  private static shared = {
    comments: {
      start: document.createComment(' section:Popcorn '),
      end: document.createComment(' endsection '),
    },
    managedElements: [] as HTMLElement[],
  };

  logger: createLogger;

  constructor(private name: string) {
    if (window.PopcornShared.DOM) DomManager.shared = window.PopcornShared.DOM;
    else {
      Object.assign(window.PopcornShared, { DOM: DomManager.shared });
      document.head.append(DomManager.shared.comments.start, DomManager.shared.comments.end);
    }

    this.logger = new createLogger(`DOM > ${name}`);
  }

  addElement(element: HTMLElement, position: 'start' | 'end' = 'end') {
    /* eslint-disable prefer-rest-params */
    this.logger.debug(this.name, 'addElement', arguments);

    if (position === 'start') {
      DomManager.shared.managedElements.unshift(element);
      DomManager.shared.comments.start.after(element);
    } else {
      DomManager.shared.managedElements.push(element);
      DomManager.shared.comments.end.before(element);
    }
  }
}

export default DomManager;
export type Shared = typeof DomManager['shared'];
