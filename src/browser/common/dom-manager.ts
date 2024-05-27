import { CreateLogger } from '#/common';

export class DomManager {
  static managedElements: HTMLElement[] = [];
  static comments = {
    start: document.createComment(' start:Popcorn '),
    end: document.createComment(' end:Popcorn '),
    extra: {} as { [name: string]: { start: Comment, end: Comment },
    },
  };

  logger: CreateLogger;

  constructor(private name: string) {
    this.logger = new CreateLogger('DOM', name);

    if (!(name in DomManager.comments.extra)) {
      const comments = DomManager.comments.extra[name] = {
        start: document.createComment(` start:${name} `),
        end: document.createComment(` end:${name} `),
      };

      DomManager.comments.end.before(comments.start, comments.end);
    }
  }

  addElement(element: HTMLElement, position: 'start' | 'end' | number = 'end') {
    // eslint-disable-next-line prefer-rest-params
    this.logger.debug(this.name, 'addElement', arguments);

    switch (position) {
      case 'start': {
        DomManager.managedElements.unshift(element);
        DomManager.comments.extra[this.name]!.start.after(element);
      } break;
      case 'end': {
        DomManager.managedElements.push(element);
        DomManager.comments.extra[this.name]!.end.before(element);
      } break;
      default: {
        DomManager.managedElements.splice(position, 0, element);
        if (position > DomManager.managedElements.length) DomManager.comments.extra[this.name]!.end.before(element);
        else DomManager.managedElements[position]!.before(element);
      } break;
    }
    if (position === 'start') {
      DomManager.managedElements.unshift(element);
      DomManager.comments.extra[this.name]!.start.after(element);
    } else {
      DomManager.managedElements.push(element);
      DomManager.comments.extra[this.name]!.end.before(element);
    }
  }
}
