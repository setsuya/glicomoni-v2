import React from 'react';

import { BiCaretRight } from "react-icons/bi";

import { Container, Graph, Dates, Values, Column } from './styles';

export default function Graphic({ points = [50, 40, 15, 43, 7, 76, 49, 6, 13, 41, 36], dates = [new Date().toLocaleDateString('pt-BR'), new Date().toLocaleDateString('pt-BR')], ...rest }) {
  const min = [...points].sort((a, b) => { return (a - b); })[0];
  const max = [...points].sort((a, b) => { return (b - a); })[0];
  const average = points.reduce((a, b) => { return (a + b); }, 0) / points.length;
  const variationSize = (max - min);
  const spacingSize = (360 / (points.length - 1));
  const graphPoints = createPoints();

  function createPoints() {
    const graphPoints = [];

    for (let i = 0; i < points.length; i++) {
      graphPoints.push(`${(spacingSize * i) + 5},${((max - points[i]) * (50 / variationSize) + 5)}`);
    }

    return graphPoints;
  }

  return (
    <Container>
      <Graph>
        <svg width="370" height="60">
          <polyline points={`${graphPoints.join(' ')}`} fill="none" stroke="#000" strokeWidth="2" />
          {graphPoints.map((point, index) => {
            const [cx, cy] = point.split(',');

            return (<circle key={index} cx={`${cx}`} cy={`${cy}`} r="2.5" fill={points[index] < 80 || points[index] > 150 ? "#ff0c0c" : "#000"} />);
          })}
        </svg>
      </Graph>
      <Dates>
        <div>{dates[0]}</div>
        <div><BiCaretRight /><BiCaretRight /><BiCaretRight /><BiCaretRight /><BiCaretRight /></div>
        <div>{dates[1]}</div>
      </Dates>
      <Values>
        <Column>
          <div>MIN</div>
          <div>{min}</div>
        </Column>
        <Column>
          <div>MAX</div>
          <div>{max}</div>
        </Column>
        <Column>
          <div>AVG</div>
          <div>{average.toLocaleString('pt-BR')}</div>
        </Column>
      </Values>
    </Container>
  );
}