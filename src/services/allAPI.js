import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// uploading a video
export const uploadVideo = async (body)=>{
//    call post http request to http://localhost:4000 to add videos in json server return responseto Add component 
  return await commonAPI('POST',`${serverURL}/videos`,body)

}

// getting all videos

export const getAllVideos = async ()=>{
    //    call get http request to http://localhost:4000/videos to get videos from json server return response to view component 
      return await commonAPI('GET',`${serverURL}/videos`,"")
    
    }
// get a single  video

export const getAVideo = async (id)=>{
    //    call get http request to http://localhost:4000/videos/id to get a video from json server return response to videoCard component 
      return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
    
    }

    // delete a single  video

export const deleteAVideo = async (id)=>{
    //    call delete http request to http://localhost:4000/videos/id to delete a video from json server return response to videoCard component 
      return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
    
    }


    // store video watching history to json server
    export const watchHistory = async (videoHistory)=>{
      //    call post http request to http://localhost:4000/history to add video history in json server return response to videoCards  component 
        return await commonAPI('POST',`${serverURL}/history`,videoHistory)
      
      }

    // store video watching history to json server

export const getHistory = async ()=>{
    //    call get http request to http://localhost:4000/history to get video history from json server return response to watch history component 
      return await commonAPI('GET',`${serverURL}/history`,"")
    
    }


    // delete video watching history from json server

export const deleteHistory = async (id)=>{
    //    call delete http request to http://localhost:4000/history/id to delete video history from json server return response to watch history component 
      return await commonAPI('DELETE',`${serverURL}/history${id}`,{})
    
    }



    // add category to json server

    export const saveCategory = async (body)=>{
      //    call post http request to http://localhost:4000/categories to add category in json server return response to category component 
        return await commonAPI('POST',`${serverURL}/categories`,body)
      
      }
      

      // get saved Category from json server

      export const getCategory = async ()=>{
        //    call get http request to http://localhost:4000/categories to get category from json server return response to category component 
          return await commonAPI('GET',`${serverURL}/categories`,"")
        
        }


        
    // delete a category

export const deleteACategory = async (id)=>{
  //    call delete http request to http://localhost:4000/categories/id to delete a category from json server return response to category component 
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
  
  }


  // update category

  export const updateCategory = async (id,body)=>{
    //    call put http request to http://localhost:4000/categories/id to update a category from json server return response to category component 
      return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
    
    }