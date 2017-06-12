import { AngularWebappPage } from './app.po';

describe('angular-webapp App', () => {
  let page: AngularWebappPage;

  beforeEach(() => {
    page = new AngularWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
