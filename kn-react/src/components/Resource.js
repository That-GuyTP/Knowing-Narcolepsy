import "../components/Resources";

const Resource = (resource) => {
    return (
        <section className="columns">
            <section className="one">
                <a href={resource.websiteLink} target="_blank" rel="noreferrer">
                <img className="support-img" href={resource.websiteLink} src={resource.image} alt={resource.image}></img>
                </a>
            </section>
            <section className="three">
                <p>{resource.description}</p>
            </section>
        </section>
    )
}

export default Resource;