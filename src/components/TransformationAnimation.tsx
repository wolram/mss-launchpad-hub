import { useEffect, useState } from "react";

const shapes = [
  // Robô inicial
  { 
    name: "robot",
    path: "M12 2C10.9 2 10 2.9 10 4V6H8C6.9 6 6 6.9 6 8V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V8C18 6.9 17.1 6 16 6H14V4C14 2.9 13.1 2 12 2ZM12 4C12.6 4 13 4.4 13 5S12.6 6 12 6S11 5.6 11 5S11.4 4 12 4ZM9 9H11V11H9V9ZM13 9H15V11H13V9ZM10 13H14V15H10V13Z"
  },
  // Carro
  { 
    name: "car",
    path: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
  },
  // Foguete
  { 
    name: "rocket",
    path: "M2.81 14.12L5.64 11.29C8.34 10.79 11.04 9.69 13.64 7.09C17.89 2.84 23.1 2.84 23.1 2.84S23.1 8.05 18.85 12.3C16.25 14.9 15.15 17.6 14.65 20.3L11.82 17.47C11.95 17.67 12 17.83 12 18C12 19.1 11.1 20 10 20S8 19.1 8 18S8.9 16 10 16C10.17 16 10.33 16.05 10.53 16.18L7.7 13.35C7.83 13.55 7.88 13.71 7.88 13.88C7.88 14.98 6.98 15.88 5.88 15.88S3.88 14.98 3.88 13.88S4.78 11.88 5.88 11.88C6.05 11.88 6.21 11.93 6.41 12.06L9.24 9.23C6.54 9.73 3.84 10.83 1.24 13.43L2.81 14.12Z"
  },
  // Óculos
  { 
    name: "glasses",
    path: "M2 12C2 13.1 2.9 14 4 14H7C8.1 14 9 13.1 9 12S8.1 10 7 10H4C2.9 10 2 10.9 2 12ZM15 12C15 13.1 15.9 14 17 14H20C21.1 14 22 13.1 22 12S21.1 10 20 10H17C15.9 10 15 10.9 15 12ZM11 12H13V10H11V12Z"
  },
  // Pão
  { 
    name: "bread",
    path: "M18 8C16.3 6 14.2 5 12 5S7.7 6 6 8C4 10 4 14 6 16C7.7 18 9.8 19 12 19S16.3 18 18 16C20 14 20 10 18 8ZM12 17C10.3 17 8.7 16.2 7.5 15C6.5 13.8 6.5 12.2 7.5 11C8.7 9.8 10.3 9 12 9S15.3 9.8 16.5 11C17.5 12.2 17.5 13.8 16.5 15C15.3 16.2 13.7 17 12 17Z"
  },
  // Tsuru (origami)
  { 
    name: "crane",
    path: "M12 2L10 6H14L12 2ZM8 8L4 12L8 16L12 12L8 8ZM16 8L12 12L16 16L20 12L16 8ZM12 14L10 18H14L12 14Z"
  },
  // Spitz Alemão (cachorro)
  { 
    name: "dog",
    path: "M4.5 12C4.5 12.8 5.2 13.5 6 13.5S7.5 12.8 7.5 12S6.8 10.5 6 10.5S4.5 11.2 4.5 12ZM16.5 12C16.5 12.8 17.2 13.5 18 13.5S19.5 12.8 19.5 12S18.8 10.5 18 10.5S16.5 11.2 16.5 12ZM12 16C14 16 15.8 14.8 16.8 13H7.2C8.2 14.8 10 16 12 16ZM12 2C8.7 2 6 4.7 6 8V14C6 17.3 8.7 20 12 20S18 17.3 18 14V8C18 4.7 15.3 2 12 2ZM9 6L10 4L11 6H9ZM15 6L14 4L13 6H15Z"
  }
];

const TransformationAnimation = () => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentShapeIndex((prev) => (prev + 1) % shapes.length);
        setIsTransitioning(false);
      }, 800); // Meio da transição
      
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const currentShape = shapes[currentShapeIndex];

  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className={`w-32 h-32 transition-all duration-1600 ease-in-out ${
          isTransitioning 
            ? 'scale-110 rotate-12 opacity-30' 
            : 'scale-100 rotate-0 opacity-100'
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 90%, 50%)" />
            <stop offset="100%" stopColor="hsl(260, 75%, 60%)" />
          </linearGradient>
        </defs>
        
        <path
          d={currentShape.path}
          fill="url(#shapeGradient)"
          stroke="url(#shapeGradient)"
          strokeWidth="0.5"
          className="drop-shadow-lg"
        />
        
        {/* Linhas de transformação */}
        <g className={`transition-opacity duration-800 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
          <circle cx="2" cy="2" r="0.5" fill="hsl(220, 90%, 50%)">
            <animate attributeName="cx" values="2;12;22" dur="1.6s" repeatCount="1" />
            <animate attributeName="cy" values="2;12;22" dur="1.6s" repeatCount="1" />
            <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="1" />
          </circle>
          <circle cx="22" cy="2" r="0.5" fill="hsl(260, 75%, 60%)">
            <animate attributeName="cx" values="22;12;2" dur="1.6s" repeatCount="1" />
            <animate attributeName="cy" values="2;12;22" dur="1.6s" repeatCount="1" />
            <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="1" />
          </circle>
        </g>
      </svg>
      
      {/* Nome da forma atual */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <span className={`text-sm font-medium gradient-text transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {currentShape.name === 'robot' && 'Robô Inteligente'}
          {currentShape.name === 'car' && 'Mobilidade'}
          {currentShape.name === 'rocket' && 'Inovação'}
          {currentShape.name === 'glasses' && 'Visão'}
          {currentShape.name === 'bread' && 'Produção'}
          {currentShape.name === 'crane' && 'Criatividade'}
          {currentShape.name === 'dog' && 'Cuidado'}
        </span>
      </div>
    </div>
  );
};

export default TransformationAnimation;