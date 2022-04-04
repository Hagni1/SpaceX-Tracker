import "../styles/RenderObject.scss";
const RenderObject = ({ data, launchpad, payload }) => {
  return (
    <section className="Object">
      <h2>{data.name}</h2>
      <p>
        {data.date_local.slice(0, 10)} {data.date_local.slice(11, 16)}
      </p>
      <img src={data.links.patch.small} alt="" />
      <p>{data.details}</p>
      <p>lauchpad : {launchpad[0].name}</p>
      <p>Region : {launchpad[0].region}</p>
      <p>Payload : {payload.length > 0 ? payload[0].type : null}</p>
      <p>
        {data.success ? (
          <h2>successful</h2>
        ) : data.upcoming ? (
          <h2>upcomming</h2>
        ) : (
          <h2>unsuccessful</h2>
        )}
      </p>
      {!data.upcoming && (
        <p>
          YouTube link:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://youtu.be/${data.links.youtube_id}`}
          >
            link
          </a>
        </p>
      )}
          <p>
          {data.failures.length > 0 ? <p> Reason : {data.failures[0].reason}</p>:null}
      </p>
    </section>
  );
};

export default RenderObject;
