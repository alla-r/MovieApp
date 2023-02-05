/* eslint-disable class-methods-use-this */

const defaultData = {
  favorites: [],
  watchlist: [],
  rate: [],
};

class StorageService {
  setUser(user) {
    this.setItem('user', user)
  }

  getUser() {
    return this.getItem('user');
  }

  getMediaCustomDetails(mediaInfo) {
    const customDetails = this.getItem('customDetails') || defaultData;

    const isInFavorites = this.getFilteredList(customDetails.favorites, mediaInfo).length > 0;
    const isInWatchlist = this.getFilteredList(customDetails.watchlist, mediaInfo).length > 0;
    const isInRatingList = this.getFilteredList(customDetails.rate, mediaInfo).length > 0;
    const rateMark = customDetails.rate.find(
      ({ id, type }) => id === mediaInfo.id && type === mediaInfo.type,
    )?.rate;

    return {
      isInFavorites,
      isInWatchlist,
      isInRatingList,
      rateMark,
    };
  }

  getListData(listName) {
    const customDetails = this.getItem('customDetails') || defaultData;

    return customDetails[listName];
  }

  getFilteredList(list, data) {
    return list.filter(({ id, type }) => id === data.id && type === data.type);
  }

  changeMediaCustomDetails({ listName, mediaInfo, action }) {
    const customDetails = this.getItem('customDetails') || defaultData;

    if (action === 'add') {
      const timestamp = Date.now();
      const listWithoutCurrent = customDetails[listName].filter((item) => item.id !== mediaInfo.id);
      customDetails[listName] = listWithoutCurrent;
      customDetails[listName].push({ ...mediaInfo, timestamp });
      this.setItem('customDetails', customDetails);
    }

    if (action === 'remove') {
      customDetails[listName] = customDetails[listName].filter(({ id, type }) => {
        const trigger = id.toString() === mediaInfo.id.toString() && type === mediaInfo.type;
        return !trigger;
      });

      this.setItem('customDetails', customDetails);
    }

    return customDetails[listName];
  }

  getItem(key) {
    // eslint-disable-next-line no-undef
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, value) {
    // eslint-disable-next-line no-undef
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default new StorageService();
