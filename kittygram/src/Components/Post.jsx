 function Post(props){
    return <div id="Post">
        <h1>{props.title}</h1>
        <img src={props.pic} alt="" />
    </div>
}

export default Post;