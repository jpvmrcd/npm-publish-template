export interface PublishTestOptions {
  isTrue: boolean;
}

export class PublishTest {
  public element: HTMLElement;

  public options: PublishTestOptions;

  constructor(el: HTMLElement, opts: PublishTestOptions) {
    this.element = el;
    this.options = opts;
  }

  public test(): HTMLElement {
    return this.element;
  }
}
