import { Section } from './Sectioin/Section';
import { Title } from './Title/Title';
import { friends } from '../data/index';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Title />
      <Section friends={friends} />
      React homework template
    </Wrapper>
  );
};
