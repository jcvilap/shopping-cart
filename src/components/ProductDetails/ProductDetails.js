import React from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import store from '../../store';
import {PRODUCT_DETAILS_URL} from './constants';
import axios from 'axios';

class ProductDetails extends React.Component {
    render() {
        if (this.props.productDetails.error || this.props.productDetails.fetching) {
            return (<div><CircularProgress style={{padding: '30%'}} size={80} thickness={10}/></div>);
        } else {
            this.data = this.props.productDetails.data;
            return (
               <Card>
                    <CardHeader title={this.data.albumTitle} subtitle={this.data.shortDescription}/>
                    <CardMedia
                        overlay={<CardTitle title={this.data.albumTitle} subtitle={this.data.shortDescription} />}>
                        <img src={this.data.largeImage} role="presentation"/>
                    </CardMedia>
                    <CardTitle title={this.data.albumTitle} subtitle={this.data.shortDescription}  />
                    <CardText>{this.data.longDescription}</CardText>
                    <CardActions>
                        <FlatButton label="Back to List" />
                        <FlatButton label="Add To Cart" />
                    </CardActions>
                </Card>
            );
        }
    }

    static getProductDetails(nextState) {
        store.dispatch({
            type: 'FETCH_PRODUCT_DETAILS',
            payload: axios.get(PRODUCT_DETAILS_URL.replace('{{}}', nextState.params.sku))
        });
    }
}

export default connect(({productDetails}) => ({productDetails}))(ProductDetails);


/*

 {
 "sku": 5606300,
 "score": null,
 "productId": 5606300,
 "name": "HP - 15.6\" Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black",
 "source": "bestbuy",
 "type": "HardGood",
 "startDate": "2016-11-06",
 "new": false,
 "active": true,
 "lowPriceGuarantee": true,
 "activeUpdateDate": "2017-02-12T20:56:52",
 "regularPrice": 259.99,
 "salePrice": 229.99,
 "clearance": false,
 "onSale": true,
 "planPrice": null,
 "priceWithPlan": [

 ],
 "priceRestriction": null,
 "priceUpdateDate": "2017-02-12T20:56:52",
 "digital": false,
 "preowned": false,
 "carriers": [

 ],
 "planFeatures": [

 ],
 "devices": [

 ],
 "carrierPlans": [

 ],
 "technologyCode": null,
 "carrierModelNumber": null,
 "earlyTerminationFees": [

 ],
 "monthlyRecurringCharge": "",
 "monthlyRecurringChargeGrandTotal": "",
 "activationCharge": "",
 "minutePrice": "",
 "planCategory": null,
 "planType": null,
 "familyIndividualCode": null,
 "validFrom": null,
 "validUntil": null,
 "carrierPlan": null,
 "outletCenter": null,
 "secondaryMarket": null,
 "frequentlyPurchasedWith": [

 ],
 "accessories": [

 ],
 "relatedProducts": [

 ],
 "techSupportPlans": [

 ],
 "salesRankShortTerm": 46,
 "salesRankMediumTerm": 47,
 "salesRankLongTerm": 62,
 "bestSellingRank": 57,
 "url": "https://api.bestbuy.com/click/-/5606300/pdp",
 "spin360Url": null,
 "mobileUrl": "https://api.bestbuy.com/click/-/5606300/pdp",
 "affiliateUrl": null,
 "addToCartUrl": "https://api.bestbuy.com/click/-/5606300/cart",
 "affiliateAddToCartUrl": null,
 "linkShareAffiliateUrl": "",
 "linkShareAffiliateAddToCartUrl": "",
 "upc": "190780505915",
 "productTemplate": "Laptop_Computers",
 "categoryPath": [
 {
 "id": "cat00000",
 "name": "Best Buy"
 },
 {
 "id": "abcat0500000",
 "name": "Computers & Tablets"
 },
 {
 "id": "abcat0502000",
 "name": "Laptops"
 }
 ],
 "lists": [

 ],
 "customerReviewCount": 1516,
 "customerReviewAverage": 4.3,
 "customerTopRated": false,
 "format": null,
 "freeShipping": true,
 "freeShippingEligible": true,
 "inStoreAvailability": true,
 "inStoreAvailabilityText": "Store Pickup:",
 "inStoreAvailabilityUpdateDate": "2017-02-12T20:56:52",
 "itemUpdateDate": "2017-02-12T20:56:52",
 "onlineAvailability": true,
 "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
 "onlineAvailabilityUpdateDate": "2017-02-12T20:56:52",
 "releaseDate": null,
 "shippingCost": 0.00,
 "shipping": [
 {
 "ground": "",
 "secondDay": 0.00,
 "nextDay": 15.92,
 "vendorDelivery": ""
 }
 ],
 "shippingLevelsOfService": [
 {
 "serviceLevelId": 4,
 "serviceLevelName": "Two Day",
 "unitShippingPrice": 0.00
 },
 {
 "serviceLevelId": 6,
 "serviceLevelName": "One Day",
 "unitShippingPrice": 15.92
 }
 ],
 "specialOrder": false,
 "shortDescription": "Windows 10 HomeTechnical details: AMD A6-Series processor; 15.6\" display; 4GB memory; 500GB hard driveSpecial features: HDMI output",
 "class": "MOBILE COMPUTING",
 "classId": 140,
 "subclass": "BURST SKUS",
 "subclassId": 233,
 "department": "COMPUTERS",
 "departmentId": 6,
 "protectionPlanTerm": "HP ",
 "protectionPlanType": null,
 "protectionPlanLowPrice": "",
 "protectionPlanHighPrice": "",
 "buybackPlans": [

 ],
 "protectionPlans": [

 ],
 "protectionPlanDetails": [

 ],
 "productFamilies": [

 ],
 "aspectRatio": null,
 "screenFormat": null,
 "lengthInMinutes": null,
 "mpaaRating": null,
 "plot": null,
 "studio": null,
 "theatricalReleaseDate": null,
 "description": null,
 "manufacturer": "HP",
 "modelNumber": "15-BA009DX",
 "image": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300_sa.jpg",
 "largeFrontImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300_sd.jpg",
 "mediumImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300fp.gif",
 "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300_s.gif",
 "largeImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300_sb.jpg",
 "alternateViewsImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300cv1d.jpg",
 "angleImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300_rd.jpg",
 "backViewImage": null,
 "energyGuideImage": null,
 "leftViewImage": "http://img.bbystatic.com/BestBuy_US/images/products/5606/5606300ld.jpg",
 "accessoriesImage": null,
 "remoteControlImage": null,
 "rightViewImage": null,
 "topViewImage": null,
 "albumTitle": "15.6\" Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive",
 "artistName": null,
 "artistId": null,
 "originalReleaseDate": null,
 "parentalAdvisory": null,
 "mediaCount": null,
 "monoStereo": null,
 "studioLive": null,
 "condition": "New",
 "inStorePickup": true,
 "friendsAndFamilyPickup": true,
 "homeDelivery": false,
 "quantityLimit": 2,
 "fulfilledBy": "BestBuy.com",
 "members": [

 ],
 "bundledIn": [

 ],
 "albumLabel": null,
 "genre": null,
 "color": "Black",
 "depth": "10 inches",
 "dollarSavings": 30.00,
 "percentSavings": "11.54",
 "tradeInValue": "",
 "height": "0.9 inches",
 "orderable": "Available",
 "weight": "4.74 pounds",
 "shippingWeight": 6.8,
 "width": "15.1 inches",
 "warrantyLabor": "1 year",
 "warrantyParts": "1 year",
 "softwareAge": null,
 "softwareGrade": null,
 "platform": null,
 "numberOfPlayers": null,
 "softwareNumberOfPlayers": null,
 "esrbRating": null,
 "longDescription": "HP Laptop: Experience high-powered computing on the go with this HP notebook. Store your favorite videos or music on the 500GB hard drive, and watch HD movies displayed via its AMD Radeon R4 graphics card. The AMD quad-core A6 processor and 4GB of RAM in this HP notebook let it handle your heaviest multitasking workloads.",
 "includedItemList": [
 {
 "includedItem": "HP 15-ba009dx"
 },
 {
 "includedItem": "3-cell battery"
 },
 {
 "includedItem": "Power adapter"
 }
 ],
 "marketplace": false,
 "listingId": null,
 "sellerId": null,
 "shippingRestrictions": null,
 "batteryLifeMin": 330,
 "displayType": "Widescreen LED",
 "driveCapacityGb": 500,
 "energyStarQualified": true,
 "ethernetPort": true,
 "hdmiOutputs": 1,
 "mobileOperatingSystem": "Windows 10",
 "screenSizeIn": 15.6,
 "usbPort": true
 }


 */