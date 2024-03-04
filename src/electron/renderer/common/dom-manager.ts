import { CreateLogger } from '#/common';

export class DomManager {
  static shared = {
    comments: {
      start: document.createComment(' start:Popcorn '),
      end: document.createComment(' end:Popcorn '),
      extra: {} as { [name: string]: { start: Comment, end: Comment },
      },
    },
    managedElements: [] as HTMLElement[],
  };

  logger: CreateLogger;

  constructor(private name: string) {
    if (window.PopcornShared.DOM) DomManager.shared = window.PopcornShared.DOM;
    else {
      Object.assign(window.PopcornShared, { DOM: DomManager.shared });
      document.head.append(DomManager.shared.comments.start, DomManager.shared.comments.end);
    }

    this.logger = new CreateLogger('DOM', name);

    if (!(name in DomManager.shared.comments.extra)) {
      const comments = DomManager.shared.comments.extra[name] = {
        start: document.createComment(` start:${name} `),
        end: document.createComment(` end:${name} `),
      };

      DomManager.shared.comments.end.before(comments.start, comments.end);
    }
  }

  addElement(element: HTMLElement, position: 'start' | 'end' = 'end') {
    /* eslint-disable prefer-rest-params */
    this.logger.debug(this.name, 'addElement', arguments);

    if (position === 'start') {
      DomManager.shared.managedElements.unshift(element);
      DomManager.shared.comments.extra[this.name]!.start.after(element);
    } else {
      DomManager.shared.managedElements.push(element);
      DomManager.shared.comments.extra[this.name]!.end.before(element);
    }
  }
}

export type Shared = typeof DomManager['shared'];
