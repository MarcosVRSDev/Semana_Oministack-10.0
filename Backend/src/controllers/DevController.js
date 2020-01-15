const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Controller contém index, show, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const{ github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio} = apiResponse.data;
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude , latitude],
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
    

        }
        return response.json(dev);
    },

    /*async update(request, response){

        const { github_username, techs } = request.query;

        const newtechs = parseStringAsArray(techs);

        const devs = await Dev.find({
            github_username: {
             $in: github_username,
            },   
        });

        devs = Dev.update(
            { github_username },
            { 
              $set: {
                techs: newtechs,
              }
            }
          )
        
        console.log(devs);

        return response.json(devs);
    },

    async destroy(request, response){
        
    },*/
};

