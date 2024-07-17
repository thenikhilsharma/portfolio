import Image from "next/image";

type EduCardProps = {
  institute: string;
  course: string;
  duration: string;
};

const EduCard: React.FC<EduCardProps> = ({ institute, course, duration }) => {
  return (
    <div className='education-card'>
      <ul className='education'>
        <li className='education-heading'>
          <Image src="/school.png" alt="school" height={40} width={40} className="invert" />
        </li>
        <li className='education-data'>
          <ul>
            <li><h3>{course}</h3></li>
            <li><h4>{institute}</h4></li>
            <li><h4>{duration}</h4></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const Resume: React.FC = () => {
  return (
    <div className="content">
      <div className='education-card-container'>
        <div className='education-card'>
          <ul className='education'>
            <li className='education-heading'>
              <Image src="/college.png" alt="college" height={50} width={50} className="invert" />
            </li>
            <li className='education-data'>
              <ul>
                <li><h3>BTech, Mechanical Engineering</h3></li>
                <li><h4>VNIT, Nagpur</h4></li>
                <li><h4>2023 - 2027</h4></li>
              </ul>
            </li>
          </ul>
        </div>
        <EduCard institute="Naini Valley School" course="CBSE, Secondary (XII), Science" duration="2018 - 2022" />
      </div>
    </div>
  );
};

export default Resume;