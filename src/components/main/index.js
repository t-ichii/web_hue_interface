import React from 'react';

const Main = (props) => {
  return (
    <>
      <div>username: {props.username ? 'OK.' : 'plz press link button'} <button onClick={() => location.reload()}>Reload</button></div>
      <div><button onClick={props.getLights}>get lights</button></div>
      {
        props.lights.length > 0 &&
          <table>
            <tr>
              <th>name</th>
              <th>uniqueid</th>
              <th>status</th>
              <th>switch</th>
            </tr>
            {
              props.lights.map(light => {
                return (
                  <tr>
                    <th>{light.name}</th>
                    <td>{light.uniqueid}</td>
                    <td>{JSON.stringify(light.state)}</td>
                    <td>
                      <button onClick={() => props.switchLight(light.id, !light.state.on)}>switch</button>
                    </td>
                  </tr>
                )
              })
            }
          </table>
      }
    </>
  );
};

export default Main;
