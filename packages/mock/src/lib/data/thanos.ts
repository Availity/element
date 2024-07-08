const configurations: any[] = [
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
    "name": "Space 11",
    "type": "space",
    "payerIDs": ["a", "b", "c"],
    "images": {
      "logo": "/spaces/test_logo.png"
    }
  },
  {
    "id": "22",
    "configurationId": "22",
    "name": "Space 22",
    "type": "space",
    "payerIDs": ["b", "c"],
    "images": {
      "tile": "/spaces/tile.jpg",
      "billboard": "/spaces/icon.png"
    }
  },
  {
    "id": "33",
    "configurationId": "33",
    "name": "Space 33",
    "type": "space",
    "payerIDs": ["d", "c"],
    "url": "/spaces/tile.jpg"
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
    "isGhosted": true,
    "meta": {
      "ghostText": "This is some ghost text"
    }
  }
];

const buildLinkUrl = (configuration: any, isLocal: boolean) => {
  if (configuration.url) {
    configuration.url = !isLocal ? `/element${configuration.url}` : configuration.url;
  }

  if (configuration.images?.tile) {
    configuration.images.tile = !isLocal ? `/element${configuration.images.tile}` : configuration.images.tile;
  }

  if (configuration.images?.billboard) {
    configuration.images.billboard = !isLocal ? `/element${configuration.images.billboard}` : configuration.images.billboard;
  }

  if (configuration.images?.logo) {
    configuration.images.logo = !isLocal ? `/element${configuration.images.logo}` : configuration.images.logo;
  }

  return configuration;
}

export const getConfigs = ({ payerIds, ids, isLocal }: { payerIds?: string[]; ids?: string[]; isLocal: boolean }) => {
  let configs = [...configurations];
  if (payerIds) {
    configs = configs.filter((c) => c.payerIDs?.some((id: string) => payerIds.includes(id)));
  }
  if (ids) {
    configs = configs.filter((c) => ids.includes(c.id));
  }
  return configs.map(config => buildLinkUrl(config, isLocal));
};
