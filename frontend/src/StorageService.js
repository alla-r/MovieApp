/* eslint-disable class-methods-use-this */

const defaultData = {
  favorite: [],
  watchlist: [],
  rate: []
};

class StorageService {
  getMediaCustomDetails(mediaInfo) {
    const customDetails = this.getItem("customDetails") || defaultData;

    const isInFavorite = this.getFilteredList(customDetails.favorite, mediaInfo).length > 0;
    const isInWatchlist = this.getFilteredList(customDetails.watchlist, mediaInfo).length > 0;
    const isInRatingList = this.getFilteredList(customDetails.rate, mediaInfo).length > 0;

    return {
      isInFavorite,
      isInWatchlist,
      isInRatingList
    };
  }

  getFilteredList(list, data) {
    return list.filter(({ id, type }) => id === data.id && type === data.type);
  }

  changeMediaCustomDetails({ listName, mediaInfo, action }) {
    const customDetails = this.getItem("customDetails") || defaultData;

    if (action === "add") {
      customDetails[listName].push(mediaInfo);
      this.setItem("customDetails", customDetails);
    }

    if (action === "remove") {
      customDetails[listName] = customDetails[listName].filter(({ id, type }) => id !== mediaInfo.id && type !== mediaInfo.type);

      this.setItem("customDetails", customDetails);
    }

    return customDetails;
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default new StorageService();
