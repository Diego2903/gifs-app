

export const GifItem = ({ url, title }) => {





    return (
        <div className="card">

            <img src={url} alt={title}/>
            <p>{title.length > 20?title.substring(0,17) + `...`: title}</p>

        </div>
    )


}
