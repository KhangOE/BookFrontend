import { useState,useEffect } from "react"
import { Side } from "./side"
import axios from 'axios'
export const Home = (props) => {
    const [filter,setFilter] = useState('8')
     let [users, setUsers] = useState([]);
 const [avatar,setAvatar] = useState('')
  const [avatarPreview,setAvatarPreview] = useState('')
  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("http://localhost:5000/5")
      .then(response => setUsers(response.data));
  }, []);

   useEffect(() => {
    axios
      .post("http://localhost:5001/",{avatar:avatar})
      .then(response => setUsers(response.data))
      .then(()=>{console.log('123')})
  },[avatar]);
   const handleAvatarChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setAvatar(e.target.value);
    }
  };
  
    return <>
    <h1 className="text-3xl font-bold font-serif  ">
    Home page
  <h2>The JSON below is loaded from an external API!</h2>
      <code>{JSON.stringify(users)}</code>
    </h1>
     <img className="img-preview" src={avatarPreview} />
   <input
                              id="avatar-files"
                            
                              type="file"
                              className="form-control-file"
                              onChange={handleAvatarChange}
                              name="avatar"
                            />
       <Side state={filter} setState={setFilter} />
    </>
}