export default function CardDisplay(props) {
  return (
    <div className="row mx-auto g-3 my-3 my-xxl-5">
      <div className="col-xxl-12 mx-auto mb-4 my-xxl-0">
        <div className="row gy-5 gx-3">
          <div className="col-12 my-1">
            {/* <hr style={{height: "5px"}}/> */}
          </div>
          {props.cards.map((card) => (
            <div key={card.id} className="col-sm-6 col-md-4 col-xxl-3">
              <props.cardType info={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
