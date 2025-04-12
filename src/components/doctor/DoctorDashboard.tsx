import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Syringe,
  Stethoscope,
  Pill,
  Bone
} from 'lucide-react';
import MedicalNode from './MedicalNode';
import './styles.css';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-blue-900 overflow-hidden p-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating heartbeats */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          >
            <HeartPulse className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative h-full w-full grid grid-cols-3 grid-rows-3 gap-8">
        <MedicalNode 
          title="Vaccinations" 
          icon={<Syringe className="w-8 h-8 text-white" />}
          progress={75}
          position={{ top: '20%', left: '20%' }}
          type="syringe"
        />

        <MedicalNode 
          title="Medications" 
          icon={<Pill className="w-8 h-8 text-white" />}
          progress={60}
          position={{ top: '20%', left: '80%' }}
          type="pill"
        />

        <MedicalNode 
          title="Checkups" 
          icon={<Stethoscope className="w-8 h-8 text-white" />}
          progress={90}
          position={{ top: '80%', left: '20%' }}
          type="stethoscope"
        />

        <MedicalNode 
          title="X-Rays" 
          icon={<Bone className="w-8 h-8 text-white" />}
          progress={45}
          position={{ top: '80%', left: '80%' }}
          type="xray"
        />

        {/* Central Animation */}
        <motion.div 
          className="col-start-2 row-start-2 flex justify-center items-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="medical-cross relative w-32 h-32">
            <div className="absolute inset-0 bg-blue-400/20 rounded-lg rotate-45" />
            <HeartPulse className="absolute inset-0 m-auto w-24 h-24 text-blue-400" />
          </div>
        </motion.div>
      </div>

      {/* Vital Signs Monitor Effect */}
      <div className="absolute bottom-8 left-8 right-8 h-32 bg-blue-900/80 border-2 border-blue-400/20 rounded-lg p-4 backdrop-blur-sm">
        <div className="relative h-full">
          <div className="animate-heartbeat-line absolute inset-0 w-full h-full">
            <svg viewBox="0 0 100 20" className="w-full h-full">
              <path
                d="M0 10 Q 25 15 50 10 T 100 10"
                stroke="rgba(255,255,255,0.3)"
                fill="none"
                strokeWidth="0.5"
              />
              <path
                d="M0 10 Q 25 5 50 10 T 100 10"
                stroke="rgba(255,255,255,0.3)"
                fill="none"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="relative z-10 text-blue-400 flex justify-between">
            <div>Patient Status</div>
            <div>Live Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard; 