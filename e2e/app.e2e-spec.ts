import { ReportsAppPage } from './app.po';

describe('reports-app App', function() {
  let page: ReportsAppPage;

  beforeEach(() => {
    page = new ReportsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
