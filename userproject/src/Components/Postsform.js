import {React,useState} from 'react'

export default function Postsform(props) {
    const [uid, setUid] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const postdataSubmit = (event) => {
        event.preventDefault();
        if (uid && body && title) {
            const Addpostdata = {
                uid: uid,
                title: title,
                body: body,

            }
            props.savepostData(Addpostdata)
        }
        else {
            alert("posts data feild can not be empty")
        }

    }
    return (
        <div>
            <form onSubmit={postdataSubmit}>

                Userid : <input type="Number" name="body" value={uid} onChange={(e) => {
                    setUid(e.target.value)}}/>
                Body : <input type="text" name="body" value={body} onChange={(e) => {
                    setBody(e.target.value)}} />
                title : <input type="text" name="title"  value={title} onChange={(e) => {
                    setTitle(e.target.value)}}/>
                <button type="submit">Add Posts</button>
                <button type="cancel" onClick={props.PostCancel}>Cancel</button>
</form>
        </div>
    )
}
