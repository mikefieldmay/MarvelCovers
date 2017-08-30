import { Comic } from './comic.model';

describe('Comic model', () => {

  let title = 'Best Comic Ever';
  let imagePath = 'imageLocation.jpg';

  it('Instantiates with a title and image path', () => {
    let newComic = new Comic(title, imagePath);
    expect(newComic.title).toBe(title);
    expect(newComic.imageUrl).toBe(imagePath);
  });
});
