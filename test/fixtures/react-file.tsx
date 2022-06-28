/* eslint-disable @typescript-eslint/no-unsafe-return */
const helloWorld = () => 'Hello, World!';
export default helloWorld;

function emptyListMessage() {
  return 'No items';
}

export const SampleComponent = (): JSX.Element => {
  const fruits = ['apple', 'banana', 'orange'];
  const listTitles = ['sample'];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {listTitles.map((listTitle) => (
            <div key={listTitle}>
              <ul>
                {fruits.length > 0
                  ? emptyListMessage()
                  : fruits.map((fruit) => (
                      <li style={{ display: 'list-item' }} key={fruit}>
                        {fruit}
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
