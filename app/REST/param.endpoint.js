import business from '../business/business.container';
import applicationException from "../service/applicationException";
const mongoose = require("mongoose");
const paramEndpoint = (router) => {
    router.get('/api/lights', async (request, response, next) => {
        try {
            let result = await business.getParamManager().queryLights();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/lights', async (request, response, next) => {
          try {
              let result = await business.getParamManager().addLights(request.body);
              response.status(200).send(result);
          } catch (error) {
              applicationException.errorHandler(error, response);
          }
      });

    router.get('/api/lights/:id', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getLights(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/air', async (request, response, next) => {
        try {
            let result = await business.getParamManager().queryAir();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/air/last', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getLast();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/air', async (request, response, next) => {
          try {
              let result = await business.getParamManager().addAir(request.body);
              response.status(200).send(result);
          } catch (error) {
              applicationException.errorHandler(error, response);
          }
      });

    router.get('/api/air/:id', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getAir(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/restaurant', async (request, response, next) => {
        try {
            let result = await business.getParamManager().queryRestaurant();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/restaurant', async (request, response, next) => {
          try {
              let result = await business.getParamManager().addRestaurant(request.body);
              response.status(200).send(result);
          } catch (error) {
              applicationException.errorHandler(error, response);
          }
      });

    router.get('/api/restaurant/last', async (request, response, next) => {
            try {
                let result = await business.getParamManager().getLastRestaurant();
                response.status(200).send(result);
            } catch (error) {
                applicationException.errorHandler(error, response);
            }
        });

    router.get('/api/restaurant/:id', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getRestaurant(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};
export default paramEndpoint;
