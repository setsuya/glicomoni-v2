import React from 'react';

import { Container, Table, Header, Body } from './styles';

export default function ResultsTable({ headers = [''], values = [['']] }) {
  function createHeader() {
    const header = [];

    for (const item of headers) {
      header.push(
        <th key={`name_${headers.indexOf(item)}`}>
          <span>{item}</span>
        </th>
      );
    }

    return header;
  }

  function createContent() {
    const content = [];

    for (const item of values) {
      const line = [];

      for (const value of item) {
        line.push(
          <td key={`item_${content.length}_${line.length}`}>
            {value}
          </td>
        );
      }

      content.push(
        <tr key={`line_${content.length}`}>
          {line}
        </tr>
      );
    }

    if (!content.length) {
      content.push(
        <tr key="no_content">
          <td colSpan={headers.length}>
            Nothing to show...
          </td>
        </tr>
      );
    }

    return content;
  }

  return (
    <Container>
      <Table>
        <Header>
          <tr>
            {createHeader()}
          </tr>
        </Header>
        <Body>
          {createContent()}
        </Body>
      </Table>
    </Container>
  );
}