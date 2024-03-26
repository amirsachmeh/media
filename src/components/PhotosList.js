import { useFetchAlbumsQuery,useAddPhotoMutation} from "../store";
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';


function PhotosList ( {album}){
    const  {data,isFetching,error} = useFetchAlbumsQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();


    const  handleAddPhoto  = () =>{
        addPhoto(album);
    };


    let content;
    if(isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>
    } else if(error){
        content = <div>it is a Eror</div>
    } else{
        content = data.map( photo =>{
            return <PhotosListItem key={photo.id} photo={photo}/>
            
          
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row item-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto }>
                    + Add Photo 
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-warp  justify-center"> 
            {content}
            </div>
        </div>
    );

}


export default PhotosList;