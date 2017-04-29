import { Angular2bundlePage } from './app.po';

describe('angular2bundle App', () => {
  let page: Angular2bundlePage;

  beforeEach(() => {
    page = new Angular2bundlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
