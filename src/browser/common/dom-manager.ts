import { start, stop } from '#/content';

const comments = {
  start: document.createComment(' start:Popcorn'),
  end: document.createComment(' end:Popcorn '),
};

start(() => {
  for (const comment of Object.values(comments)) document.head.appendChild(comment);
});

export class DomManager {
  static comments: Record<string, { start: Comment, end: Comment }> = {};
  managedElements: HTMLElement[] = [];

  constructor(private name: string) {
    if (!(name in DomManager.comments)) {
      const c = DomManager.comments[name] = {
        start: document.createComment(` start:${name} `),
        end: document.createComment(` end:${name} `),
      };

      comments.end.before(c.start, c.end);
    }
  }

  addElement(element: HTMLElement, position: 'start' | 'end' | number = 'end') {
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

stop(() => {
  for (const comment of Object.values(comments)) comment.remove();
  for (const comments of Object.values(DomManager.comments)) {
    comments.start.remove();
    comments.end.remove();
  }
});
