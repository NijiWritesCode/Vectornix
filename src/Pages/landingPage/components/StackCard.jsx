import React from 'react'

const StackCard = ({ icon: Icon, color, label }) => {
  return (
    <div className="w-24 h-24 flex flex-col items-center justify-center rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <Icon size={40} className="mb-3" style={{ color }} />

      {/* Label */}
      <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
        {label}
      </h3>
    </div>
  )
}

export default StackCard