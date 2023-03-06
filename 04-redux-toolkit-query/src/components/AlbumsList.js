import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';


function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  let content;

  const handleAddAlbum = () => addAlbum(user)

  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading albums</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>
      return <ExpandablePanel key={album.id} header={header}>
        List of photos
      </ExpandablePanel>
    })
  }

  return (
    <div>
      <div>Albums for {user.name}</div>
      <Button onClick={handleAddAlbum}>
        + Add Album
      </Button>
      <div> {content} </div>
    </div>
  )
}

export default AlbumsList;