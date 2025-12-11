import weighingImg from '../assets/weighing.jpeg'; 
import TmsImg from '../assets/tms.png';
import hrgaImg from '../assets/hrga.png';

export const projects = [
  {
    id: 'aritmatika-solver', // <-- ID unik
    title: 'Weighing System',
    description: 'This program is a desktop application designed to collect data from a weighing indicator, which is used to calculate the net weight of goods carried by transport vehicles.',
    image: weighingImg
  },
  {
    id: 'autochat-discord', // <-- ID unik
    title: 'HR System',
    description: 'A comprehensive web application designed to streamline General Affairs (GA) operations within a manufacturing environment. The system digitizes the entire workflow of facility requests, asset management, and operational vehicle scheduling, significantly reducing paperwork and approval turnaround time.',
    image: hrgaImg
  },
  
  {
    id: 'traingin-system', // <-- ID unik
    title: 'Training Management System',
    description: 'A robust Enterprise Resource Planning (ERP) module developed to streamline the entire lifecycle of employee training, budget tracking, and competency mapping for a large-scale manufacturing company. The system serves as a centralized hub for managing the development of over 300 employees.',
    image: TmsImg
  },
];