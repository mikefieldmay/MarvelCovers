import { Comic } from './comic.model';

describe('Comic model', () => {

  let title = 'Best Comic Ever';
  let imagePath = 'imageLocation.jpg';
  let creators = ['Mike May'];
  let characters = ['Mighty Man'];
  let description = 'The most exciting stuff happens in todays comic!';

  it('Instantiates with a title, image path, characters and description', () => {
    let newComic = new Comic(title, imagePath, creators, description, characters);
    expect(newComic.title).toBe(title);
    expect(newComic.imageUrl).toBe(imagePath);
    expect(newComic.creators).toBe(creators);
    expect(newComic.description).toBe(description);
    expect(newComic.characters).toBe(characters);
  });
});
