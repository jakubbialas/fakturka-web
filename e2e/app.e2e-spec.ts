import { FakturkaWebPage } from './app.po';

describe('fakturka-web App', () => {
  let page: FakturkaWebPage;

  beforeEach(() => {
    page = new FakturkaWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
