import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpendablePanel from "./ExpendablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem ({user }){
    const[doRemoveUser,isLoading, error] =useThunk(removeUser);


    const handleClick = () =>{
        doRemoveUser(user)
    };

    const header = <>
        <Button className="mr-3"  loading={isLoading} onClick = {handleClick}>
            <GoTrash/>
        </Button>
        {error && <div> Erorr deleting user .</div>}
        {user.name}
    </>


     return (
        <ExpendablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpendablePanel>
 );
}


export default UsersListItem;