export function getResolution(url) {
  return ((url || '')
  .split('/')
  .find(c => /^\d+x\d+$/.exec(c)) || '')
  .split('x')
  .map(value => parseInt(value));
}

export function getPaddingTop(url) {
  const resolution = getResolution(url);
  return resolution.length === 2 ? (resolution[1] / resolution[0] * 100) + '%' : '100%';
}

const loaded = {};

/**
 *
 * @param url
 * @return {Promise<Image>}
 */
export function loadImage(url) {
  return new Promise((accept, reject) => {
    if (loaded[url]) {
      return accept(loaded[url]);
    }

    const image = new Image;
    image.addEventListener('load', () => {
      loaded[url] = image;
      accept(image);
    });
    image.addEventListener('error', reject);
    image.setAttribute('src', url);
  });
}
