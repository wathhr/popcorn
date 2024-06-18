import { CreateLogger } from '#/common';
import renderer from '#/content';

export class DomManager {
  static comments: Record<string, { start: Comment, end: Comment }> = {};
  private logger: CreateLogger;
  managedElements: HTMLElement[] = [];

  constructor(private name: string) {
    this.logger ??= new CreateLogger('DOM', name);

    if (!(name in DomManager.comments)) {
      const comments = DomManager.comments[name] = {
        start: document.createComment(` start:${name} `),
        end: document.createComment(` end:${name} `),
      };

      renderer.comments.end.before(comments.start, comments.end);
    }
  }

  addElement(element: HTMLElement, position: 'start' | 'end' | number = 'end') {
    // eslint-disable-next-line prefer-rest-params
    this.logger.debug(this.name, 'addElement', arguments);

    switch (position) {
      case 'start': {
        this.managedElements.unshift(element);
        DomManager.comments[this.name]!.start.after(element);
      } break;

      case 'end': {
        this.managedElements.push(element);
        DomManager.comments[this.name]!.end.before(element);
      } break;

      default: {
        this.managedElements.splice(position, 0, element);
        if (position > this.managedElements.length) DomManager.comments[this.name]!.end.before(element);
        else this.managedElements[position]!.before(element);
      } break;
    }
  }
}

export function stop() {
  for (const comments of Object.values(DomManager.comments)) {
    comments.start.remove();
    comments.end.remove();
  }
}
