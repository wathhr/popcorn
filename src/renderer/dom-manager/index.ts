export class DomManager {
  private shared = {
    comments: {
      start: document.createComment(' section:Popcorn '),
      end: document.createComment(' endsection '),
    },
    managedElements: [] as HTMLElement[],
  };

  constructor(private name: string) {
    if (window.PopcornShared.DOM) this.shared = window.PopcornShared.DOM;
    else {
      Object.assign(window.PopcornShared, { DOM: this.shared });
      document.head.append(this.shared.comments.start, this.shared.comments.end);
    }
  }

  addElement(element: HTMLElement, position: 'start' | 'end' = 'end') {
    /* eslint-disable prefer-rest-params */
    if (DEBUG) console.log(this.name, 'addElement', arguments);

    if (position === 'start') {
      this.shared.managedElements.unshift(element);
      this.shared.comments.start.after(element);
    } else {
      this.shared.managedElements.push(element);
      this.shared.comments.end.before(element);
    }
  }
}

export default DomManager;

export type Shared = typeof DomManager.prototype['shared'];
