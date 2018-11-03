import React, { Component } from 'react';

const Context = React.createContext();

const typeDataImage = {
  Active: require('../../assets/green.png'),
  Inactive: require('../../assets/red.png'),
  Completed: require('../../assets/gray.png'),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_CAMPAIGNS':
      return {
        ...state,
        campaigns: [action.data, ...state.campaigns],
      };
    case 'UPDATE_CAMPAIGNS':
      return {
        ...state,
        campaigns: state.campaigns.map(itemData => {
          if (action.data.key === itemData.key) {
            return action.data;
          }
          return itemData;
        }),
      };
    case 'SELECTED_CAMPAIGNS':
      return {
        ...state,
        selectedCampaigns: action.data,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    campaigns: [],
    dispatch: action => {
      this.setState(
        state => reducer(state, action),
        () => {
          this.getData();
        }
      );
    },
    provideData: [],
    selectedCampaigns: '',
    activeCampaigns: [],
  };

  getActiveCampaigns = () => {
    if (this.state.provideData.length !== 0) {
      const dataArray = this.state.provideData.filter(campaignsData => {
        return campaignsData.state === 'Active';
      });
      this.setState(
        {
          activeCampaigns: dataArray,
        },
        () => {
          console.log(
            'MAIN this.state.activeCampaigns',
            this.state.activeCampaigns
          );
        }
      );
    }
  };

  getData = () => {
    if (this.state.campaigns.length !== 0) {
      const dataArray = this.state.campaigns.map(campaignsData => {
        if (new Date() <= new Date(campaignsData.startDate)) {
          campaignsData.state = 'Inactive';
          campaignsData.stateImage = typeDataImage[campaignsData.state];
          return campaignsData;
        } else if (
          new Date() >= new Date(campaignsData.startDate) &&
          new Date() <= new Date(campaignsData.endDate)
        ) {
          campaignsData.state = 'Active';
          campaignsData.stateImage = typeDataImage[campaignsData.state];
          return campaignsData;
        } else if (
          new Date() > new Date(campaignsData.endDate) &&
          new Date() > new Date(campaignsData.startDate)
        ) {
          campaignsData.state = 'Completed';
          campaignsData.stateImage = typeDataImage[campaignsData.state];
          return campaignsData;
        }
        return campaignsData;
      });

      this.setState(
        {
          provideData: dataArray,
        },
        () => {
          console.log('MAIN this.state.provideData', this.state.provideData);
          this.getActiveCampaigns();
        }
      );
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
