import rawData from "../data/servant.json";

export function selectRandomServant() {
  const servantData = rawData;
  const filteredServantData = servantData.filter(
    (servant) => !!servant.extraAssets.faces.ascension["1"]
  );

  return filteredServantData[
    Math.floor(Math.random() * filteredServantData.length)
  ];
}

export function getAscensionImage(servant, ascensionLevel = "1") {
  return servant.extraAssets.faces.ascension[ascensionLevel];
}
