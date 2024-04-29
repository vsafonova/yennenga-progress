export default function Method({ image, heading, text }) {
  return (
    <div className="wrapper flex flex-col items-center gap-10 ">
      <div>
        <img src={`/images/${image}`} />
      </div>
      <div>
        <h3>
          {heading}
        </h3>
      </div>
      <div>
        <p className="text-lg leading-loose px-8">
          {text}
        </p>
      </div>
    </div>
  );
}
