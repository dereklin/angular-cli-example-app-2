import { LearnPage } from './app.po';

describe('learn App', function() {
  let page: LearnPage;

  beforeEach(() => {
    page = new LearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
