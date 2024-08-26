const TicketsBar = () => {

  return (
    <div className="ticketsContainer">
      {Array.from({length: 50}).map((item, index) => {
        <button className="seats">{index + 1}</button>;
      })}
    </div>
  );
};
export default TicketsBar;
