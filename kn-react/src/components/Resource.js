import "../components/Resources";

const Resource = (resource) => {
    return (
        <section class="columns">
            <section class="one">
                <a href={resource.websiteLink} target="_blank" rel="noreferrer">
                <img class="support-img" href={resource.websiteLink} src={resource.image} alt={resource.image}></img>
                </a>
            </section>
            <section class="three">
                <p>{resource.description}</p>
            </section>
        </section>
    )
}

export default Resource;