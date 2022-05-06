import { gql } from "@apollo/client";

export const GET_VIDEO_BY_ID_QUERY = gql`
query GetVideoById ($id :String!) {
    videoById(id : $id){
                    _id
                    originalVideo
                    videoTitle 
                    thumbnail
                    userId {
                        username
                        _id
                        avatar
                      }
                }
}
`;