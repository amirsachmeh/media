import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {  faker } from '@faker-js/faker';




const photosApi = createApi ({
    reducerPath:'photos',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
        return {
            fetchPhotos :builder.query({
                providesTags: (results,error, album) =>{
                    const tags = results.map((photo)=>{
                        return{type:'Photo',id:photo.id};
                    });
                    tags.push({type:'AlbumPhoto',id:album.id});
                    return tags;
                },
                query: (album) =>{
                    return {
                        url: '/photos',
                        params : {
                            albumId: album.id
                        },
                        method :'GET'
                    };
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result,error, album) =>{
                    return[{type:'AlbumPhoto',id:album.id}];
                },
                query: (album) =>{
                    return {
                        url: '/photos',
                        method:'POST',
                        body : {
                            albumId: album.id,
                            url: faker.image.urlLoremFlickr({height: 150, width: 150, category: 'nature'} )
                        },
                    };
                },
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result,error, photo) =>{
                    return[{type:'Photo',id:photo.id}];
                },
                query:(photo) => {
                    return {
                        method:'DELETE',
                        url: `/photos/${photo.id}`,
                    };
                },
            }),
        };
    },
});

export const {useAddPhotoMutation,useFetchPhotosQuery,useRemovePhotoMutation}  = photosApi;
export {photosApi};