const GiphDisplay = ({ giph }) => {
    console.log(giph)
    return giph.data ? (
        <>
        <p>Use Giphy to pull some giphs</p>
            <img src={giph.data.images.original.url} alt={giph.data.title} />
        </>
    ) : (
        <div></div>

    )
}

export default GiphDisplay;