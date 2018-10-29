export const itemDataDehydrator = (data) => {
  const items = data["findCompletedItemsResponse"][0].searchResult[0].item;
  console.log(items);
  const dehydratedItems = [];

  for(let item of items) {
    const newItem = {
      title: item.title[0],
      itemId: item.itemId[0],
      soldPrice: item.sellingStatus[0].convertedCurrentPrice[0].__value__,
      endTime: item.listingInfo[0].endTime[0],
      postType: item.listingInfo[0].listingType[0],
      itemURL: item.viewItemURL[0]
      // galleryURL: item.galleyURL[0],
      // condition: item.condition[0].conditionDisplayName[0]
    };

    // if(item.shippingInfo[0].shippingType === ["Free"]) {
    //   newItem.shippingPrice = "0";
    // } else {
    //   newItem.shippingPrice = item.shippingInfo[0].shippingServiceCost[0].__value__
    // }

    // newItem.finalPrice = newItem.soldPrice + newItem.shippingPrice;

    dehydratedItems.push(newItem);
  }

  return dehydratedItems;
};