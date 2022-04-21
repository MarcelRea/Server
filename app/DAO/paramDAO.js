import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const lightsSchema = new mongoose.Schema({
    streetName: {type: String},
    allLamps: {type: Number},
    workingLamps: {type: Number},
    }, {
    collection: 'lights'
});
lightsSchema.plugin(uniqueValidator);

const LightsModel = mongoose.model('lights', lightsSchema);




const airSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    statusAir: {type: String},
    date: {type: String}
    }, {
    collection: 'air'
});
airSchema.plugin(uniqueValidator);

const AirModel = mongoose.model('air', airSchema);




const restaurantSchema = new mongoose.Schema({
    dayOfWeek: {type: String},
    workers: {type: Number},
    orders: {type: Number},
    hour: {type: String}
    }, {
    collection: 'restaurant'
});
restaurantSchema.plugin(uniqueValidator);

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);



async function queryLights() {
    const result = await LightsModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function addLights(object) {
  const result = await LightsModel.create(object);
  if (result)
      return mongoConverter(result);
}

async function getLights(id) {
  const result = await LightsModel.findById(id);
  {
      if (result) {
          return mongoConverter(result);
      }
  }
}



async function queryAir() {
    const result = await AirModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function getLast() {
    const result = await AirModel.findOne().sort({'_id':-1}).limit(1);
    {
        if (result) {
          return mongoConverter(result);
        }
    }
}

async function addAir(object) {
  const result = await AirModel.create(object);
  if (result)
      return mongoConverter(result);
}

async function getAir(id) {
  const result = await AirModel.findById(id);
  {
      if (result) {
          return mongoConverter(result);
      }
  }
}



async function queryRestaurant() {
    const result = await RestaurantModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function addRestaurant(object) {
  const result = await RestaurantModel.create(object);
  if (result)
      return mongoConverter(result);
}

async function getLastRestaurant() {
    const result = await RestaurantModel.findOne().sort({'_id':-1}).limit(1);
    {
        if (result) {
          return mongoConverter(result);
        }
    }
}

async function getRestaurant(id) {
  const result = await RestaurantModel.findById(id);
  {
      if (result) {
          return mongoConverter(result);
      }
  }
}

export default {
    queryLights: queryLights,
    addLights: addLights,
    getLights: getLights,

    queryAir: queryAir,
    addAir: addAir,
    getAir: getAir,
    getLast: getLast,

    queryRestaurant: queryRestaurant,
    addRestaurant: addRestaurant,
    getLastRestaurant: getLastRestaurant,
    getRestaurant: getRestaurant,

    model: LightsModel,
    model: AirModel,
    model: RestaurantModel
};
