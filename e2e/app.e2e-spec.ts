import { ObservableMethodsPart4Page } from './app.po';

describe('observable-methods-part4 App', function() {
  let page: ObservableMethodsPart4Page;

  beforeEach(() => {
    page = new ObservableMethodsPart4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
