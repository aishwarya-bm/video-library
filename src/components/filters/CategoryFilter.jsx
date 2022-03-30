
export default function CategoryFilter() {
  const { state: stateFilter, dispatch: dispatchFilter } = useFilterProducts();
  return (
    <>
      <h5>Category</h5>
      <ul className="list list-no-bullet">
        <li>
          <input
            type="checkbox"
            id="brushes"
            name="brushes"
            onChange={() => {
              
            }}
            checked={{}}
          />
          <label htmlFor="brushes">Brushes</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="colours"
            name="colours"
            onChange={() =>
             {}
            }
            checked={{}}
          />
          <label htmlFor="colours">Colours</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="papers"
            name="papers"
            onChange={() =>{
            }}
            checked={{}}
          />
          <label htmlFor="papers">Papers</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sketch"
            name="sketch"
            onChange={() =>
              
            }
            checked={{}}
          />
          <label htmlFor="sketch">Sketch</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="canvas"
            name="canvas"
            onChange={() =>
            }
            checked={{}}
          />
          <label htmlFor="canvas">Canvas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="medium"
            name="medium"
            onChange={() =>{}
            }
            checked={{}}
          />
          <label htmlFor="medium">Mediums</label>
        </li>
      </ul>
    </>
  );
}
