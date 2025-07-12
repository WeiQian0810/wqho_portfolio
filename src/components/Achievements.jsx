import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { certificates } from '../constants';

const CertificateCard = ({
  index,
  title,
  description,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={`cert-${title}`}
        className="w-24 h-24 object-contain mb-4 rounded-lg shadow-lg"
      />
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-secondary text-sm mt-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-400 underline text-sm"
        >
          View Credential
        </a>
      )}
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications & Badges</h2>
        </motion.div>
      </div>
      <div className={`-mt-16 pb-10 ${styles.paddingX} flex flex-wrap justify-center gap-7`}>
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, '');
