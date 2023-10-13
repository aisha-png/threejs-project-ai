import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { 
  headContainerAnimation, 
  headContectAnimation, 
  headTextAnimation, 
  slideAnimation } from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <div>Home</div>
  )
}

export default Home