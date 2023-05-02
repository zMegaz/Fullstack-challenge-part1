import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
  };
  const StatisticsLine = (props) => {
    return (
      <>
        {props.text}
        {props.value}
        {props.text2}
      </>
    );
  };
  const Statistics = (props) => {
    const all = [good + neutral + bad];
    if (good === 0 && bad === 0 && neutral === 0) {
      return <h2>No feedback given</h2>;
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <StatisticsLine text={<td>good </td>} value={<td> {good}</td>} />
            </tr>
            <tr>
              <StatisticsLine
                text={<td>neutral</td>}
                value={<td>{neutral}</td>}
              />
            </tr>
            <tr>
              <StatisticsLine text={<td>bad</td>} value={<td>{bad}</td>} />
            </tr>
            <tr>
              <StatisticsLine text={<td>all</td>} value={<td>{all}</td>} />
            </tr>
            <tr>
              <StatisticsLine
                text={<td>average</td>}
                value={<td>{[good, -bad].reduce((a, b) => a + b, 0) / all}</td>}
              />
            </tr>
            <tr>
              <StatisticsLine
                text={<td>positive</td>}
                value={<td>{(good * 100) / all}</td>}
                text2={<td>%</td>}
              />
            </tr>
          </tbody>
        </table>
      );
    }
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text={"good"}
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text={"natural"}
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text={"bad"}
      />
      <h1>statistics</h1>
      <Statistics />
    </div>
  );
};
export default App;
