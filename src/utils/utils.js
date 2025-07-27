import rawData from "../data/servant.json";

export default function selectRandomServant() {
  const servantData = rawData;
  const filteredServantData = servantData.filter(
    (servant) => !!servant.extraAssets.faces.ascension["1"]
  );

  return filteredServantData[
    Math.floor(Math.random() * filteredServantData.length)
  ];
}
