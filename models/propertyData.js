const mongoose = require('mongoose');

const {mongoURI, cookieKey} = require('../config/keys');
require('./Property');
const Property = mongoose.model('properties');

mongoose.connect(mongoURI);

const data = [{
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "5 Forster Trail",
      "province": "BC"
    },
    "title": "Aliquam non mauris.",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "bedrooms": 7,
    "bathrooms": 2,
    "sold": false,
    "sq": 1951,
    "price": 180,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "393 Montana Center",
      "province": "BC"
    },
    "title": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "bedrooms": 4,
    "bathrooms": 1,
    "sold": true,
    "sq": 2754,
    "price": 18,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "86970 Merrick Road",
      "province": "BC"
    },
    "title": "Morbi non lectus.",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": false,
    "sq": 1705,
    "price": 80,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "24670 Chinook Park",
      "province": "BC"
    },
    "title": "Aliquam erat volutpat.",
    "body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": false,
    "sq": 2635,
    "price": 111,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "03849 Glacier Hill Place",
      "province": "BC"
    },
    "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": true,
    "sq": 825,
    "price": 101,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "7 Westend Road",
      "province": "BC"
    },
    "title": "Etiam pretium iaculis justo.",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "bedrooms": 2,
    "bathrooms": 3,
    "sold": true,
    "sq": 1071,
    "price": 110,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "5 Hagan Place",
      "province": "BC"
    },
    "title": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": false,
    "sq": 1902,
    "price": 78,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "West Vancouver",
      "street": "0 Maple Alley",
      "province": "BC"
    },
    "title": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": false,
    "sq": 843,
    "price": 75,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "7 Dovetail Circle",
      "province": "BC"
    },
    "title": "Vivamus vestibulum sagittis sapien.",
    "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "bedrooms": 1,
    "bathrooms": 3,
    "sold": true,
    "sq": 2821,
    "price": 9,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "51 Vidon Alley",
      "province": "BC"
    },
    "title": "Vestibulum sed magna at nunc commodo placerat.",
    "body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "bedrooms": 1,
    "bathrooms": 3,
    "sold": false,
    "sq": 2876,
    "price": 111,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "51053 Monterey Trail",
      "province": "BC"
    },
    "title": "Donec dapibus. Duis at velit eu est congue elementum.",
    "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "bedrooms": 6,
    "bathrooms": 5,
    "sold": false,
    "sq": 1971,
    "price": 136,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "181 Mcguire Crossing",
      "province": "BC"
    },
    "title": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "bedrooms": 2,
    "bathrooms": 2,
    "sold": true,
    "sq": 1782,
    "price": 63,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "1 Thackeray Junction",
      "province": "BC"
    },
    "title": "Nunc rhoncus dui vel sem.",
    "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "bedrooms": 5,
    "bathrooms": 1,
    "sold": false,
    "sq": 1912,
    "price": 16,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "5866 Corry Park",
      "province": "BC"
    },
    "title": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "bedrooms": 2,
    "bathrooms": 1,
    "sold": false,
    "sq": 2291,
    "price": 120,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "3706 Eagle Crest Circle",
      "province": "BC"
    },
    "title": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": true,
    "sq": 1675,
    "price": 100,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Burnaby",
      "street": "4 Becker Trail",
      "province": "BC"
    },
    "title": "Duis mattis egestas metus.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "bedrooms": 5,
    "bathrooms": 4,
    "sold": false,
    "sq": 1007,
    "price": 120,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "45268 Onsgard Trail",
      "province": "BC"
    },
    "title": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "bedrooms": 1,
    "bathrooms": 4,
    "sold": true,
    "sq": 2956,
    "price": 61,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "85 Everett Court",
      "province": "BC"
    },
    "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": false,
    "sq": 2040,
    "price": 70,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "7357 Corscot Trail",
      "province": "BC"
    },
    "title": "Morbi ut odio.",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "bedrooms": 2,
    "bathrooms": 1,
    "sold": false,
    "sq": 2424,
    "price": 119,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "342 Jana Alley",
      "province": "BC"
    },
    "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": false,
    "sq": 1349,
    "price": 80,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "84 Northland Parkway",
      "province": "BC"
    },
    "title": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "bedrooms": 3,
    "bathrooms": 3,
    "sold": false,
    "sq": 1576,
    "price": 111,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "11416 Blue Bill Park Parkway",
      "province": "BC"
    },
    "title": "Vestibulum ac est lacinia nisi venenatis tristique.",
    "body": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": true,
    "sq": 1340,
    "price": 199,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "494 Katie Alley",
      "province": "BC"
    },
    "title": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "bedrooms": 4,
    "bathrooms": 4,
    "sold": false,
    "sq": 2008,
    "price": 146,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "79 Katie Center",
      "province": "BC"
    },
    "title": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "bedrooms": 2,
    "bathrooms": 5,
    "sold": true,
    "sq": 2654,
    "price": 125,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "30 Stephen Center",
      "province": "BC"
    },
    "title": "Nulla nisl.",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "bedrooms": 5,
    "bathrooms": 2,
    "sold": false,
    "sq": 2105,
    "price": 199,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "West Vancouver",
      "street": "51729 Carberry Street",
      "province": "BC"
    },
    "title": "Duis mattis egestas metus.",
    "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": true,
    "sq": 1927,
    "price": 31,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "80127 Arapahoe Park",
      "province": "BC"
    },
    "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "bedrooms": 5,
    "bathrooms": 1,
    "sold": false,
    "sq": 1459,
    "price": 44,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "47761 Mcbride Drive",
      "province": "BC"
    },
    "title": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "bedrooms": 6,
    "bathrooms": 4,
    "sold": true,
    "sq": 1972,
    "price": 90,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "29156 American Street",
      "province": "BC"
    },
    "title": "Mauris sit amet eros.",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "bedrooms": 2,
    "bathrooms": 3,
    "sold": false,
    "sq": 2210,
    "price": 192,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "54 Kedzie Court",
      "province": "BC"
    },
    "title": "Cras pellentesque volutpat dui.",
    "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "bedrooms": 5,
    "bathrooms": 3,
    "sold": false,
    "sq": 2127,
    "price": 32,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "727 Eagan Alley",
      "province": "BC"
    },
    "title": "Vivamus vestibulum sagittis sapien.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": false,
    "sq": 1472,
    "price": 136,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "1590 Warrior Terrace",
      "province": "BC"
    },
    "title": "Pellentesque viverra pede ac diam.",
    "body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "bedrooms": 3,
    "bathrooms": 2,
    "sold": true,
    "sq": 910,
    "price": 107,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "854 Oak Valley Center",
      "province": "BC"
    },
    "title": "Maecenas rhoncus aliquam lacus.",
    "body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "bedrooms": 4,
    "bathrooms": 5,
    "sold": false,
    "sq": 980,
    "price": 109,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "911 Beilfuss Drive",
      "province": "BC"
    },
    "title": "Suspendisse accumsan tortor quis turpis. Sed ante.",
    "body": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "bedrooms": 7,
    "bathrooms": 4,
    "sold": true,
    "sq": 2085,
    "price": 92,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "0 Corry Lane",
      "province": "BC"
    },
    "title": "Integer ac neque. Duis bibendum.",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": false,
    "sq": 1491,
    "price": 98,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "3 Di Loreto Center",
      "province": "BC"
    },
    "title": "Cras in purus eu magna vulputate luctus.",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "bedrooms": 2,
    "bathrooms": 5,
    "sold": true,
    "sq": 2098,
    "price": 65,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "5373 Ruskin Alley",
      "province": "BC"
    },
    "title": "Sed accumsan felis.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "bedrooms": 5,
    "bathrooms": 5,
    "sold": true,
    "sq": 1089,
    "price": 72,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "90098 Fisk Center",
      "province": "BC"
    },
    "title": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": false,
    "sq": 2077,
    "price": 141,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "84926 Bobwhite Way",
      "province": "BC"
    },
    "title": "Duis mattis egestas metus. Aenean fermentum.",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "bedrooms": 2,
    "bathrooms": 3,
    "sold": false,
    "sq": 1386,
    "price": 76,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "8 Chinook Plaza",
      "province": "BC"
    },
    "title": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "bedrooms": 3,
    "bathrooms": 2,
    "sold": true,
    "sq": 2549,
    "price": 172,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "3 Roxbury Road",
      "province": "BC"
    },
    "title": "Nulla nisl. Nunc nisl.",
    "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "bedrooms": 2,
    "bathrooms": 2,
    "sold": true,
    "sq": 1317,
    "price": 5,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "65 Glendale Circle",
      "province": "BC"
    },
    "title": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "bedrooms": 7,
    "bathrooms": 1,
    "sold": true,
    "sq": 656,
    "price": 75,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "97448 Toban Place",
      "province": "BC"
    },
    "title": "Morbi non lectus.",
    "body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "bedrooms": 6,
    "bathrooms": 2,
    "sold": true,
    "sq": 1137,
    "price": 21,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "6 Spaight Road",
      "province": "BC"
    },
    "title": "Integer ac leo. Pellentesque ultrices mattis odio.",
    "body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "bedrooms": 2,
    "bathrooms": 1,
    "sold": true,
    "sq": 1642,
    "price": 136,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "1 1st Court",
      "province": "BC"
    },
    "title": "Donec ut dolor.",
    "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": false,
    "sq": 1452,
    "price": 27,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "638 North Junction",
      "province": "BC"
    },
    "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "bedrooms": 1,
    "bathrooms": 4,
    "sold": false,
    "sq": 2296,
    "price": 19,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "0183 Summer Ridge Alley",
      "province": "BC"
    },
    "title": "Phasellus in felis.",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "bedrooms": 3,
    "bathrooms": 4,
    "sold": false,
    "sq": 816,
    "price": 46,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "56 Hoepker Avenue",
      "province": "BC"
    },
    "title": "Cras pellentesque volutpat dui.",
    "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "bedrooms": 6,
    "bathrooms": 5,
    "sold": false,
    "sq": 1032,
    "price": 133,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "61 Dryden Circle",
      "province": "BC"
    },
    "title": "Integer ac leo. Pellentesque ultrices mattis odio.",
    "body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": false,
    "sq": 2191,
    "price": 13,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "4998 Glendale Parkway",
      "province": "BC"
    },
    "title": "Maecenas tincidunt lacus at velit.",
    "body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "bedrooms": 5,
    "bathrooms": 1,
    "sold": false,
    "sq": 1336,
    "price": 160,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "West Vancouver",
      "street": "90261 Loeprich Center",
      "province": "BC"
    },
    "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "bedrooms": 3,
    "bathrooms": 4,
    "sold": true,
    "sq": 933,
    "price": 113,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "57 Dwight Pass",
      "province": "BC"
    },
    "title": "Fusce consequat.",
    "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "bedrooms": 3,
    "bathrooms": 1,
    "sold": false,
    "sq": 1321,
    "price": 192,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "2580 Northport Terrace",
      "province": "BC"
    },
    "title": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "bedrooms": 3,
    "bathrooms": 4,
    "sold": true,
    "sq": 2430,
    "price": 97,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "3 Fulton Terrace",
      "province": "BC"
    },
    "title": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    "body": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "bedrooms": 2,
    "bathrooms": 4,
    "sold": true,
    "sq": 1118,
    "price": 183,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "85792 Magdeline Drive",
      "province": "BC"
    },
    "title": "In sagittis dui vel nisl.",
    "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": false,
    "sq": 1780,
    "price": 81,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "537 Morningstar Crossing",
      "province": "BC"
    },
    "title": "Nulla justo.",
    "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": true,
    "sq": 2395,
    "price": 77,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "193 Surrey Center",
      "province": "BC"
    },
    "title": "Maecenas pulvinar lobortis est.",
    "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": false,
    "sq": 2070,
    "price": 93,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "46 Reindahl Court",
      "province": "BC"
    },
    "title": "Fusce consequat.",
    "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": true,
    "sq": 1707,
    "price": 151,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "139 Hazelcrest Lane",
      "province": "BC"
    },
    "title": "Quisque porta volutpat erat.",
    "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "bedrooms": 5,
    "bathrooms": 5,
    "sold": true,
    "sq": 2543,
    "price": 55,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "18983 Merchant Drive",
      "province": "BC"
    },
    "title": "In eleifend quam a odio. In hac habitasse platea dictumst.",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": true,
    "sq": 2205,
    "price": 175,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "659 Mendota Avenue",
      "province": "BC"
    },
    "title": "In sagittis dui vel nisl. Duis ac nibh.",
    "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "bedrooms": 7,
    "bathrooms": 1,
    "sold": false,
    "sq": 1046,
    "price": 35,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "281 Petterle Crossing",
      "province": "BC"
    },
    "title": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "bedrooms": 1,
    "bathrooms": 4,
    "sold": false,
    "sq": 2290,
    "price": 86,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "216 Montana Center",
      "province": "BC"
    },
    "title": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "bedrooms": 2,
    "bathrooms": 4,
    "sold": false,
    "sq": 1665,
    "price": 166,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "053 Hooker Trail",
      "province": "BC"
    },
    "title": "Aenean fermentum.",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "bedrooms": 5,
    "bathrooms": 3,
    "sold": false,
    "sq": 1370,
    "price": 118,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "2 Daystar Drive",
      "province": "BC"
    },
    "title": "Curabitur in libero ut massa volutpat convallis.",
    "body": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "bedrooms": 2,
    "bathrooms": 1,
    "sold": true,
    "sq": 652,
    "price": 9,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "7 Tomscot Avenue",
      "province": "BC"
    },
    "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": false,
    "sq": 1634,
    "price": 43,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "42516 Oakridge Crossing",
      "province": "BC"
    },
    "title": "Morbi quis tortor id nulla ultrices aliquet.",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "bedrooms": 7,
    "bathrooms": 5,
    "sold": true,
    "sq": 1857,
    "price": 173,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "54 Hanson Place",
      "province": "BC"
    },
    "title": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": true,
    "sq": 1764,
    "price": 16,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "7928 Moose Lane",
      "province": "BC"
    },
    "title": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "bedrooms": 2,
    "bathrooms": 3,
    "sold": false,
    "sq": 1042,
    "price": 13,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Burnaby",
      "street": "2864 Weeping Birch Place",
      "province": "BC"
    },
    "title": "In blandit ultrices enim.",
    "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "bedrooms": 4,
    "bathrooms": 4,
    "sold": true,
    "sq": 2444,
    "price": 75,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "0919 Shasta Way",
      "province": "BC"
    },
    "title": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    "body": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "bedrooms": 6,
    "bathrooms": 3,
    "sold": false,
    "sq": 1365,
    "price": 95,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "99793 Old Shore Hill",
      "province": "BC"
    },
    "title": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    "body": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": true,
    "sq": 2849,
    "price": 166,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "58 Eagle Crest Place",
      "province": "BC"
    },
    "title": "Vivamus in felis eu sapien cursus vestibulum.",
    "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "bedrooms": 2,
    "bathrooms": 4,
    "sold": false,
    "sq": 1598,
    "price": 52,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "866 Hauk Pass",
      "province": "BC"
    },
    "title": "Aliquam non mauris. Morbi non lectus.",
    "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "bedrooms": 3,
    "bathrooms": 4,
    "sold": false,
    "sq": 1202,
    "price": 191,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "0 Ronald Regan Hill",
      "province": "BC"
    },
    "title": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "bedrooms": 6,
    "bathrooms": 3,
    "sold": true,
    "sq": 2689,
    "price": 162,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "357 Autumn Leaf Hill",
      "province": "BC"
    },
    "title": "Curabitur gravida nisi at nibh.",
    "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "bedrooms": 2,
    "bathrooms": 3,
    "sold": false,
    "sq": 1328,
    "price": 177,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "71130 Carpenter Hill",
      "province": "BC"
    },
    "title": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": true,
    "sq": 941,
    "price": 39,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Surrey",
      "street": "41 Mendota Crossing",
      "province": "BC"
    },
    "title": "Proin interdum mauris non ligula pellentesque ultrices.",
    "body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "bedrooms": 3,
    "bathrooms": 3,
    "sold": true,
    "sq": 1016,
    "price": 6,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "50 Coolidge Avenue",
      "province": "BC"
    },
    "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "bedrooms": 4,
    "bathrooms": 3,
    "sold": true,
    "sq": 1362,
    "price": 159,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "9071 Kipling Drive",
      "province": "BC"
    },
    "title": "Integer non velit.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "bedrooms": 4,
    "bathrooms": 5,
    "sold": false,
    "sq": 2773,
    "price": 180,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "125 Eagan Hill",
      "province": "BC"
    },
    "title": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": false,
    "sq": 2081,
    "price": 72,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Delta",
      "street": "5762 Arizona Road",
      "province": "BC"
    },
    "title": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "bedrooms": 5,
    "bathrooms": 3,
    "sold": true,
    "sq": 1913,
    "price": 47,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "536 Nobel Hill",
      "province": "BC"
    },
    "title": "Nulla mollis molestie lorem. Quisque ut erat.",
    "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": false,
    "sq": 1216,
    "price": 165,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "966 Lukken Lane",
      "province": "BC"
    },
    "title": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "body": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "bedrooms": 7,
    "bathrooms": 3,
    "sold": false,
    "sq": 818,
    "price": 165,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "8921 Pankratz Drive",
      "province": "BC"
    },
    "title": "Phasellus id sapien in sapien iaculis congue.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "bedrooms": 1,
    "bathrooms": 5,
    "sold": false,
    "sq": 1399,
    "price": 196,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "79 Pawling Place",
      "province": "BC"
    },
    "title": "Etiam justo. Etiam pretium iaculis justo.",
    "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "bedrooms": 6,
    "bathrooms": 4,
    "sold": false,
    "sq": 1930,
    "price": 194,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Burnaby",
      "street": "8 Sunfield Road",
      "province": "BC"
    },
    "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "body": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": false,
    "sq": 1727,
    "price": 124,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "8758 Buena Vista Road",
      "province": "BC"
    },
    "title": "Suspendisse potenti.",
    "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "bedrooms": 6,
    "bathrooms": 1,
    "sold": true,
    "sq": 1844,
    "price": 64,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "905 Lighthouse Bay Drive",
      "province": "BC"
    },
    "title": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "body": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "bedrooms": 6,
    "bathrooms": 4,
    "sold": true,
    "sq": 2577,
    "price": 102,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Richmond",
      "street": "674 Orin Point",
      "province": "BC"
    },
    "title": "Nunc purus. Phasellus in felis.",
    "body": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "bedrooms": 2,
    "bathrooms": 1,
    "sold": false,
    "sq": 750,
    "price": 17,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "1629 Sherman Trail",
      "province": "BC"
    },
    "title": "Suspendisse accumsan tortor quis turpis.",
    "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "bedrooms": 7,
    "bathrooms": 3,
    "sold": true,
    "sq": 2994,
    "price": 35,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "90937 Monument Point",
      "province": "BC"
    },
    "title": "Integer ac leo. Pellentesque ultrices mattis odio.",
    "body": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": true,
    "sq": 2853,
    "price": 113,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "West Vancouver",
      "street": "04 Nobel Drive",
      "province": "BC"
    },
    "title": "Nulla suscipit ligula in lacus.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "bedrooms": 1,
    "bathrooms": 2,
    "sold": false,
    "sq": 1560,
    "price": 148,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "87 Meadow Vale Park",
      "province": "BC"
    },
    "title": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "bedrooms": 3,
    "bathrooms": 5,
    "sold": false,
    "sq": 1202,
    "price": 119,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "33388 Melvin Junction",
      "province": "BC"
    },
    "title": "Maecenas pulvinar lobortis est.",
    "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "bedrooms": 2,
    "bathrooms": 5,
    "sold": false,
    "sq": 1362,
    "price": 140,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "054 Melvin Avenue",
      "province": "BC"
    },
    "title": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    "body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "bedrooms": 7,
    "bathrooms": 1,
    "sold": false,
    "sq": 2849,
    "price": 139,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio Beach_Access Rooftop_Terrace"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "North Vancouver",
      "street": "8 Acker Trail",
      "province": "BC"
    },
    "title": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "bedrooms": 4,
    "bathrooms": 2,
    "sold": false,
    "sq": 1072,
    "price": 27,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters"
  }, {
    "propertyType": "house",
    "address": {
      "country": "Canada",
      "city": "Langley",
      "street": "5916 7th Street",
      "province": "BC"
    },
    "title": "Quisque ut erat.",
    "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "bedrooms": 5,
    "bathrooms": 1,
    "sold": true,
    "sq": 2595,
    "price": 159,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System Gated_Community Automatic_Sprinklers Fireplace Window_Shutters Ocean_Views Heated_Floors Private_Patio"
  }, {
    "propertyType": "apartment",
    "address": {
      "country": "Canada",
      "city": "Coquitlam",
      "street": "12592 Oak Road",
      "province": "BC"
    },
    "title": "Morbi quis tortor id nulla ultrices aliquet.",
    "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "bedrooms": 1,
    "bathrooms": 1,
    "sold": true,
    "sq": 2101,
    "price": 106,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden"
  }, {
    "propertyType": "condominium",
    "address": {
      "country": "Canada",
      "city": "Vancouver",
      "street": "3 Bay Street",
      "province": "BC"
    },
    "title": "Pellentesque at nulla. Suspendisse potenti.",
    "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "bedrooms": 7,
    "bathrooms": 1,
    "sold": true,
    "sq": 887,
    "price": 99,
    "features": "Kitchen Air_Condition  Balcony  Gym Garden CCTV Children_Play_Ground Comunity_Center Security_System"
  }]

  dataloading = async () => {
    // const proper = await new Property(data1).save();
    Property.insertMany(data, (e)=>{
        console.log("properties created ");        
    })
    // console.log("properties created ");    
  }
  
  dataloading()
