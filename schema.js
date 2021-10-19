const { default: axios } = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLList
} = require('graphql');

const LauncheType = new GraphQLObjectType({
    name:"Launche",
    fields: ()=>({
        flight_number: {type: GraphQLString},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType},
    })
});
const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields:()=>({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString},
    })
});
const RootQuery = new GraphQLObjectType({
    name:"query",
    fields:{
        lauches:{
            type: new GraphQLList(LauncheType),
            resolve(parent , args){
                return axios.get('https://api.spacexdata.com/v3/launches').then((res) => res.data);
            }
        },
        lauche:{
            type: LauncheType,
            args:{
                flight_number: {type: GraphQLString}
            },
            resolve(parent , args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then((res) => res.data);
            }
        },
        rocket:{
            type: new GraphQLList(RocketType),
            resolve(parent , args){
                return axios.get('https://api.spacexdata.com/v3/rockets').then((res) => res.data);
            }
        },
        rockets:{
            type: RocketType,
            args:{
                id: {type: GraphQLString}
            },
            resolve(parent , args){
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`).then((res) => res.data);
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
})