import paramDAO from '../DAO/paramDAO';

function create() {
    async function queryLights() {
        let result = paramDAO.queryLights();
        if (result) {
            return result;
        }
    }

     async function addLights(object) {
         let result = paramDAO.addLights(object);
         if(result) {
           return result;
         }
       }

     async function getLights(id) {
           let result = paramDAO.getLights(id);
           if (result) {
               return result;
           }
         }

    async function queryAir() {
        let result = paramDAO.queryAir();
        if (result) {
            return result;
        }
    }

async function getLast() {
        let result = paramDAO.getLast();
        if (result) {
            return result;
        }
    }

     async function addAir(object) {
         let result = paramDAO.addAir(object);
         if(result) {
           return result;
         }
     }

     async function getAir(id) {
           let result = paramDAO.getAir(id);
           if (result) {
               return result;
           }
     }

    async function queryRestaurant() {
        let result = paramDAO.queryRestaurant();
        if (result) {
            return result;
        }
    }

     async function addRestaurant(object) {
         let result = paramDAO.addRestaurant(object);
         if(result) {
           return result;
         }
     }

     async function getLastRestaurant() {
             let result = paramDAO.getLastRestaurant();
             if (result) {
                 return result;
             }
         }

     async function getRestaurant(id) {
           let result = paramDAO.getRestaurant(id);
           if (result) {
               return result;
           }
     }

    return {
        queryLights: queryLights,
        addLights: addLights,
        getLights: getLights,
        queryAir: queryAir,
        getLast: getLast,
        addAir: addAir,
        getAir: getAir,
        queryRestaurant: queryRestaurant,
        addRestaurant: addRestaurant,
        getLastRestaurant: getLastRestaurant,
        getRestaurant: getRestaurant
    };
}

export default {
    create: create
};
