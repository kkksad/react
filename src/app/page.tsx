import UserCard from './widgets/ui/Author';
import UserSkills from './widgets/ui/Skills';
import Footer from './widgets/ui/Footer';
import styles from './styles/index.module.css';

const author = {
  firstName: 'Anton',
  lastName: 'Morozov',
  age: 40,
  role: 'Teacher',
  place: 'Russia'
};

const skills = [
  { id: 1, value: 'Progger' },
  { id: 2, value: 'HTML' },
  { id: 3, value: 'CSS' },
  { id: 4, value: 'Kids' },
  { id: 5, value: 'Ukazka' },
];

const App: React.FC = () => {
  return (  
    <div className={styles.container}>
      <UserCard author={author}/>
      <UserSkills skills={skills}/>
      <Footer />
  </div>
  );

};
export default App

