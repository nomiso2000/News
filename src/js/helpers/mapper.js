import uuid from "uuid";
const defaultImgUrl =
  "http://ukrainepravo.com/upload/iblock/858/858784f1c81237140d8f4ce454ecbf3e.jpg";

const mapper = items => {
  return items.map(
    ({
      title,
      abstract,
      url,
      multimedia: image,
      des_facet: tags,
      section,
      ...etc
    }) => ({
      title,
      abstract:
        abstract.length > 170 ? abstract.slice(0, 170) + "..." : abstract,
      url,
      image: image && image[0] ? image[0].url : defaultImgUrl,
      tags: tags.slice(0, 3).filter(tag => tag.length < 50),
      section,
      id: uuid(),
      ...etc
    })
  );
};
export default mapper;
