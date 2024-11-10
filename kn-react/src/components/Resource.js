import "../components/Resources";
import "../css/Resource.css";

const Resource = (resource) => {
    return (
        <div id="resource">
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
        </div>
    )
};

export default Resource;