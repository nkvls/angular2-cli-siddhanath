import { Angular2SiddhanathPage } from './app.po';

describe('angular2-siddhanath App', function() {
  let page: Angular2SiddhanathPage;

  beforeEach(() => {
    page = new Angular2SiddhanathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
