import { Section } from './Sectioin/Section';
import { Title } from './Title/Title';
import { friends } from '../data/index';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Title />
      <Section friends={friends} />
      React homework template
    </div>
  );
};
