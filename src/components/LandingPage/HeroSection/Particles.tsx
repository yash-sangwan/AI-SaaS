import React from 'react'

const Particles: React.FC = () => {
  // Generate an array of 50 particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1, // Random size between 1 and 3
    x: Math.random() * 100, // Random x position
    y: Math.random() * 100, // Random y position
    animationDuration: Math.random() * 10 + 10, // Random duration between 10s and 20s
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-300 opacity-30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.animationDuration}s infinite ease-in-out`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
          }
        }
      `}</style>
    </div>
  )
}

export default Particles