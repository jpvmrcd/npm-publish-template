export interface TestClassOptions {
  isTrue: boolean;
}

export class TestClass {
  public element: HTMLElement;

  public options: TestClassOptions;

  constructor(el: HTMLElement, opts: TestClassOptions) {
    this.element = el;
    this.options = opts;
  }

  public test(): HTMLElement {
    this.options.isTrue = true;
    return this.element;
  }
}
