import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpendablePanel from "./ExpendablePanel";
import PhotosList from "./PhotosList";



function AlbumsListItem ({album}){
    const [removeAlbum,results] = useRemoveAlbumMutation ();

    const handleRemoveAlbum =() => {
        removeAlbum(album);
    }
const header = (
        <> 
            <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
                <GoTrash/>
            </Button>
            {album.title}
        </>
        );
    return (
    <ExpendablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExpendablePanel>
    );
}


export default AlbumsListItem;