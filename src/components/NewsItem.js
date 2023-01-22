import React from 'react'

const Newsitem = (props) => {



    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={
                    { display: "flex", justifyContent: "flex-end", position: "absolute", right: "0 " }}>
                    <span className="  badge rounded-pill bg-danger"  >
                        {source}
                    </span>
                </div>

                <img src={imageUrl ? imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffindicons.com%2Fsearch%2Fno-image-available&psig=AOvVaw2FKSXu2iLLtmuLtH5awjNY&ust=1672136090558000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDag7-Gl_wCFQAAAAAdAAAAABAE"} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{title}
                    </h5>
                    <p className="card-text"> {description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem


