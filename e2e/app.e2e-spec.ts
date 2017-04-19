import { CounterApplicationPage } from './app.po';

describe('counter-application App', () => {
  let page: CounterApplicationPage;

  beforeEach(() => {
    page = new CounterApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
