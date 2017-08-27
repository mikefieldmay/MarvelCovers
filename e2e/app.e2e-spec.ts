import { MarvelCoversPage } from './app.po';

describe('marvel-covers App', () => {
  let page: MarvelCoversPage;

  beforeEach(() => {
    page = new MarvelCoversPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
