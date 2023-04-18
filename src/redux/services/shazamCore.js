import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' ;

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '4edeeed9f8msh03cd76845c98c0cp1213a3jsn43c12492a85e',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
         reducerPath: 'shazamCoreAPi',
         baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key', '56ed8b6826msh7da679613a34cefp1a01aejsn6be3bcd07a97' );
                return headers;
            }
         }),
         endpoints: (builder) =>({
            // getSongDetails: builder.query({query: (songid) => `/shazam-songs/get-details?id​=${songid}`}),
            
            getTopCharts: builder.query({query: () => '/charts/track'}),
            
         }),
    });
    export const {
        useGetTopChartsQuery,
        // useGetSongDetailsQuery,
    } = shazamCoreApi;