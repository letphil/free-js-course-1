interface IInfoCards {
  infoCardsData: {
    image: string;
    title: string;
    description: string;
  }[];
}

export default function InfoCards({ infoCardsData }: IInfoCards) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
      {infoCardsData.map((infoCard, idx: number) => (
        <div
          key={`${infoCard.title}-${idx.toString()}`}
          className="card shadow-lg"
        >
          <figure>
            <img src={infoCard.image} alt="Pizza" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{infoCard.title}</h2>
            <p>{infoCard.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
