const configurations = [
  {
    "id": "agreement",
    "configurationId": "agreement",
    "type": "space",
    "name": "Agreement Configuration",
    "description": "This is an agreement."
  },
  {
    "id": "agreementMarkdown",
    "configurationId":
      "agreementMarkdown",
    "type": "space",
    "name": "Agreement Markdown Configuration",
    "description": "# This is an agreement."
  },
  {
    "id": "1",
    "configurationId": "1",
    "type": "space",
    "name": "Space 1"
  },
  {
    "id": "2",
    "configurationId": "2",
    "type": "space",
    "name": "Space 2"
  },
  {
    "id": "3",
    "configurationId": "3",
    "type": "space",
    "name": "Space 3"
  },
  {
    "id": "4",
    "configurationId": "4",
    "type": "space",
    "name": "Space 4"
  },
  {
    "id": "5",
    "configurationId": "5",
    "type": "space",
    "name": "Space 5"
  },
  {
    "id": "6",
    "configurationId": "6",
    "type": "space",
    "name": "Space 6"
  },
  {
    "id": "7",
    "configurationId": "7",
    "type": "space",
    "name": "Space 7"
  },
  {
    "id": "8",
    "configurationId": "8",
    "type": "space",
    "name": "Space 8"
  },
  {
    "id": "9",
    "configurationId": "9",
    "type": "space",
    "name": "Space 9"
  },
  {
    "id": "10",
    "configurationId": "10",
    "type": "space",
    "name": "Space 10"
  },
  {
    "id": "11",
    "configurationId": "11",
    "payerIDs": ["a", "b", "c"],
    "images": {
      "logo": "/element/spaces/test_logo.png"
    }
  },
  {
    "id": "22",
    "configurationId": "22",
    "payerIDs": ["b", "c"],
    "images": {
      "tile": "/element/spaces/tile.jpg",
      "billboard": "/element/spaces/icon.png"
    }
  },
  {
    "id": "33",
    "configurationId": "33",
    "payerIDs": ["d", "c"],
    "url": "/element/spaces/tile.jpg"
  },
  {
    "id": "disclaimer",
    "configurationId": "disclaimer",
    "type": "space",
    "name": "Disclaimer Configuration",
    "description": "This is a disclaimer."
  },
  {
    "id": "disclaimerMarkdown",
    "configurationId":
      "disclaimerMarkdown",
    "type": "space",
    "name": "Disclaimer Markdown Configuration",
    "description": "# This is a disclaimer."
  },
  {
    "id": "ghosted",
    "configurationId": "ghosted",
    "type": "space",
    "name": "Ghosted Configuration",
    "isGhost": true,
    "meta": {
      "ghostText": "This is some ghost text"
    }
  }
];

export const getConfigs = ({ payerIds, ids }: { payerIds?: string[]; ids?: string[] }) => {
  let configs = [...configurations];
  if (payerIds) {
    configs = configs.filter((c) => c.payerIDs?.some((id) => payerIds.includes(id)));
  }
  if (ids) {
    configs = configs.filter((c) => ids.includes(c.id));
  }
  return configs;
};
