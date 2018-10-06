const LiveCampaignsOptions = [
  {
    key: '1',
    isActive: true,
    text: 'CTA',
    active: {
      image: require('../../assets/LiveCampaignsLogo/click-active.png'),
      color: '#F5D613',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/click.png'),
      color: '#fff',
      backgroundColor: '#F5D613',
    },
  },
  {
    key: '2',
    text: 'POLL',
    isActive: false,
    active: {
      image: require('../../assets/LiveCampaignsLogo/poll-active.png'),
      color: '#50E3C2',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/poll.png'),
      color: '#fff',
      backgroundColor: '#50E3C2',
    },
  },
  {
    key: '3',
    text: 'CHAT',
    isActive: false,
    active: {
      image: require('../../assets/LiveCampaignsLogo/chat-active.png'),
      color: '#7ED321',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/chat.png'),
      color: '#fff',
      backgroundColor: '#7ED321',
    },
  },
  {
    key: '4',
    text: 'EMOJIS',
    isActive: false,
    active: {
      image: require('../../assets/LiveCampaignsLogo/heart-active.png'),
      color: '#4A90E2',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/heart.png'),
      color: '#fff',
      backgroundColor: '#4A90E2',
    },
  },
  {
    key: '5',
    text: `PRODUCT ${'\n'}CAROUSEL`,
    isActive: false,
    active: {
      image: require('../../assets/LiveCampaignsLogo/tshirt-active.png'),
      color: '#D0021B',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/tshirt.png'),
      color: '#fff',
      backgroundColor: '#D0021B',
    },
  },
  {
    key: '6',
    text: `BROADCAST ${`\n`}TOOLS`,
    isActive: false,
    active: {
      image: require('../../assets/LiveCampaignsLogo/camera-active.png'),
      color: '#FF9F3E',
      backgroundColor: '#fff',
    },
    inactive: {
      image: require('../../assets/LiveCampaignsLogo/camera.png'),
      color: '#fff',
      backgroundColor: '#FF9F3E',
    },
  },
];

export default LiveCampaignsOptions;
