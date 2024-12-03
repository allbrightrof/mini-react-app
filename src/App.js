import React from 'react';

import ImageComponent from './components/ImageComponent';
import TextComponent from './components/TextComponent';
import TableComponent from './components/TableComponent';
import ButtonComponent from './components/ButtonComponent';
import PropsComponent from './components/PropsComponent';
import StatePropsComponent from './components/StatePropsComponent';
import ClickEventComponent from './components/ClickEventComponent';
import ConditionalRendering from './components/ConditionalRendering';

const App = () => {
  return (
    <div className="App">
      <h1>React Components Example</h1>
      <ImageComponent />
      <TextComponent />
      <TableComponent />
      <ButtonComponent />
      <PropsComponent text="This is a prop passed to this component!" />
      <StatePropsComponent initialCount={1} />
      <ClickEventComponent />
      <ConditionalRendering />
    </div>
  );
};

export default App;
